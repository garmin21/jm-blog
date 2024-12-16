前言
==

在上一篇 [给我5分钟，保证教会你在vue3中动态加载远程组件](https://mp.weixin.qq.com/s/LgScgapseayMpkQKbsdbzw)文章中，我们通过`defineAsyncComponent`实现了动态加载远程组件。这篇文章我们将通过debug源码的方式来带你搞清楚`defineAsyncComponent`是如何实现异步组件的。注：本文使用的vue版本为`3.4.19`

欧阳写了一本开源电子书[vue3编译原理揭秘](https://vue-compiler.iamouyang.cn/)，这本书初中级前端能看懂。完全免费，只求一个star。

看个demo
======

还是一样的套路，我们来看个`defineAsyncComponent`异步组件的demo。

本地子组件`local-child.vue`代码如下：

```javascript
<template>
  <p>我是本地组件</p>
</template>
```

异步子组件`async-child.vue`代码如下：

```javascript
<template>
  <p>我是异步组件</p>
</template>
```

父组件`index.vue`代码如下：

```javascript
<template>
  <LocalChild />
  <button @click="showAsyncChild = true">load async child</button>
  <AsyncChild v-if="showAsyncChild" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import LocalChild from "./local-child.vue";

const AsyncChild = defineAsyncComponent(() => import("./async-child.vue"));
const showAsyncChild = ref(false);
</script>
```

我们这里有两个子组件，第一个`local-child.vue`，他和我们平时使用的组件一样，没什么说的。

第二个子组件是`async-child.vue`，在父组件中我们没有像普通组件`local-child.vue`那样在最上面import导入，而是在`defineAsyncComponent`接收的回调函数中去动态import导入`async-child.vue`文件，这样定义的`AsyncChild`组件就是异步组件。

在template中可以看到，只有当点击`load async child`按钮后才会加载异步组件`AsyncChild`。

我们先来看看执行效果，如下gif图：  
![demo](https://img2024.cnblogs.com/blog/1217259/202408/1217259-20240812210451203-873567905.gif)

从上面的gif图可以看到，当我们点击`load async child`按钮后，在network面板中才会去加载异步组件`async-child.vue`。

`defineAsyncComponent`除了像上面这样直接接收一个返回Promise的回调函数之外，还可以接收一个对象作为参数。demo代码如下：

```javascript
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./async-child.vue'),

  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})
```

其中对象参数有几个字段：

*   `loader`字段其实对应的就是前面那种写法中的回调函数。
    
*   `loadingComponent`为加载异步组件期间要显示的loading组件。
    
*   `delay`为显示loading组件的延迟时间，默认200ms。这是因为在网络状况较好时，加载完成得很快，加载组件和最终组件之间的替换太快可能产生闪烁，反而影响用户感受。
    
*   `errorComponent`为加载失败后显示的组件。
    
*   `timeout`为超时时间。
    

在接下来的源码分析中，我们还是以前面那个接收一个返回Promise的回调函数为例子进行debug调试源码。

开始打断点
=====

我们在浏览器中接着来看父组件`index.vue`编译后的代码，很简单，在浏览器中可以像vscode一样使用command（windows中是control）+p就可以唤起一个输入框，然后在输入框中输入`index.vue`点击回车就可以在source面板中打开编译后的`index.vue`文件了。如下图：  
![command](https://img2024.cnblogs.com/blog/1217259/202408/1217259-20240812210504823-498628123.png)

我们看到编译后的`index.vue`文件代码如下：

```javascript
import { defineComponent as _defineComponent } from "/node_modules/.vite/deps/vue.js?v=868545d8";
import {
  defineAsyncComponent,
  ref,
} from "/node_modules/.vite/deps/vue.js?v=868545d8";
import LocalChild from "/src/components/defineAsyncComponentDemo/local-child.vue?t=1723193310324";
const _sfc_main = _defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const showAsyncChild = ref(false);
    const AsyncChild = defineAsyncComponent(() =>
      import("/src/components/defineAsyncComponentDemo/async-child.vue")
    );
    const __returned__ = { showAsyncChild, AsyncChild, LocalChild };
    return __returned__;
  },
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  // ...省略
}

export default _export_sfc(_sfc_main, [["render", _sfc_render]]);
```

从上面的代码可以看到编译后的`index.vue`主要分为两块，第一块为`_sfc_main`对象中的`setup`方法，对应的是我们的`script`模块。第二块为`_sfc_render`，也就是我们常说的render函数，对应的是template中的内容。

我们想要搞清楚`defineAsyncComponent`方法的原理，那么当然是给setup方法中的`defineAsyncComponent`方法打断点。刷新页面，此时代码将会停留在断点`defineAsyncComponent`方法处。

`defineAsyncComponent`方法
========================

然后将断点走进`defineAsyncComponent`函数内部，在我们这个场景中简化后的`defineAsyncComponent`函数代码如下：

```javascript
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const { loader, loadingComponent, errorComponent, delay = 200 } = source;
  let resolvedComp;

  const load = () => {
    return loader()
      .catch(() => {
        // ...省略
      })
      .then((comp) => {
        if (
          comp &&
          (comp.__esModule || comp[Symbol.toStringTag] === "Module")
        ) {
          comp = comp.default;
        }
        resolvedComp = comp;
        return comp;
      });
  };

  return defineComponent({
    name: "AsyncComponentWrapper",
    setup() {
      const instance = currentInstance;
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      load()
        .then(() => {
          loaded.value = true;
        })
        .catch((err) => {
          onError(err);
          error.value = err;
        });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value,
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    },
  });
}

```

从上面的代码可以看到`defineAsyncComponent`分为三部分。

*   第一部分为：处理传入的参数。
    
*   第二部分为：`load`函数用于加载异步组件。
    
*   第三部分为：返回`defineComponent`定义的组件。
    

第一部分：处理传入的参数
------------

我们看第一部分：处理传入的参数。代码如下：

```javascript
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const { loader, loadingComponent, errorComponent, delay = 200 } = source;
  let resolvedComp;
  // ...省略
}

```

首先使用`isFunction(source)`判断传入的`source`是不是函数，如果是函数，那么就将`source`重写为包含`loader`字段的对象：`source = { loader: source }`。然后使用`const { loader, loadingComponent, errorComponent, delay = 200 } = source`解构出对应的loading组件、加载失败组件、延时时间。

看到这里我想你应该明白了为什么`defineAsyncComponent`函数接收的参数可以是一个回调函数，也可以是包含`loader`、`loadingComponent`、`errorComponent`等字段的对象。因为如果我们传入的是回调函数，在内部会将传入的回调函数赋值给`loader`字段。不过loading组件、加载失败组件等参数不会有值，只有`delay`延时时间默认给了200。

接着就是定义了`load`函数用于加载异步组件，这个函数是在第三部分的`defineComponent`中调用的，所以我们先来讲`defineComponent`函数部分。

第三部分：返回defineComponent定义的组件
---------------------------

我们来看看`defineAsyncComponent`的返回值，是一个`defineComponent`定义的组件，代码如下：

```javascript
function defineAsyncComponent(source) {
  // ...省略

  return defineComponent({
    name: "AsyncComponentWrapper",
    setup() {
      const instance = currentInstance;
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      load()
        .then(() => {
          loaded.value = true;
        })
        .catch((err) => {
          onError(err);
          error.value = err;
        });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value,
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    },
  });
}
```

`defineComponent`函数的接收的参数是一个vue组件对象，返回值也是一个vue组件对象。他其实没有做什么事情，单纯的只是提供ts的类型推导。

我们接着来看vue组件对象，对象中只有两个字段：`name`属性和`setup`函数。

`name`属性大家都很熟悉，表示当前vue组件的名称。

大家平时`<script setup>`语法糖用的比较多，这个语法糖经过编译后就是`setup`函数，当然vue也支持让我们自己手写`setup`函数。

提个问题：`setup`函数对应的是`<script setup>`，我们平时写代码都有template模块对应的是视图部分，也就是熟悉的render函数。为什么这里没有render函数呢？

给`setup`函数打个断点，当渲染异步组件时会去执行这个`setup`函数。代码将会停留在`setup`函数的断点处。

在`setup`函数中首先使用`ref`定义了三个响应式变量：`loaded`、`error`、`delayed`。

*   `loaded`是一个布尔值，作用是记录异步组件是否加载完成。
    
*   `error`记录的是加载失败时记录的错误信息，如果同时传入了`errorComponent`组件，在加载异步组件失败时就会显示`errorComponent`组件。
    
*   `delayed`也是一个布尔值，由于loading组件不是立马就显示的，而是延时一段时间后再显示。这个`delayed`布尔值记录的是是当前是否还在延时阶段，如果是延时阶段那么就不显示loading组件。
    

接下来判断传入的参数中设置设置了`delay`延迟，如果是就使用`setTimeout`延时`delay`毫秒才将`delayed`的值设置为false，当`delayed`的值为false后，在loading阶段才会去显示loading组件。代码如下：

```javascript
if (delay) {
  setTimeout(() => {
    delayed.value = false;
  }, delay);
}
```

接下来就是执行`load`函数，这个`load`函数就是我们前面说的`defineAsyncComponent`函数中的第二部分代码。代码如下：

```javascript
load()
  .then(() => {
    loaded.value = true;
  })
  .catch((err) => {
    onError(err);
    error.value = err;
  });
```

从上面的代码可以看到`load`函数明显返回的是一个Promise，所以才可以在后面使用`.then()`和`.catch()`。并且这里在`.then()`中将`loaded`的值设置为true，将断点走进`load`函数，代码如下：

```javascript
const load = () => {
  return loader()
    .catch(() => {
      // ...省略
    })
    .then((comp) => {
      if (
        comp &&
        (comp.__esModule || comp[Symbol.toStringTag] === "Module")
      ) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    });
};
```

这里的`load`函数代码也很简单，在里面直接执行`loader`函数。还记得这个`loader`函数是什么吗？

`defineAsyncComponent`函数可以接收一个异步加载函数，这个异步加载函数可以在运行时去import导入组件。这个异步加载函数就是这里的`loader`函数，执行`loader`函数就会去加载异步组件。在我们这里是异步加载`async-child.vue`组件，代码如下：

```javascript
const AsyncChild = defineAsyncComponent(() => import("./async-child.vue"));
```

所以这里执行`loader`函数就是在执行`() => import("./async-child.vue")`，执行了`import()`后就可以在`network`面板看到加载`async-child.vue`文件的网络请求。`import()`返回的是一个Promise，等import的文件加载完了后就会触发Promise的`then()`，所以这里的`then()`在此时不会触发。

接着将断点走出`load`函数回到`setup`函数的最后一个return部分，代码如下：

```javascript
setup() {
  // ...省略
  return () => {
    if (loaded.value && resolvedComp) {
      return createInnerComp(resolvedComp, instance);
    } else if (error.value && errorComponent) {
      return createVNode(errorComponent, {
        error: error.value,
      });
    } else if (loadingComponent && !delayed.value) {
      return createVNode(loadingComponent);
    }
  };
},
```

注意看，这里的`setup`的返回值是一个函数，不是我们经常看见的对象。由于这里返回的是函数，此时代码将不会走到返回的函数里面去，给return的函数打个断点。我们暂时先不看函数中的内容，让断点走出`setup`函数。发现`setup`函数是由vue中的`setupStatefulComponent`函数调用的，在我们这个场景中简化后的`setupStatefulComponent`函数代码如下：

```javascript
function setupStatefulComponent(instance) {
  const Component = instance.type;
  const { setup } = Component;
  const setupResult = callWithErrorHandling(setup, instance, 0, [
    instance.props,
    setupContext,
  ]);
  handleSetupResult(instance, setupResult);
}
```

上面的`callWithErrorHandling`函数从名字你应该就能看出来，调用一个函数并且进行错误处理。在这里就是调用`setup`函数，然后将调用`setup`函数的返回值丢给`handleSetupResult`函数处理。

将断点走进`handleSetupResult`函数，在我们这个场景中`handleSetupResult`函数简化后的代码如下：

```javascript
function handleSetupResult(instance, setupResult) {
  if (isFunction(setupResult)) {
    instance.render = setupResult;
  }
}
```

在前面我们讲过了我们这个场景`setup`函数的返回值是一个函数，所以`isFunction(setupResult)`的值为true。代码将会走到`instance.render = setupResult`，这里的`instance`是当前vue组件实例，执行这个后就会将`setupResult`赋值给`render`函数。

我们知道render函数一般是由template模块编译而来的，执行render函数就会生成虚拟DOM，最后由虚拟DOM生成对应的真实DOM。

当`setup`的返回值是一个函数时，这个函数就会作为组件的render函数。这也就是为什么前面`defineComponent`中只有`name`熟悉和`setup`函数，却没有`render`函数。

在执行render函数生成虚拟DOM时就会去执行`setup`返回的函数，由于我们前面给返回的函数打了一个断点，所以代码将会停留在`setup`返回的函数中。回顾一下`setup`返回的函数代码如下：

```javascript
setup() {
  // ...省略
  return () => {
    if (loaded.value && resolvedComp) {
      return createInnerComp(resolvedComp, instance);
    } else if (error.value && errorComponent) {
      return createVNode(errorComponent, {
        error: error.value,
      });
    } else if (loadingComponent && !delayed.value) {
      return createVNode(loadingComponent);
    }
  };
},
```

由于此时还没将异步组件加载完，所以`loaded`的值也是false，此时代码不会走进第一个`if`中。

同样的组件都还没加载完也不会有error，代码也不会走到第一个`else if`中。

如果我们传入了loading组件，此时代码也不会走到第二个`else if`中。因为此时的`delayed`的值还是true，代表还在延时阶段。只有等到前面`setTimeout`的回调执行后才会将`delayed`的值设置为false。

并且由于`delayed`是一个ref响应式变量，所以在`setTimeout`的回调中改变了`delayed`的值就会重新渲染，也就是再次执行render函数。前面讲了这里的render函数就是`setup`中返回的函数，代码就会重新走到第二个`else if`中。

此时`else if (loadingComponent && !delayed.value)`，其中的`loadingComponent`是loading组件，并且`delayed.value`的值也是false了。代码就会走到`createVNode(loadingComponent)`中，执行这个函数就会将loading组件渲染到页面上。

加载异步组件
======

前面我们讲过了在渲染异步组件时会执行`load`函数，在里面其实就是执行`() => import("./async-child.vue")`加载异步组件`async-child.vue`，我们也可以在network面板中看到多了一个`async-child.vue`文件的请求。

我们知道`import()`的返回值是一个Promise，当文件加载完成后就会触发Promise的`then()`。此时代码将会走到第一个`then()`中，回忆一下代码：

```javascript
const load = () => {
  return loader()
    .catch(() => {
      // ...省略
    })
    .then((comp) => {
      if (
        comp &&
        (comp.__esModule || comp[Symbol.toStringTag] === "Module")
      ) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    });
};
```

在`then()`中判断加载进来的文件是不是一个es6的模块，如果是就将模块的`default`导出重写到`comp`组件对象中。并且将加载进来的vue组件对象赋值给`resolvedComp`变量。

执行完第一个`then()`后代码将会走到第二个`then()`中，回忆一下代码：

```javascript
load()
  .then(() => {
    loaded.value = true;
  })
```

第二个`then()`代码很简单，将`loaded`变量的值设置为true，也就是标明已经将异步组件加载完啦。由于`loaded`是一个响应式变量，改变他的值就会导致页面重新渲染，将会再次执行render函数。前面我们讲了这里的render函数就是`setup`中返回的函数，代码就会重新走到第二个`else if`中。

再来回顾一下`setup`中返回的函数，代码如下：

```javascript
setup() {
  // ...省略
  return () => {
    if (loaded.value && resolvedComp) {
      return createInnerComp(resolvedComp, instance);
    } else if (error.value && errorComponent) {
      return createVNode(errorComponent, {
        error: error.value,
      });
    } else if (loadingComponent && !delayed.value) {
      return createVNode(loadingComponent);
    }
  };
},
```

由于此时`loaded`的值为true，并且`resolvedComp`的值为异步加载vue组件对象，所以这次render函数返回的虚拟DOM将是`createInnerComp(resolvedComp, instance)`的执行结果。

createInnerComp函数
=================

接着将断点走进`createInnerComp`函数，在我们这个场景中简化后的代码如下：

```javascript
function createInnerComp(comp, parent) {
  const { ref: ref2, props, children } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  return vnode;
}
```

`createInnerComp`函数接收两个参数，第一个参数为要异步加载的vue组件对象。第二个参数为使用`defineAsyncComponent`创建的vue组件对应的vue实例。

然后就是执行`createVNode`函数，这个函数大家可能有所耳闻，vue提供的`h()`函数其实就是调用的`createVNode`函数。

在我们这里`createVNode`函数接收的第一个参数为子组件对象，第二个参数为要传给子组件的props，第三个参数为要传给子组件的children。`createVNode`函数会根据这三个参数生成对应的异步组件的虚拟DOM，将生成的异步组件的虚拟DOM进行return返回，最后就是根据虚拟DOM生成真实DOM将异步组件渲染到页面上。如下图（图后还有一个总结）：  
![progress](https://img2024.cnblogs.com/blog/1217259/202408/1217259-20240812210518799-85334339.png)

总结
==

本文讲了`defineAsyncComponent`是如何实现异步组件的：

*   在`defineAsyncComponent`函数中会返回一个vue组件对象，对象中只有`name`属性和`setup`函数。
    
*   当渲染异步组件时会执行`setup`函数，在`setup`函数中会执行内置的一个`load`方法。在`load`方法中会去执行由`defineAsyncComponent`定义的异步组件加载函数，这个加载函数的返回值是一个Promise，异步组件加载完成后就会触发Promise的`then()`。
    
*   在`setup`函数中会返回一个函数，这个函数将会是组件的render函数。
    
*   当异步组件加载完了后会走到前面说的Promise的`then()`方法中，在里面会将`loaded`响应式变量的值修改为true。
    
*   修改了响应式变量的值导致页面重新渲染，然后执行render函数。前面讲过了此时的render函数是`setup`函数中会返回的回调函数。执行这个回调函数会调用`createInnerComp`函数生成异步组件的虚拟DOM，最后就是根据虚拟DOM生成真实DOM，从而将异步子组件渲染到页面上。
    

关注公众号：【前端欧阳】，给自己一个进阶vue的机会

![](https://img2024.cnblogs.com/blog/1217259/202406/1217259-20240606112202286-1547217900.jpg)

另外欧阳写了一本开源电子书[vue3编译原理揭秘](https://vue-compiler.iamouyang.cn/)，这本书初中级前端能看懂。完全免费，只求一个star。

本文转自 <https://www.cnblogs.com/heavenYJJ/p/18355747>，如有侵权，请联系删除。