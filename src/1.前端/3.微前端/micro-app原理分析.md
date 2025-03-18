---
title: micro-app 原理分析
createTime: 2025/03/18 16:48:14
permalink: /article/nrgohk5u/
---

## 主体流程图

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/cba1469947444578bc018af25a0a70ee~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=LnTeSUn3MPjB0e84D7svBkTIa0c%3D)

- 初始化子应用
- 通过 fetch + url 获取子应用的 html
- 处理 html 文本，获取 css 和 js 的资源地址
- 通过 fetch 获取子应用的静态资源
- 将处理过的 html 放入 webComponent 容器中
- 给 css 加上 scope 机制，并 append 到 head 标签中
- 在沙箱中执行 js 代码
- 完成子应用的初始化

## webComponent

microApp 是京东推出的一款轻量级微前端框架(解决方案),使用 webComponent​ 的思想去实现。

我们知道,html 中有许多标签,div,p,span​ 等等,这些标签渲染出的都是 html 元素。

我更愿意将 webComponent 叫做自定义 html 元素, 他的实现思路很简单,也就是让用户通过 js 代码自定义一个 htmlElement,并注册到 document 中, 之后便可使用标签。

创建一个自定义元素

```javascript
class CustomEle extends HTMLElement {
  constructor() {
    super();
    console.log('创建了自定义标签');
  }
}

// 注册自定义元素为标签
customElements.define('custom-ele', CustomEle);

// 在html中使用
<body>
  <custom-ele />
</body>;
// createElement时会执行new CustomEle
const customEle = document.createElement('custom-ele');
```

对自定义元素进行操作

比如我们想将 name 属性用 p 标签渲染到标签内 我们可以这样做

```js
class CustomEle extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute('name') || '';
    this.innerHTML = `<p>{name}</p>`; // 或者其他操作dom的方法
  }
}

// 在html中使用
<body>
  <custom-ele name="张三" />
</body>;
```

之后我们就可以在页面中渲染出一个张三

通过这种方式,我们可以使用一个类轻松定制出一个即插即用的组件,跨平台,跨框架。

webComponent 的生命周期

由于 CustomEle 的构造函数只会在其创建时执行一次, 我们需要他的生命周期以及钩子函数来帮助我们完成其他的操作

```javascript
class CustomEle extends HTMLElement {
  constructor() {
    super();
    console.log('创建了自定义标签');
  }

  connectedCallback() {} // 组件被成功添加到主文档时触发
  disconnectedCallback() {} //组件从主文档移除时触发
  adoptedCallback() {} // 元素被移动到新的文档时调用,(不常用)

  // 监听组件属性,用于触发attributeChangedCallback
  static get observedAttributes() {
    return ['img', 'text'];
  }
  attributeChangedCallback() {} // 增删改被监听的组件属性时触发
}
```

## 子应用渲染

### 创建容器

微前端的渲染是将子应用的 js、css 等静态资源加载到基座应用中执行，所以基座应用和子应用本质是同一个页面。这不同于 iframe，iframe 则是创建一个新的窗口，由于每次加载都要初始化整个窗口信息，所以 iframe 的性能不高。

如同每个前端框架在渲染时都要指定一个根元素，微前端渲染时也需要指定一个根元素作为容器，这个根元素可以是一个 div 或其它元素。

这里我们使用的是通过 customElements 创建的自定义元素，因为它不仅提供一个元素容器，还自带了生命周期函数，我们可以在这些钩子函数中进行加载渲染等操作，从而简化步骤。

```javascript
// /src/element.js

// 自定义元素
class MyElement extends HTMLElement {
  // 声明需要监听的属性名，只有这些属性变化时才会触发attributeChangedCallback
  static get observedAttributes() {
    return ['name', 'url'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    // 元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
    console.log('micro-app is connected');
  }

  disconnectedCallback() {
    // 元素从DOM中删除时执行，此时进行一些卸载操作
    console.log('micro-app has disconnected');
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    // 元素属性发生变化时执行，可以获取name、url等属性的值
    console.log(`attribute ${attrName}: ${newVal}`);
  }
}

/**
 * 注册元素
 * 注册后，就可以像普通元素一样使用micro-app，当micro-app元素被插入或删除DOM时即可触发相应的生命周期函数。
 */
window.customElements.define('micro-app', MyElement);
```

​micro-app​ 元素可能存在重复定义的情况，所以我们加一层判断，并放入函数中。

```javascript
// /src/element.js

export function defineElement() {
  // 如果已经定义过，则忽略
  if (!window.customElements.get('micro-app')) {
    window.customElements.define('micro-app', MyElement);
  }
}
```

在/src/index.js​ 中定义默认对象 SimpleMicroApp​，引入并执行 defineElement​ 函数。

```javascript
// /src/index.js

import { defineElement } from './element';

const SimpleMicroApp = {
  start() {
    defineElement();
  },
};

export default SimpleMicroApp;
```

#### 引入 simple-micro-app

在 vue2 项目的 main.js 中引入 simple-micro-app，执行 start 函数进行初始化。

```javascript
// vue2/src/main.js

import SimpleMicroApp from 'simple-micro-app';

SimpleMicroApp.start();
```

然后就可以在 vue2 项目中的任何位置使用 micro-app 标签。

```html
<!-- page1.vue -->
<template>
  <div>
    <micro-app name="app" url="http://localhost:3001/"></micro-app>
  </div>
</template>
```

插入 micro-app 标签后，就可以看到控制台打印的钩子信息。

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/1d3b30f8c2534092a837187cafe91128~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=tDmcB7%2FV5hQ02R9j1yxmIM7Z1Gs%3D)

以上我们就完成了容器元素的初始化，子应用的所有元素都会放入到这个容器中。接下来我们就需要完成子应用的静态资源加载及渲染。

#### 创建微应用实例

很显然，初始化的操作要放在 connectedCallback​ 中执行。我们声明一个类，它的每一个实例都对应一个微应用，用于控制微应用的资源加载、渲染、卸载等。

```javascript
// /src/app.js

// 创建微应用
export default class CreateApp {
  constructor() {}

  status = 'created'; // 组件状态，包括 created/loading/mount/unmount

  // 存放应用的静态资源
  source = {
    links: new Map(), // link元素对应的静态资源
    scripts: new Map(), // script元素对应的静态资源
  };

  // 资源加载完时执行
  onLoad() {}

  /**
   * 资源加载完成后进行渲染
   */
  mount() {}

  /**
   * 卸载应用
   * 执行关闭沙箱，清空缓存等操作
   */
  unmount() {}
}
```

我们在 connectedCallback​ 函数中初始化实例，将 name、url 及元素自身作为参数传入，在 CreateApp​ 的 constructor 中记录这些值，并根据 url 地址请求 html。

```js
// /src/element.js
import CreateApp, { appInstanceMap } from './app'

connectedCallback () {
  // 创建微应用实例
  const app = new CreateApp({
    name: this.name,
    url: this.url,
    container: this,
  })

  // 记入缓存，用于后续功能
  appInstanceMap.set(this.name, app)
}

attributeChangedCallback (attrName, oldVal, newVal) {
  // 分别记录name及url的值
  if (attrName === 'name' && !this.name && newVal) {
    this.name = newVal
  } else if (attrName === 'url' && !this.url && newVal) {
    this.url = newVal
  }
}


```

在初始化实例时，根据传入的参数请求静态资源。

```js
// /src/app.js
import loadHtml from './source';

// 创建微应用
export default class CreateApp {
  constructor({ name, url, container }) {
    this.name = name; // 应用名称
    this.url = url; // url地址
    this.container = container; // micro-app元素
    this.status = 'loading';
    loadHtml(this);
  }
  // ...
}
```

#### 请求 html

我们使用 fetch 请求静态资源，好处是浏览器自带且支持 promise，但这也要求子应用的静态资源支持跨域访问。

```javascript
// src/source.js

export default function loadHtml(app) {
  fetch(app.url)
    .then((res) => {
      return res.text();
    })
    .then((html) => {
      console.log('html:', html);
    })
    .catch((e) => {
      console.error('加载html出错', e);
    });
}
```

因为请求 js、css 等都需要使用到 fetch，所以我们将它提取出来作为公共方法。

```javascript
// /src/utils.js

/**
 * 获取静态资源
 * @param {string} url 静态资源地址
 */
export function fetchSource(url) {
  return fetch(url).then((res) => {
    return res.text();
  });
}
```

重新使用封装后的方法，并对获取到到 html 进行处理。

```js
// src/source.js
import { fetchSource } from './utils'

export default function loadHtml (app) {
  fetchSource(app.url).then((html) => {
    html = html
      .replace(/<head[^>]*>[\s\S]*?</head>/i, (match) => {
        // 将head标签替换为micro-app-head，因为web页面只允许有一个head标签
        return match
          .replace(/<head/i, '<micro-app-head')
          .replace(/</head>/i, '</micro-app-head>')
      })
      .replace(/<body[^>]*>[\s\S]*?</body>/i, (match) => {
        // 将body标签替换为micro-app-body，防止与基座应用的body标签重复导致的问题。
        return match
          .replace(/<body/i, '<micro-app-body')
          .replace(/</body>/i, '</micro-app-body>')
      })

    // 将html字符串转化为DOM结构
    const htmlDom = document.createElement('div')
    htmlDom.innerHTML = html
    console.log('html:', htmlDom)

    // 进一步提取和处理js、css等静态资源
    extractSourceDom(htmlDom, app)
  }).catch((e) => {
    console.error('加载html出错', e)
  })
}


```

html 格式化后，我们就可以得到一个 DOM 结构。从下图可以看到，这个 DOM 结构包含 link、style、script 等标签，接下来就需要对这个 DOM 做进一步处理。

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/cec7953c1bf44a40b84f5634af95e395~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=oOiWOF%2FiAcTexRnRelHzH70qKCc%3D)

#### 提取 js、css 等静态资源地址

我们在 extractSourceDom​ 方法中循环递归处理每一个 DOM 节点，查询到所有 link、style、script 标签，提取静态资源地址并格式化标签。

```javascript
// src/source.js

/**
 * 递归处理每一个子元素
 * @param parent 父元素
 * @param app 应用实例
 */
function extractSourceDom(parent, app) {
  const children = Array.from(parent.children);

  // 递归每一个子元素
  children.length &&
    children.forEach((child) => {
      extractSourceDom(child, app);
    });

  for (const dom of children) {
    if (dom instanceof HTMLLinkElement) {
      // 提取css地址
      const href = dom.getAttribute('href');
      if (dom.getAttribute('rel') === 'stylesheet' && href) {
        // 计入source缓存中
        app.source.links.set(href, {
          code: '', // 代码内容
        });
      }
      // 删除原有元素
      parent.removeChild(dom);
    } else if (dom instanceof HTMLScriptElement) {
      // 并提取js地址
      const src = dom.getAttribute('src');
      if (src) {
        // 远程script
        app.source.scripts.set(src, {
          code: '', // 代码内容
          isExternal: true, // 是否远程script
        });
      } else if (dom.textContent) {
        // 内联script
        const nonceStr = Math.random().toString(36).substr(2, 15);
        app.source.scripts.set(nonceStr, {
          code: dom.textContent, // 代码内容
          isExternal: false, // 是否远程script
        });
      }

      parent.removeChild(dom);
    } else if (dom instanceof HTMLStyleElement) {
      // 进行样式隔离
    }
  }
}
```

#### 请求静态资源

上面已经拿到了 html 中的 css、js 等静态资源的地址，接下来就是请求这些地址，拿到资源的内容。

接着完善 loadHtml​，在 extractSourceDom​ 下面添加请求资源的方法

```js

// src/source.js
...
export default function loadHtml (app) {
  ...
  // 进一步提取和处理js、css等静态资源
  extractSourceDom(htmlDom, app)

  // 获取micro-app-head元素
  const microAppHead = htmlDom.querySelector('micro-app-head')
  // 如果有远程css资源，则通过fetch请求
  if (app.source.links.size) {
    fetchLinksFromHtml(app, microAppHead, htmlDom)
  } else {
    app.onLoad(htmlDom)
  }

  // 如果有远程js资源，则通过fetch请求
  if (app.source.scripts.size) {
    fetchScriptsFromHtml(app, htmlDom)
  } else {
    app.onLoad(htmlDom)
  }
}

```

​fetchLinksFromHtml​ 和 fetchScriptsFromHtml​ 分别请求 css 和 js 资源，请求资源后的处理方式不同，css 资源会转化为 style 标签插入 DOM 中，而 js 不会立即执行，我们会在应用的 mount 方法中执行 js。

两个方法的具体实现方式如下

```javascript
// src/source.js
/**
 * 获取link远程资源
 * @param app 应用实例
 * @param microAppHead micro-app-head
 * @param htmlDom html DOM结构
 */
export function fetchLinksFromHtml(app, microAppHead, htmlDom) {
  const linkEntries = Array.from(app.source.links.entries());
  // 通过fetch请求所有css资源
  const fetchLinkPromise = [];
  for (const [url] of linkEntries) {
    fetchLinkPromise.push(fetchSource(url));
  }

  Promise.all(fetchLinkPromise)
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        const code = res[i];
        // 拿到css资源后放入style元素并插入到micro-app-head中
        const link2Style = document.createElement('style');
        link2Style.textContent = code;
        microAppHead.appendChild(link2Style);

        // 将代码放入缓存，再次渲染时可以从缓存中获取
        linkEntries[i][1].code = code;
      }

      // 处理完成后执行onLoad方法
      app.onLoad(htmlDom);
    })
    .catch((e) => {
      console.error('加载css出错', e);
    });
}

/**
 * 获取js远程资源
 * @param app 应用实例
 * @param htmlDom html DOM结构
 */
export function fetchScriptsFromHtml(app, htmlDom) {
  const scriptEntries = Array.from(app.source.scripts.entries());
  // 通过fetch请求所有js资源
  const fetchScriptPromise = [];
  for (const [url, info] of scriptEntries) {
    // 如果是内联script，则不需要请求资源
    fetchScriptPromise.push(
      info.code ? Promise.resolve(info.code) : fetchSource(url)
    );
  }

  Promise.all(fetchScriptPromise)
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        const code = res[i];
        // 将代码放入缓存，再次渲染时可以从缓存中获取
        scriptEntries[i][1].code = code;
      }

      // 处理完成后执行onLoad方法
      app.onLoad(htmlDom);
    })
    .catch((e) => {
      console.error('加载js出错', e);
    });
}
```

上面可以看到，css 和 js 加载完成后都执行了 onLoad​ 方法，所以 onLoad​ 方法被执行了两次，接下来我们就要完善 onLoad​ 方法并渲染微应用。

#### 渲染

因为 onLoad​ 被执行了两次，所以我们进行标记，当第二次执行时说明所有资源都加载完成，然后进行渲染操作。

```js
// /src/app.js

// 创建微应用
export default class CreateApp {
  // ...
  // 资源加载完时执行
  onLoad(htmlDom) {
    this.loadCount = this.loadCount ? this.loadCount + 1 : 1;
    // 第二次执行且组件未卸载时执行渲染
    if (this.loadCount === 2 && this.status !== 'unmount') {
      // 记录DOM结构用于后续操作
      this.source.html = htmlDom;
      // 执行mount方法
      this.mount();
    }
  }
  // ...
}
```

在 mount​ 方法中将 DOM 结构插入文档中，然后执行 js 文件进行渲染操作，此时微应用即可完成基本的渲染。

```javascript
// /src/app.js

// 创建微应用
export default class CreateApp {
  ...
  /**
   * 资源加载完成后进行渲染
   */
  mount () {
    // 克隆DOM节点
    const cloneHtml = this.source.html.cloneNode(true)
    // 创建一个fragment节点作为模版，这样不会产生冗余的元素
    const fragment = document.createDocumentFragment()
    Array.from(cloneHtml.childNodes).forEach((node) => {
      fragment.appendChild(node)
    })

    // 将格式化后的DOM结构插入到容器中
    this.container.appendChild(fragment)

    // 执行js
    this.source.scripts.forEach((info) => {
      (0, eval)(info.code)
    })

    // 标记应用为已渲染
    this.status = 'mounted'
  }
  // ...
}


```

#### 卸载

当 micro-app 元素被删除时会自动执行生命周期函数 disconnectedCallback​，我们在此处执行卸载相关操作。

```js
// /src/element.js

class MyElement extends HTMLElement {
  ...
  disconnectedCallback () {
    // 获取应用实例
    const app = appInstanceMap.get(this.name)
    // 如果有属性destory，则完全卸载应用包括缓存的文件
    app.unmount(this.hasAttribute('destory'))
  }
}


```

接下来完善应用的 unmount​ 方法：

```js
// /src/app.js

export default class CreateApp {
  // ...
  /**
   * 卸载应用
   * @param destory 是否完全销毁，删除缓存资源
   */
  unmount(destory) {
    // 更新状态
    this.status = 'unmount';
    // 清空容器
    this.container = null;
    // destory为true，则删除应用
    if (destory) {
      appInstanceMap.delete(this.name);
    }
  }
}
```

当 destory 为 true 时，删除应用的实例，此时所有静态资源失去了引用，自动被浏览器回收。

### 沙箱

#### 问题示例

1、子应用向 window 上添加一个全局变量：globalStr='child'​，如果此时基座应用也有一个相同的全局变量：globalStr='parent'​，此时就产生了变量冲突，基座应用的变量会被覆盖。

2、子应用渲染后通过监听 scroll​ 添加了一个全局监听事件

```javascript
window.addEventListener('scroll', () => {
  console.log('scroll');
});
```

当子应用被卸载时，监听函数却没有解除绑定，对页面滚动的监听一直存在。如果子应用二次渲染，监听函数会绑定两次，这显然是错误的。

接下来我们就通过给微前端创建一个 JS 沙箱环境，隔离基座应用和子应用的 JS，从而解决这两个典型的问题，

#### 创建沙箱

由于每个子应用都需要一个独立的沙箱，所以我们通过 class 创建一个类：SandBox，当一个新的子应用被创建时，就创建一个新的沙箱与其绑定。

```javascript
// /src/sandbox.js
export default class SandBox {
  active = false; // 沙箱是否在运行
  microWindow = {}; // // 代理的对象
  injectedKeys = new Set(); // 新添加的属性，在卸载时清空

  constructor() {}

  // 启动
  start() {}

  // 停止
  stop() {}
}
```

我们使用[Proxy](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3D%252FFd2Mfd8xOKapuBDTY7vDA%253D%253D.pHtf3xfADl59Nh6tvsRqAtFs8kE1M9vSxGiKCqqtfFQ2vxlR4QT4e5DaYlTgoIFwbARuP7CMZk2Uo2i%252BA6287n8z%252BfcBr2PEmzC%252FGZivLW7b0bZeIzBCcF3%252BIvpqQlDM 'https://link.segmentfault.com/?enc=%2FFd2Mfd8xOKapuBDTY7vDA%3D%3D.pHtf3xfADl59Nh6tvsRqAtFs8kE1M9vSxGiKCqqtfFQ2vxlR4QT4e5DaYlTgoIFwbARuP7CMZk2Uo2i%2BA6287n8z%2BfcBr2PEmzC%2FGZivLW7b0bZeIzBCcF3%2BIvpqQlDM')进行代理操作，代理对象为空对象 microWindow​，得益于 Proxy 强大的功能，实现沙箱变得简单且高效。

在 constructor​ 中进行代理相关操作，通过 Proxy 代理 microWindow​，设置 get​、set​、deleteProperty​ 三个拦截器，此时子应用对 window 的操作基本上可以覆盖。

```javascript
// /src/sandbox.js
export default class SandBox {
  active = false; // 沙箱是否在运行
  microWindow = {}; // // 代理的对象
  injectedKeys = new Set(); // 新添加的属性，在卸载时清空

  constructor() {
    this.proxyWindow = new Proxy(this.microWindow, {
      // 取值
      get: (target, key) => {
        // 优先从代理对象上取值
        if (Reflect.has(target, key)) {
          return Reflect.get(target, key);
        }

        // 否则兜底到window对象上取值
        const rawValue = Reflect.get(window, key);

        // 如果兜底的值为函数，则需要绑定window对象，如：console、alert等
        if (typeof rawValue === 'function') {
          const valueStr = rawValue.toString();
          // 排除构造函数
          if (
            !/^function\s+[A-Z]/.test(valueStr) &&
            !/^class\s+/.test(valueStr)
          ) {
            return rawValue.bind(window);
          }
        }

        // 其它情况直接返回
        return rawValue;
      },
      // 设置变量
      set: (target, key, value) => {
        // 沙箱只有在运行时可以设置变量
        if (this.active) {
          Reflect.set(target, key, value);

          // 记录添加的变量，用于后续清空操作
          this.injectedKeys.add(key);
        }

        return true;
      },
      deleteProperty: (target, key) => {
        // 当前key存在于代理对象上时才满足删除条件
        if (target.hasOwnProperty(key)) {
          return Reflect.deleteProperty(target, key);
        }
        return true;
      },
    });
  }

  // ...
}
```

创建完代理后，我们接着完善 start​ 和 stop​ 两个方法，实现方式也非常简单，具体如下：

```js
// /src/sandbox.js
export default class SandBox {
  ...
  // 启动
  start () {
    if (!this.active) {
      this.active = true
    }
  }

  // 停止
  stop () {
    if (this.active) {
      this.active = false

      // 清空变量
      this.injectedKeys.forEach((key) => {
        Reflect.deleteProperty(this.microWindow, key)
      })
      this.injectedKeys.clear()
    }
  }
}


```

#### 使用沙箱

在 src/app.js​ 中引入沙箱，在 CreateApp​ 的构造函数中创建沙箱实例，并在 mount​ 方法中执行沙箱的 start 方法，在 unmount​ 方法中执行沙箱的 stop 方法。

```javascript
// /src/app.js
import loadHtml from './source'
+ import Sandbox from './sandbox'

export default class CreateApp {
  constructor ({ name, url, container }) {
    ...
+    this.sandbox = new Sandbox(name)
  }

  // ...
  mount () {
    // ...
+    this.sandbox.start()
    // 执行js
    this.source.scripts.forEach((info) => {
      (0, eval)(info.code)
    })
  }

  /**
   * 卸载应用
   * @param destory 是否完全销毁，删除缓存资源
   */
  unmount (destory) {
    // ...
+    this.sandbox.stop()
    // destory为true，则删除应用
    if (destory) {
      appInstanceMap.delete(this.name)
    }
  }
}

```

我们在上面创建了沙箱实例并启动沙箱，这样沙箱就生效了吗？

显然是不行的，我们还需要将子应用的 js 通过一个 with 函数包裹，修改 js 作用域，将子应用的 window 指向代理的对象。形式如：

```javascript
(function (window, self) {
  with (window) {
    // 子应用的js代码
  }
}).call(代理对象, 代理对象, 代理对象);
```

在 sandbox 中添加方法 bindScope​，修改 js 作用域：

```js
// /src/sandbox.js

export default class SandBox {
  // ...
  // 修改js作用域
  bindScope(code) {
    window.proxyWindow = this.proxyWindow;
    return `;(function(window, self){with(window){;${code}\n}}).call(window.proxyWindow, window.proxyWindow, window.proxyWindow);`;
  }
}
```

然后在 mount 方法中添加对 bindScope​ 的使用

```javascript
// /src/app.js

export default class CreateApp {
  mount () {
    ...
    // 执行js
    this.source.scripts.forEach((info) => {
-      (0, eval)(info.code)
+      (0, eval)(this.sandbox.bindScope(info.code))
    })
  }
}

```

到此沙箱才真正起作用，我们验证一下问题示例中的第一个问题。

先关闭沙箱，由于子应用覆盖了基座应用的全局变量 globalStr​，当我们在基座中访问这个变量时，得到的值为：child​，说明变量产生了冲突。

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/f39aaeedb92c400ea2605c530fabfc43~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=Og%2F2uy8HGUqIwE8PKydQc6%2FIRVY%3D)

开启沙箱后，重新在基座应用中打印 globalStr​ 的值，得到的值为：parent​，说明变量冲突的问题已经解决，沙箱正确运行。

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/02ac7767c87f498d913dfe4a690fba57~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=TtC79OSlpjxOr%2Bn1HBkkuBvxQdc%3D)

#### 重写全局事件

再来回顾一下第二个问题，错误的原因是在子应用卸载时没有清空事件监听，如果子应用知道自己将要被卸载，主动清空事件监听，这个问题可以避免，但这是理想情况，一是子应用不知道自己何时被卸载，二是很多第三方库也有一些全局的监听事件，子应用无法全部控制。所以我们需要在子应用卸载时，自动将子应用残余的全局监听事件进行清空。

我们在沙箱中重写 window.addEventListener​ 和 window.removeEventListener​，记录所有全局监听事件，在应用卸载时如果有残余的全局监听事件则进行清空。

创建一个 effect​ 函数，在这里执行具体的操作

```js
// /src/sandbox.js

// 记录addEventListener、removeEventListener原生方法
const rawWindowAddEventListener = window.addEventListener;
const rawWindowRemoveEventListener = window.removeEventListener;

/**
 * 重写全局事件的监听和解绑
 * @param microWindow 原型对象
 */
function effect(microWindow) {
  // 使用Map记录全局事件
  const eventListenerMap = new Map();

  // 重写addEventListener
  microWindow.addEventListener = function (type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    // 当前事件非第一次监听，则添加缓存
    if (listenerList) {
      listenerList.add(listener);
    } else {
      // 当前事件第一次监听，则初始化数据
      eventListenerMap.set(type, new Set([listener]));
    }
    // 执行原生监听函数
    return rawWindowAddEventListener.call(window, type, listener, options);
  };

  // 重写removeEventListener
  microWindow.removeEventListener = function (type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    // 从缓存中删除监听函数
    if (listenerList?.size && listenerList.has(listener)) {
      listenerList.delete(listener);
    }
    // 执行原生解绑函数
    return rawWindowRemoveEventListener.call(window, type, listener, options);
  };

  // 清空残余事件
  return () => {
    console.log('需要卸载的全局事件', eventListenerMap);
    // 清空window绑定事件
    if (eventListenerMap.size) {
      // 将残余的没有解绑的函数依次解绑
      eventListenerMap.forEach((listenerList, type) => {
        if (listenerList.size) {
          for (const listener of listenerList) {
            rawWindowRemoveEventListener.call(window, type, listener);
          }
        }
      });
      eventListenerMap.clear();
    }
  };
}
```

在沙箱的构造函数中执行 effect 方法，得到卸载的钩子函数 releaseEffect，在沙箱关闭时执行卸载操作，也就是在 stop 方法中执行 releaseEffect 函数

```js
// /src/sandbox.js

export default class SandBox {
  ...
  // 修改js作用域
  constructor () {
    // 卸载钩子
+   this.releaseEffect = effect(this.microWindow)
    ...
  }

  stop () {
    if (this.active) {
      this.active = false

      // 清空变量
      this.injectedKeys.forEach((key) => {
        Reflect.deleteProperty(this.microWindow, key)
      })
      this.injectedKeys.clear()

      // 卸载全局事件
+      this.releaseEffect()
    }
  }
}


```

这样重写全局事件及卸载的操作基本完成，我们验证一下是否正常运行。

首先关闭沙箱，验证问题二的存在：卸载子应用后滚动页面，依然在打印 scroll，说明事件没有被卸载。

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/c96122ce35e44a09962e59957bfcadf1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=8T7mvkhsbHeR6nuTcv71rwt09cc%3D)

开启沙箱后，卸载子应用，滚动页面，此时 scroll 不再打印，说明事件已经被卸载。

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b8b1553413724e739f4fccce2d631f63~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=5%2B%2FGPIZ%2Bv0tIpHPDAcsG8AtsukM%3D) 从截图中可以看出，除了我们主动监听的 scroll​ 事件，还有 error​、unhandledrejection​ 等其它全局事件，这些事件都是由框架、构建工具等第三方绑定的，如果不进行清空，会导致内存无法回收，造成内存泄漏。

沙箱功能到此就基本完成了，两个问题都已经解决。当然沙箱需要解决的问题远不止这些，但基本架构思路是不变的。

## 样式隔离

#### 样式隔离实现原理

要实现样式隔离必须对应用的 css 进行改造，因为基座应用无法控制，我们只能对子应用进行修改。

先看一下子应用被渲染后的元素构造：

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/c036d5237b8e46268d850f2d3c1e6ec6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=G0toTo3RNApDFeetVZyB7tWOh4s%3D)

子应用的所有元素都被插入到 micro-app 标签中，且 micro-app 标签具有唯一的 name​ 值，所以通过添加属性选择器前缀 `micro-app\[name=xxx\]​ `可以让 css 样式在指定的 micro-app 内生效。

例如：

```css
​.test { height: 100px; }​

```

添加前缀后变为：

`​micro-app\[name=xxx\] .test { height: 100px; }​`

这样.test​ 的样式只会影响到 name 为 xxx 的 micro-app 的元素。

渲染篇中我们将 link 标签引入的远程 css 文件转换为 style 标签，所以子应用只会存在 style 标签，实现样式隔离的方式就是在 style 标签的每一个 CSS 规则前面加上 micro-app\[name=xxx\]​ 的前缀，让所有 CSS 规则都只能影响到指定元素内部。

通过 style.textContent 获取样式内容是最简单的，但 textContent 拿到的是所有 css 内容的字符串，这样无法针对单独规则进行处理，所以我们要通过另外一种方式：CSSRules​。

当 style 元素被插入到文档中时，浏览器会自动为 style 元素创建 CSSStyleSheet 样式表，一个 CSS 样式表包含了一组表示规则的 [CSSRule](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3DmnWHE41r7qWyl2Mo15ityA%253D%253D.gmjTbwtmv%252BF9RDPIJFgTDeBIk5SLgFggckGZWcXbt0Cyv6FSWM8otIB%252Bi8JM9dpIaMFSndumBVLKxz9Z9HQYrQ%253D%253D 'https://link.segmentfault.com/?enc=mnWHE41r7qWyl2Mo15ityA%3D%3D.gmjTbwtmv%2BF9RDPIJFgTDeBIk5SLgFggckGZWcXbt0Cyv6FSWM8otIB%2Bi8JM9dpIaMFSndumBVLKxz9Z9HQYrQ%3D%3D') 对象。每条 CSS 规则可以通过与之相关联的对象进行操作，这些规则被包含在 [CSSRuleList](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3DCT44B5kB9AeE%252Fsse5DTJow%253D%253D.FQch2xKoOJDaR8jjuEclon9YIUr74UuaOuuvjEG3AJrJlQemAXV1Zzwbgwm80VDyjL2%252BPD4NarfbBzEv6OJoyw%253D%253D 'https://link.segmentfault.com/?enc=CT44B5kB9AeE%2Fsse5DTJow%3D%3D.FQch2xKoOJDaR8jjuEclon9YIUr74UuaOuuvjEG3AJrJlQemAXV1Zzwbgwm80VDyjL2%2BPD4NarfbBzEv6OJoyw%3D%3D') 内，可以通过样式表的 [cssRules](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3DB9PprgttdIN4BDJLt%252Fc8Tg%253D%253D.pQQfCwsSDr%252FP2AprR1mCQojYjuK09riQQ9uEjaMQxM7CzlKsZkHKPbEpOLcZBtXS%252BTE0NVwo%252BGVX2oO1oETWK82QwEaa0kc7lqcf62c6AOc%253D 'https://link.segmentfault.com/?enc=B9PprgttdIN4BDJLt%2Fc8Tg%3D%3D.pQQfCwsSDr%2FP2AprR1mCQojYjuK09riQQ9uEjaMQxM7CzlKsZkHKPbEpOLcZBtXS%2BTE0NVwo%2BGVX2oO1oETWK82QwEaa0kc7lqcf62c6AOc%3D') 属性获取。

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/87f85480150f417e85efb7dbe5f8c3c1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=UKhGbPRbUSWLqYPUFw4MLMVvVYY%3D)

所以 cssRules 就是由单个 CSS 规则组成的列表，我们只需要遍历规则列表，并在每个规则的选择器前加上前缀 micro-app\[name=xxx\]​，就可以将当前 style 样式的影响限制在 micro-app 元素内部。

#### 代码实现

创建一个 scopedcss.js​ 文件，样式隔离的核心代码都将放在这里。

我们上面提到过，style 元素插入到文档后会创建 css 样式表，但有些 style 元素(比如动态创建的 style)在执行样式隔离时还没插入到文档中，此时样式表还没生成。所以我们需要创建一个模版 style 元素，它用于处理这种特殊情况，模版 style 只作为格式化工具，不会对页面产生影响。

还有一种情况需要特殊处理：style 元素被插入到文档中后再添加样式内容。这种情况常见于开发环境，通过 style-loader​ 插件创建的 style 元素。对于这种情况可以通过[MutationObserver](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3DAoDrikbb5yPazuFn2smSMg%253D%253D.6hr6HDgi824Rsx04l6BPMpppL0%252F12UED5sUBjmfKcxyby1f65zyzABD9SgbEzUre2sN0ahmAqBrQCVuU5ch0j%252B6onluBZqGux7Hf1ohgor8%253D 'https://link.segmentfault.com/?enc=AoDrikbb5yPazuFn2smSMg%3D%3D.6hr6HDgi824Rsx04l6BPMpppL0%2F12UED5sUBjmfKcxyby1f65zyzABD9SgbEzUre2sN0ahmAqBrQCVuU5ch0j%2B6onluBZqGux7Hf1ohgor8%3D')监听 style 元素的变化，当 style 插入新的样式时再进行隔离处理。

具体实现如下：

```javascript
// /src/scopedcss.js

let templateStyle; // 模版sytle

/**
 * 进行样式隔离
 * @param {HTMLStyleElement} styleElement style元素
 * @param {string} appName 应用名称
 */
export default function scopedCSS(styleElement, appName) {
  // 前缀
  const prefix = `micro-app[name=${appName}]`;

  // 初始化时创建模版标签
  if (!templateStyle) {
    templateStyle = document.createElement('style');
    document.body.appendChild(templateStyle);
    // 设置样式表无效，防止对应用造成影响
    templateStyle.sheet.disabled = true;
  }

  if (styleElement.textContent) {
    // 将元素的内容赋值给模版元素
    templateStyle.textContent = styleElement.textContent;
    // 格式化规则，并将格式化后的规则赋值给style元素
    styleElement.textContent = scopedRule(
      Array.from(templateStyle.sheet?.cssRules ?? []),
      prefix
    );
    // 清空模版style内容
    templateStyle.textContent = '';
  } else {
    // 监听动态添加内容的style元素
    const observer = new MutationObserver(function () {
      // 断开监听
      observer.disconnect();
      // 格式化规则，并将格式化后的规则赋值给style元素
      styleElement.textContent = scopedRule(
        Array.from(styleElement.sheet?.cssRules ?? []),
        prefix
      );
    });

    // 监听style元素的内容是否变化
    observer.observe(styleElement, { childList: true });
  }
}
```

​scopedRule​ 方法主要进行[CSSRule.type](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3DnCXaD8sNUiMoKzF2U4tRrQ%253D%253D.37vShIrpokqSnCTxLZF1XGCA%252BAX8CM1AjGzXQuzM3v5H3DvjxLnJo1qu7mPSHzCd60On8q6p9%252BwxUgs5MN9e9g%253D%253D 'https://link.segmentfault.com/?enc=nCXaD8sNUiMoKzF2U4tRrQ%3D%3D.37vShIrpokqSnCTxLZF1XGCA%2BAX8CM1AjGzXQuzM3v5H3DvjxLnJo1qu7mPSHzCd60On8q6p9%2BwxUgs5MN9e9g%3D%3D')的判断和处理，[CSSRule.type](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3DqZbPGXblkgAMrLd%252B90Q7gA%253D%253D.WfZU46zo%252BTs7F1IcgBtQ501J3BVBXRtogBnGTEw2vtw6ZzWQ%252B3ysFnhOPu62lwNVNcHk0RjR9hBLvm36ehgtvA%253D%253D 'https://link.segmentfault.com/?enc=qZbPGXblkgAMrLd%2B90Q7gA%3D%3D.WfZU46zo%2BTs7F1IcgBtQ501J3BVBXRtogBnGTEw2vtw6ZzWQ%2B3ysFnhOPu62lwNVNcHk0RjR9hBLvm36ehgtvA%3D%3D')类型有数十种，我们只处理 STYLE_RULE​、MEDIA_RULE​、SUPPORTS_RULE​ 三种类型，它们分别对应的 type 值为：1、4、12，其它类型 type 不做处理

```js
// /src/scopedcss.js

/**
 * 依次处理每个cssRule
 * @param rules cssRule
 * @param prefix 前缀
 */
function scopedRule(rules, prefix) {
  let result = '';
  // 遍历rules，处理每一条规则
  for (const rule of rules) {
    switch (rule.type) {
      case 1: // STYLE_RULE
        result += scopedStyleRule(rule, prefix);
        break;
      case 4: // MEDIA_RULE
        result += scopedPackRule(rule, prefix, 'media');
        break;
      case 12: // SUPPORTS_RULE
        result += scopedPackRule(rule, prefix, 'supports');
        break;
      default:
        result += rule.cssText;
        break;
    }
  }

  return result;
}
```

在 scopedPackRule​ 方法种对 media 和 supports 两种类型做进一步处理，因为它们包含子规则，我们需要递归处理它们的子规则。  
如：

```css
@media screen and (max-width: 300px) {
  .test {
    background-color: lightblue;
  }
}
```

需要转换为：

```css
@media screen and (max-width: 300px) {
  micro-app[name='xxx'] .test {
    background-color: lightblue;
  }
}
```

处理方式也十分简单：获取它们的子规则列表，递归执行方法 scopedRule​。

```javascript
// /src/scopedcss.js

// 处理media 和 supports
function scopedPackRule(rule, prefix, packName) {
  // 递归执行scopedRule，处理media 和 supports内部规则
  const result = scopedRule(Array.from(rule.cssRules), prefix);
  return `@${packName} ${rule.conditionText} {${result}}`;
}
```

最后实现 scopedStyleRule​ 方法，这里进行具体的 CSS 规则修改。修改规则的方式主要通过正则匹配，查询每个规则的选择器，在选择前加上前缀。

```javascript
// /src/scopedcss.js

/**
 * 修改CSS规则，添加前缀
 * @param {CSSRule} rule css规则
 * @param {string} prefix 前缀
 */
function scopedStyleRule(rule, prefix) {
  // 获取CSS规则对象的选择和内容
  const { selectorText, cssText } = rule;

  // 处理顶层选择器，如 body，html 都转换为 micro-app[name=xxx]
  if (/^((html[\s>~,]+body)|(html|body|:root))$/.test(selectorText)) {
    return cssText.replace(/^((html[\s>~,]+body)|(html|body|:root))/, prefix);
  } else if (selectorText === '*') {
    // 选择器 * 替换为 micro-app[name=xxx] *
    return cssText.replace('*', `${prefix} *`);
  }

  const builtInRootSelectorRE =
    /(^|\s+)((html[\s>~]+body)|(html|body|:root))(?=[\s>~]+|$)/;

  // 匹配查询选择器
  return cssText.replace(/^[\s\S]+{/, (selectors) => {
    return selectors.replace(/(^|,)([^,]+)/g, (all, $1, $2) => {
      // 如果含有顶层选择器，需要单独处理
      if (builtInRootSelectorRE.test($2)) {
        // body[name=xx]|body.xx|body#xx 等都不需要转换
        return all.replace(builtInRootSelectorRE, prefix);
      }
      // 在选择器前加上前缀
      return `${$1} ${prefix} ${$2.replace(/^\s*/, '')}`;
    });
  });
}
```

#### 使用

到此样式隔离的功能基本上完成了，接下来如何使用呢？

在[渲染篇](https://link.juejin.cn?target=https%3A%2F%2Flink.segmentfault.com%2F%3Fenc%3Dk%252FtkiR7IY0cfV8j6MSZ1%252FQ%253D%253D.ngRK3iec8ZC4vFXtVVbNV4Dy648Nz8AsF3cwcoMk83NhdpuoD2O6YVqk6iJ0BrX4AXi8EcGJpPE6K%252BBUyDgPvA%253D%253D 'https://link.segmentfault.com/?enc=k%2FtkiR7IY0cfV8j6MSZ1%2FQ%3D%3D.ngRK3iec8ZC4vFXtVVbNV4Dy648Nz8AsF3cwcoMk83NhdpuoD2O6YVqk6iJ0BrX4AXi8EcGJpPE6K%2BBUyDgPvA%3D%3D')中，我们有两处涉及到 style 元素的处理，一个是 html 字符串转换为 DOM 结构后的递归循环，一次是将 link 元素转换为 style 元素。所以我们需要在这两个地方调用 scopedCSS​ 方法，并将 style 元素作为参数传入。

```javascript
// /src/source.js

/**
 * 递归处理每一个子元素
 * @param parent 父元素
 * @param app 应用实例
 */
 function extractSourceDom(parent, app) {
  ...
  for (const dom of children) {
    if (dom instanceof HTMLLinkElement) {
      ...
    } else if (dom instanceof HTMLStyleElement) {
      // 执行样式隔离
+      scopedCSS(dom, app.name)
    } else if (dom instanceof HTMLScriptElement) {
      ...
    }
  }
}

/**
 * 获取link远程资源
 * @param app 应用实例
 * @param microAppHead micro-app-head
 * @param htmlDom html DOM结构
 */
export function fetchLinksFromHtml (app, microAppHead, htmlDom) {
  ...
  Promise.all(fetchLinkPromise).then((res) => {
    for (let i = 0; i < res.length; i++) {
      const code = res[i]
      // 拿到css资源后放入style元素并插入到micro-app-head中
      const link2Style = document.createElement('style')
      link2Style.textContent = code
+      scopedCSS(link2Style, app.name)
      ...
    }

    ...
  }).catch((e) => {
    console.error('加载css出错', e)
  })
}

```

## 数据通信

微前端各个应用本身是独立运行的，通信系统不应该对应用侵入太深，所以我们采用发布订阅系统。但是由于子应用封装在 micro-app 标签内，作为一个类 webComponents 的组件，发布订阅系统的弱绑定和它格格不入。

最好的方式是像普通属性一样通过 micro-app 元素传递数据。但自定义元素无法支持对象类型的属性，只能传递字符串，例如<micro-app data={x: 1}>​ 会转换为 ​，想要以组件化形式进行数据通信必须让元素支持对象类型属性，为此我们需要重写 micro-app 原型链上 setAttribute 方法处理对象类型属性。

流程图

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/98042b3fcf2d411dbfddae56257b6da9~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=shC1Qq4FwdEjfTRxmRlaa11DSk4%3D)

#### 代码实现

创建文件 data.js​，数据通信的功能主要在这里实现。

##### 发布订阅系统

实现发布订阅系统的方式很多，我们简单写一个，满足基本的需求即可。

```js
// /src/data.js

// 发布订阅系统
class EventCenter {
  // 缓存数据和绑定函数
  eventList = new Map();
  /**
   * 绑定监听函数
   * @param name 事件名称
   * @param f 绑定函数
   */
  on(name, f) {
    let eventInfo = this.eventList.get(name);
    // 如果没有缓存，则初始化
    if (!eventInfo) {
      eventInfo = {
        data: {},
        callbacks: new Set(),
      };
      // 放入缓存
      this.eventList.set(name, eventInfo);
    }

    // 记录绑定函数
    eventInfo.callbacks.add(f);
  }

  // 解除绑定
  off(name, f) {
    const eventInfo = this.eventList.get(name);
    // eventInfo存在且f为函数则卸载指定函数
    if (eventInfo && typeof f === 'function') {
      eventInfo.callbacks.delete(f);
    }
  }

  // 发送数据
  dispatch(name, data) {
    const eventInfo = this.eventList.get(name);
    // 当数据不相等时才更新
    if (eventInfo && eventInfo.data !== data) {
      eventInfo.data = data;
      // 遍历执行所有绑定函数
      for (const f of eventInfo.callbacks) {
        f(data);
      }
    }
  }
}

// 创建发布订阅对象
const eventCenter = new EventCenter();
```

发布订阅系统很灵活，但太过于灵活可能会导致数据传输的混乱，必须定义一套清晰的数据流。所以我们要进行数据绑定，基座应用一次只能向指定的子应用发送数据，子应用只能发送数据到基座应用，至于子应用之间的数据通信则通过基座应用进行控制，这样数据流就会变得清晰

通过格式化订阅名称来进行数据的绑定通信。

```javascript
// /src/data.js
/**
 * 格式化事件名称，保证基座应用和子应用的绑定通信
 * @param appName 应用名称
 * @param fromBaseApp 是否从基座应用发送数据
 */
function formatEventName(appName, fromBaseApp) {
  if (typeof appName !== 'string' || !appName) return '';
  return fromBaseApp
    ? `__from_base_app_${appName}__`
    : `__from_micro_app_${appName}__`;
}
```

由于基座应用和子应用的数据通信方式不同，我们分开定义。

```js
// /src/data.js

// 基座应用的数据通信方法集合
export class EventCenterForBaseApp {
  /**
   * 向指定子应用发送数据
   * @param appName 子应用名称
   * @param data 对象数据
   */
  setData(appName, data) {
    eventCenter.dispatch(formatEventName(appName, true), data);
  }

  /**
   * 清空某个应用的监听函数
   * @param appName 子应用名称
   */
  clearDataListener(appName) {
    eventCenter.off(formatEventName(appName, false));
  }
}

// 子应用的数据通信方法集合
export class EventCenterForMicroApp {
  constructor(appName) {
    this.appName = appName;
  }

  /**
   * 监听基座应用发送的数据
   * @param cb 绑定函数
   */
  addDataListener(cb) {
    eventCenter.on(formatEventName(this.appName, true), cb);
  }

  /**
   * 解除监听函数
   * @param cb 绑定函数
   */
  removeDataListener(cb) {
    if (typeof cb === 'function') {
      eventCenter.off(formatEventName(this.appName, true), cb);
    }
  }

  /**
   * 向基座应用发送数据
   * @param data 对象数据
   */
  dispatch(data) {
    const app = appInstanceMap.get(this.appName);
    if (app?.container) {
      // 子应用以自定义事件的形式发送数据
      const event = new CustomEvent('datachange', {
        detail: {
          data,
        },
      });

      app.container.dispatchEvent(event);
    }
  }

  /**
   * 清空当前子应用绑定的所有监听函数
   */
  clearDataListener() {
    eventCenter.off(formatEventName(this.appName, true));
  }
}
```

在入口文件中创建基座应用通信对象。

```javascript
// /src/index.js

+ import { EventCenterForBaseApp } from './data'
+ const BaseAppData = new EventCenterForBaseApp()

```

在沙箱中创建子应用的通信对象，并在沙箱关闭时清空所有绑定的事件。

```javascript
// /src/sandbox.js

import { EventCenterForMicroApp } from './data'

export default class SandBox {
  constructor (appName) {
    // 创建数据通信对象
    this.microWindow.microApp = new EventCenterForMicroApp(appName)
    ...
  }

  stop () {
    ...
    // 清空所有绑定函数
    this.microWindow.microApp.clearDataListener()
  }
}

```

到这里，数据通信大部分功能都完成了，但还缺少一点，就是对 micro-app 元素对象类型属性的支持。

我们重写 Element 原型链上 setAttribute 方法，当 micro-app 元素设置 data 属性时进行特殊处理。

```javascript
// /src/index.js

// 记录原生方法
const rawSetAttribute = Element.prototype.setAttribute;

// 重写setAttribute
Element.prototype.setAttribute = function setAttribute(key, value) {
  // 目标为micro-app标签且属性名称为data时进行处理
  if (/^micro-app/i.test(this.tagName) && key === 'data') {
    if (toString.call(value) === '[object Object]') {
      // 克隆一个新的对象
      const cloneValue = {};
      Object.getOwnPropertyNames(value).forEach((propertyKey) => {
        // 过滤vue框架注入的数据
        if (
          !(typeof propertyKey === 'string' && propertyKey.indexOf('__') === 0)
        ) {
          cloneValue[propertyKey] = value[propertyKey];
        }
      });
      // 发送数据
      BaseAppData.setData(this.getAttribute('name'), cloneValue);
    }
  } else {
    rawSetAttribute.call(this, key, value);
  }
};
```

大功告成，我们验证一下是否可以正常运行，在 vue2 项目中向子应用发送数据，并接受来自子应用的数据。

```vue
// vue2/pages/page1.vue
<template>
  ...
  <micro-app
    name="app"
    url="http://localhost:3001/"
    v-if="showapp"
    id="micro-app-app1"
    :data="data"
    @datachange="handleDataChange"
  ></micro-app>
</template>

<script>
export default {
  ...
  mounted () {
    setTimeout(() => {
      this.data = {
        name: '来自基座应用的数据'
      }
    }, 2000)
  },
  methods: {
    handleDataChange (e) {
      console.log('接受数据：', e.detail.data)
    }
  }
}
</script>
```

在 react17 项目中监听来自基座应用的数据并向基座应用发送数据。

```javascript
// react17/index.js

// 数据监听
window.microApp?.addDataListener((data) => {
  console.log('接受数据：', data);
});

setTimeout(() => {
  window.microApp?.dispatch({ name: '来自子应用的数据' });
}, 3000);
```

查看控制抬的打印信息：

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/ea80fd86dd344c95952b62a15e119f1e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pys5bCKMzAxNjM=:q75.awebp?rk3s=f64ab15b&x-expires=1742818689&x-signature=wegen7JV5fupUbQNIoWRT1eZTA4%3D)

数据正常打印，数据通信功能生效。