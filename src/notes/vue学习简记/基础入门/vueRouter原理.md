---
title: vueRouter原理
createTime: 2025/03/19 14:59:30
permalink: /learn-vue/pcocn7ty/
---

首先呢，VueRoute 是以一个 vue 插件的形式去安装的，所以一个基本的插件代码如下：

```js
export default class newJmVueRouter {
}

newJmVueRouter.install = function (Vue, options) {
  console.log(Vue, options);
};
```

我们要做哪些事情？

1. 初始化路由插件
2. 创建两个组件 分别是 router-link , router-view
3. 根据当前地址拦的路径，匹配对应的 组件，进行渲染到 router-view 上 展示
4. 动态响应地址栏路径的变化，重新渲染 router-view 组件

## 创建路由-初始化路由插件

这里就是一个默认到写法，创建一个路由，暴露出去，并安装到 Vue 的构造函数中

```js
// routers.js

import Vue from 'vue';
import JmVueRouter from './jm-vue-router';

Vue.use(JmVueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import(/* home */ './home.vue').then((v) => v.default),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import(/* about */ './about.vue').then((v) => v.default),
    children: [
      {
        name: 'dome1',
        path: '/about/dome1',
        component: () =>
          import(/* dome1 */ './dome1.vue').then((v) => v.default),
      },
    ],
  },
  {
    name: 'test',
    path: '/test',
    component: {
      render(h) {
        return h('div', null, 'yellow');
      },
    },
  },
];

export default new JmVueRouter({
  mode: 'hash',
  routes,
});

/**
 * main.js
 */

// import router from './routers.js'

new Vue({
  router,
});
```

## 创建 router-link 组件等

我们已经完成了，插件的注册动作，接下里，完成两个自定义组件的开发, 目前仅支持 hash 方式

```js
newJmVueRouter.install = function (Vue) {
  ...

  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true,
      },
      tag: {
        type: String,
        default: 'a',
      },
    },
    render(h) {
      return h(
        this.tag,
        { attrs: { href: '#' + this.to } },
        this.$slots.default
      );
    },
  });

  Vue.component('router-view', {
    // 1. 拿到当前 current hash 路径
    // 2. 从路由表中找到对应的组件，渲染即可
    // 3. current 变化了，需要再次执行当前这个render函数, 将对应的组件渲染
    render(h) {
      // const routers = this.$router.$options.routes || [];
      // const current = this.$router.current || '/';
      // const component = findComponent(routers, current);
      return h('h1');
    },
  });

  ...
};
```

可以看到我注释了 router-view 的 渲染动作，为啥？ 因为这个时候，我们无法获取到这样的数据 `this.$router.$options.routes`

### $router 对象 挂载到 vue 原型上

我们无法获取，routers 就无法取渲染数据，我们这样去解决

```js
newJmVueRouter.install = function (Vue) {

  // 定义一个缓存娶
  const map = new Map()

  ...

  // mixin 会给所有的 组件 安装上并执行一遍默认的生命周期
  Vue.mixin({

    beforeCreate() {
      // 在这里。this ?
      // 每次执行的this 都代表一个实例对象，从根实例一直往下 找
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });
};
```

![alt text](image.png)

可以看到，`this.$options` 可以获取到 根 的 options 对象, 将其设置在 原型上即可

### 继续完善 router-view

```js
...

Vue.component('router-view', {
  // 1. 拿到当前 current hash 路径
  // 2. 从路由表中找到对应的组件，渲染即可
  // 3. current 变化了，需要再次执行当前这个render函数, 将对应的组件渲染
  render(h) {
    const routers = this.$router.$options.routes || [];
    const current = this.$router.current || '/';
    const component = findComponent(routers, current);
    return h(component);
  },
});


function findComponent (routers, current) {
    if(!routers.length || !current) return;

    let component = null;

    if(map.get(current)) {
        return map.get(current)
    }

    for (let index = 0; index < routers.length; index++) {
        const item = routers[index];
        if(current === item.path) {
            map.set(item.path, item.component);
            return item.component;
        }
        if(item.children && item.children.length) {
            component =  findComponent(item.children, current)
        }
    }

    return component;
}

...
```

这个时候，正常显示 路径 为 / 的 组件是可以成功的

### 动态渲染 route-view

1. 获取到地址栏 # 后面的路径
2. 绑定事件监听地址栏发生变更，重新设置 当前的路径

```js
export default class newJmVueRouter {
  current = '/'
  constructor() {
    this.$options = options;

    // 获取地址栏 # 为结尾的路径
    const initValue = window.location.hash.slice(1) || '/';
    // 将 current 转变为一个响应式数据
    Vue.util.defineReactive(this, 'current', initValue);
    // 监听 hashchange 事件 一旦发生变更，重新设置 current
    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1);
    });
  }
}

```


在这里我们可以看到，我们使用了 `Vue.util.defineReactive` 可以将数据转为响应式的方法，一旦current发生变更，`router-view` 的 render 函数中就会重新的渲染组件，这样就实现了一个基本原理