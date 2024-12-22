---
title: rollup打包产物解析及原理
author: 李嘉明
createTime: 2024/12/22 20:29:57
permalink: /article/roqfufms/
tags:
  - node
---

# rollup 打包产物解析及原理（对比 webpack）

上篇： [webpack 打包产物解析及原理（含 cjs/esm/代码分离/懒加载）](https://juejin.cn/post/7053998924071174175 'https://juejin.cn/post/7053998924071174175')

## rollup 定位

rollup 比 webpack 晚出 2 年，对比 webpack 肯定是有差异化的

我们可以查看官网[rollupjs.org/guide/en/#o…](https://link.juejin.cn?target=https%3A%2F%2Frollupjs.org%2Fguide%2Fen%2F%23overview 'https://rollupjs.org/guide/en/#overview')

得到以下几个特点

1.  建议开发者使用 esm 写模块。
    1.  使用 esm 模块的好处就很多了：（可以参考我另一篇：[juejin.cn/post/695936…](https://juejin.cn/post/6959360326299025445 'https://juejin.cn/post/6959360326299025445') ）
        1.  高版本浏览器原生支持（浏览器只有 2 种方法支持引入 js 模块，1 是 script 标签，2 就是 esm 模块）
        2.  可以做 tree shaking（早期 webpack 版本是不支持 tree shaking 的）
        3.  可以解决循环引用的问题
2.  esm 最终将在任何地方都可以实现（浏览器+node 都可以用，是未来的标准），但 Rollup 让您今天就可以实现。
    - 这句话很重要，也是 rollup 的特点，也是诞生的原因
    - 里面有历史原因（详细可以参考我的上篇关于 webpack 的）
    - **简单的说就是：ESM - ECMAScript 模块是未来的官方标准和主流。但是浏览器的版本需要比较高，比如 chorme 都需要 63 版本以上**
      - 所以 rollup 主要的出发点是：**未来还没到，但 rollup 可以让你先写未来的代码（指 esm）**

## rollup 使用流程

浏览器环境使用的应用程序的话：

1.  无需考虑浏览器兼容问题的话
    - 开发者写 esm 代码 -> rollup 通过**入口**，递归识别 esm 模块 -> 最终打包成一个或多个 bundle.js -> 浏览器直接可以支持引入`<script type="module">`
2.  需考虑浏览器兼容问题的话
    - 可能会比较复杂，需要用额外的 polyfill 库，或结合 webpack 使用

打包成 npm 包的话：

- 开发者写 esm 代码 -> rollup 通过**入口**，递归识别 esm 模块 -> （可以支持配置输出多种格式的模块，如 esm、cjs、umd、amd）最终打包成一个或多个 bundle.js
  - （开发者要写 cjs 也可以，需要插件@rollup/plugin-commonjs） 初步看来
- 很明显，rollup 比较适合打包 js 库（react、vue 等的源代码库都是 rollup 打包的）或 高版本无需往下兼容的浏览器应用程序（现在 2022 年了，时间越往后，迁移到 rollup 会越多，猜测）
- 这样打包出来的库，可以充分使用上 esm 的 tree shaking，使源库体积最小

### 举个小 🌰 简单的对比一下 webpack 打包和 rollup 打包

此 demo 是纯 esm 的写法

js

代码解读

复制代码

`// 入口main。js import { b } from './test/a' console.log(b + 1) console.log(1111) // './test/a' export const b = 'xx' export const bbbbbbb = 'xx'`

rollup 打包效果（非常干净，无注入代码）

js

代码解读

复制代码

`const b = 'xx'; console.log(b + 1); console.log(1111);`

webpack 打包效果（有很多注入代码）

- 实际上，我们自己写的代码在最下面。上面注入的大段代码 都是**webpack 自己的兼容代码**，**目的是自己实现 require，modules.exports，export，让浏览器可以兼容 cjs 和 esm 语法**
- （可以理解为，**webpack 自己实现 polyfill 支持模块语法，rollup 是利用高版本浏览器原生支持 esm(所以 rollup 无需代码注入)**）

js

代码解读

复制代码

`/******/ (function(modules) { // webpackBootstrap /******/   // The module cache /******/   var installedModules = {}; /******/ /******/   // The require function /******/   function __webpack_require__(moduleId) { /******/ /******/    // Check if module is in cache /******/    if(installedModules[moduleId]) { /******/     return installedModules[moduleId].exports; /******/    } /******/    // Create a new module (and put it into the cache) /******/    var module = installedModules[moduleId] = { /******/     i: moduleId, /******/     l: false, /******/     exports: {} /******/    }; /******/ /******/    // Execute the module function /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); /******/ /******/    // Flag the module as loaded /******/    module.l = true; /******/ /******/    // Return the exports of the module /******/    return module.exports; /******/   } /******/ /******/ /******/   // expose the modules object (__webpack_modules__) /******/   __webpack_require__.m = modules; /******/ /******/   // expose the module cache /******/   __webpack_require__.c = installedModules; /******/ /******/   // define getter function for harmony exports /******/   __webpack_require__.d = function(exports, name, getter) { /******/    if(!__webpack_require__.o(exports, name)) { /******/     Object.defineProperty(exports, name, { enumerable: true, get: getter }); /******/    } /******/   }; /******/ /******/   // define __esModule on exports /******/   __webpack_require__.r = function(exports) { /******/    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) { /******/     Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }); /******/    } /******/    Object.defineProperty(exports, '__esModule', { value: true }); /******/   }; /******/ /******/   // create a fake namespace object /******/   // mode & 1: value is a module id, require it /******/   // mode & 2: merge all properties of value into the ns /******/   // mode & 4: return value when already ns object /******/   // mode & 8|1: behave like require /******/   __webpack_require__.t = function(value, mode) { /******/    if(mode & 1) value = __webpack_require__(value); /******/    if(mode & 8) return value; /******/    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value; /******/    var ns = Object.create(null); /******/    __webpack_require__.r(ns); /******/    Object.defineProperty(ns, 'default', { enumerable: true, value: value }); /******/    if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key)); /******/    return ns; /******/   }; /******/ /******/   // getDefaultExport function for compatibility with non-harmony modules /******/   __webpack_require__.n = function(module) { /******/    var getter = module && module.__esModule ? /******/     function getDefault() { return module['default']; } : /******/     function getModuleExports() { return module; }; /******/    __webpack_require__.d(getter, 'a', getter); /******/    return getter; /******/   }; /******/ /******/   // Object.prototype.hasOwnProperty.call /******/   __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); }; /******/ /******/   // __webpack_public_path__ /******/   __webpack_require__.p = "./"; /******/ /******/ /******/   // Load entry module and return exports /******/   return __webpack_require__(__webpack_require__.s = 0); /******/ }) /************************************************************************/ /******/ ([ /* 0 */ /***/ (function(module, __webpack_exports__, __webpack_require__) { "use strict"; // ESM COMPAT FLAG __webpack_require__.r(__webpack_exports__); // CONCATENATED MODULE: ./src/test/a.js const b = 'xx'; const bbbbbbb = 'xx'; // CONCATENATED MODULE: ./src/main.js console.log(b + 1); console.log(1111);  /***/ }) /******/ ]);`

## 两者处理源代码模块的对比

|         | 纯 esm             | 纯 cjs                                          | 两者混用                                        |
| ------- | ------------------ | ----------------------------------------------- | ----------------------------------------------- |
| webpack | 支持（有代码注入） | 支持（有代码注入）                              | 支持（有代码注入）                              |
| rollup  | **支持（无注入）** | 原生不支持（需增加插件@rollup/plugin-commonjs） | 原生不支持（需增加插件@rollup/plugin-commonjs） |

**rollup 的初衷也是希望开发者去写 esm，而不是 cjs**。因为 esm 是 javascript 的新标准，是未来，有很多优点，高版本浏览器也支持

## 两者处理对外暴露模块，非常不一样！！（解释 rollup 为什么适合打包库）

上面的 demo **加上 export 导出**

js

代码解读

复制代码

`// 入口main。js import { b } from './test/a' console.log(b + 1) console.log(1111) export { // 新增导出   b } // './test/a' export const b = 'xx' export const bbbbbbb = 'xx'`

rollup 打包 导出（非常干净，无注入代码）

- rollup 本身不去做 polyfill
- rollup 的配置文件无需特殊配置，而且还可以支持**多种模块导出（esm，cjs，umd，amd）**

  js

  代码解读

  复制代码

  `// rollup.config.js const OUTPUT_DIR = 'dist' const INPUT_FILE = 'src/main.js' export default[  // esm   {     input: INPUT_FILE,     output: {       file: OUTPUT_DIR + '/esm/index.js',       format: 'esm' // 导出esm模块      }   },   // commonjs   {     input: INPUT_FILE,     output: {       file: OUTPUT_DIR + '/cjs/index.js',       format: 'cjs' // 导出cjs模块      }   },   // umd   {     input: INPUT_FILE,     output: {       file: OUTPUT_DIR + '/umd/index.js',       format: 'umd' // 导出umd模块      }   }, ]`

  打包的到 esm 和 cjs

  js

  代码解读

  复制代码

  `// esm const b = 'xx'; console.log(b + 1); console.log(1111); export { b }; // cjs const b = 'xx'; console.log(b + 1); console.log(1111); exports.b = b; // umd （兼容3种写法：cjs，amd，global（global可以初步理解为直接通过window传值）） (function (global, factory) {     typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :     typeof define === 'function' && define.amd ? define(['exports'], factory) :     (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.aa = {})); })(this, (function (exports) { 'use strict';     const b = 'xx';     console.log(b + 1);     console.log(1111);     exports.b = b;     Object.defineProperty(exports, '__esModule', { value: true }); }));`

webpack 导出 （区别巨大，注入代码较多，导出 esm 支持的不太好）

- webpack 需配置 （此处是 webpack 4.x）

  js

  代码解读

  复制代码

  `output: {   ...,   library: 'myLib', // 暴露出去的变量的名字   libraryTarget: 'commonjs', }`

  webpack 暂时只能支持导出 cjs 或 更往前兼容的包(umd)

  **不支持 esm（实验性）** ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf95fb883bf6493ebce867bd78534f4f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

  我们此处导出 cjs 的包， 和 rollup 对比一下

  - 注入代码特别多，比较冗余

  js

  代码解读

  复制代码

  `exports["myLib"] = /******/ (function(modules) { // webpackBootstrap /******/   // The module cache /******/   var installedModules = {}; /******/ /******/   // The require function /******/   function __webpack_require__(moduleId) { /******/ /******/    // Check if module is in cache /******/    if(installedModules[moduleId]) { /******/     return installedModules[moduleId].exports; /******/    } /******/    // Create a new module (and put it into the cache) /******/    var module = installedModules[moduleId] = { /******/     i: moduleId, /******/     l: false, /******/     exports: {} /******/    }; /******/ /******/    // Execute the module function /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); /******/ /******/    // Flag the module as loaded /******/    module.l = true; /******/ /******/    // Return the exports of the module /******/    return module.exports; /******/   } /******/ /******/ /******/   // expose the modules object (__webpack_modules__) /******/   __webpack_require__.m = modules; /******/ /******/   // expose the module cache /******/   __webpack_require__.c = installedModules; /******/ /******/   // define getter function for harmony exports /******/   __webpack_require__.d = function(exports, name, getter) { /******/    if(!__webpack_require__.o(exports, name)) { /******/     Object.defineProperty(exports, name, { enumerable: true, get: getter }); /******/    } /******/   }; /******/ /******/   // define __esModule on exports /******/   __webpack_require__.r = function(exports) { /******/    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) { /******/     Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }); /******/    } /******/    Object.defineProperty(exports, '__esModule', { value: true }); /******/   }; /******/ /******/   // create a fake namespace object /******/   // mode & 1: value is a module id, require it /******/   // mode & 2: merge all properties of value into the ns /******/   // mode & 4: return value when already ns object /******/   // mode & 8|1: behave like require /******/   __webpack_require__.t = function(value, mode) { /******/    if(mode & 1) value = __webpack_require__(value); /******/    if(mode & 8) return value; /******/    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value; /******/    var ns = Object.create(null); /******/    __webpack_require__.r(ns); /******/    Object.defineProperty(ns, 'default', { enumerable: true, value: value }); /******/    if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key)); /******/    return ns; /******/   }; /******/ /******/   // getDefaultExport function for compatibility with non-harmony modules /******/   __webpack_require__.n = function(module) { /******/    var getter = module && module.__esModule ? /******/     function getDefault() { return module['default']; } : /******/     function getModuleExports() { return module; }; /******/    __webpack_require__.d(getter, 'a', getter); /******/    return getter; /******/   }; /******/ /******/   // Object.prototype.hasOwnProperty.call /******/   __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); }; /******/ /******/   // __webpack_public_path__ /******/   __webpack_require__.p = "./"; /******/ /******/ /******/   // Load entry module and return exports /******/   return __webpack_require__(__webpack_require__.s = 0); /******/ }) /************************************************************************/ /******/ ([ /* 0 */ /***/ (function(module, __webpack_exports__, __webpack_require__) { "use strict"; // ESM COMPAT FLAG __webpack_require__.r(__webpack_exports__); // EXPORTS  这一行是处理esm的导出，因为我们用的是 export { b: xx }， 如果我们用cjs的导出 比如 module.exports = { b: xx }， 此处就会没有，会更简单，直接是 module.exports = { b: xx } __webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ b; }); // CONCATENATED MODULE: ./src/test/a.js const b = 'xx'; const bbbbbbb = 'xx'; // CONCATENATED MODULE: ./src/main.js console.log(b + 1); console.log(1111); /***/ }) /******/ ]);`

  注意看 倒数第 10 多行，有个

  java

  代码解读

  复制代码

  `// EXPORTS  __webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ b; }); 这一行是处理esm的导出，因为我们用的是 export { b: xx }， 如果我们用cjs的导出 比如 module.exports = { b: xx }， 此处就会没有此行，会更简单，直接是 module.exports = { b: xx }   （ webpack会自己模拟实现 module.exports ）`

## 为什么 webpack 需要注入这么多代码？

因为 webpack 比 rollup 早出 2 年，诞生在 esm 标准出来前，commonjs 出来后

- 当时的浏览器只能通过 script 标签加载模块
  - **script 标签加载代码是没有作用域的，只能在代码内 用 iife 的方式 实现作用域效果**，
    - **这就是 webpack 打包出来的代码 大结构都是 iife 的原因**
    - 并且**每个模块都要装到 function 里面**，才能保证互相之间作用域不干扰。
    - **这就是为什么 webpack 打包的代码为什么乍看会感觉乱，找不到自己写的代码的真正原因**
- 关于 webpack 的代码注入问题，是因为**浏览器不支持 cjs**，所以**webpack 要去自己实现 require 和 module.exports 方法**（才有很多注入）（webpack 自己实现 polyfill）
  - 这么多年了，甚至到现在 2022 年，**浏览器为什么不支持 cjs**？
    - **cjs 是同步的，运行时的，node 环境用 cjs，node 本身运行在服务器，无需等待网络握手，所以同步处理是很快的**
    - **浏览器是 客户端，访问的是服务端资源，中间需要等待网络握手，可能会很慢，所以不能 同步的 卡在那里等服务器返回的，体验太差**
- **后续出来 esm 后，webpack 为了兼容以前发在 npm 上的老包**（并且当时心还不够决绝，导致这种“丑结构的包”越来越多，以后就更不可能改这种“丑结构了”），所以保留这个 iife 的结构和代码注入，**导致现在看 webpack 打包的产物，乍看结构比较乱且有很多的代码注入，自己写的代码都找不到**

rollup 诞生于 esm 标准出来后，就是针对 esm 设计的，也没有历史包袱，所以可以做到真正的“打包”（精简，无额外注入）

- （根据 npm 版本上传显示最早上传时间： **webpack 是 2013 年左右，rollup 是 2015.5**）

## rollup 如何打包第三方依赖 和 懒加载模块 和 公共模块？

和 webpack 打包一样，有两种：单 chunk 包 和 多 chunk 包

1.  单 chunk 包

    无额外配置，一般会把所有 js 打成一个包。打包外部依赖（第三方）也是一样的。比如：

    js

    代码解读

    复制代码

    `// 入口 main.js import Axios from 'axios' Axios.get() console.log(1111) ------ 打包后的结果 ------ // 最终会把axios的源代码 和 main.js 主代码，打包到一个文件内，无额外代码注入  // 以下是截取了一头一尾，中间省略 import require$$1$1 from 'http'; import require$$2 from 'https'; import require$$0$1 from 'url'; import require$$3 from 'assert'; import require$$4 from 'stream'; import require$$0 from 'tty'; import require$$1 from 'util'; import require$$7 from 'zlib'; var axios$1 = {exports: {}}; var bind$2 = function bind(fn, thisArg) {   return function wrap() {     var args = new Array(arguments.length);     for (var i = 0; i < args.length; i++) {       args[i] = arguments[i];     }     return fn.apply(thisArg, args);   }; }; ... ... ... axios$1.exports = axios; // Allow use of default import syntax in TypeScript axios$1.exports.default = axios; var _axios_0_18_1_axios = axios$1.exports; _axios_0_18_1_axios.get(); console.log(1111);`

    **此处 rollup 打包有个注意点**：

    - 很多第三方依赖很早就有了，所以用的是**commonjs 模块导出**，rollup 打包的话，需要安装插件@rollup/plugin-node-resolve。因为是 cjs 的包，所以也不存在 tree shaking

      - 插件原理是，把 cjs 的包，转成 esm 包，在打包

    - 现在比较流行的 monorepo，就是完全用 esm 写库+rollup 打包，可以很轻易的做到 tree shaking，**让核心库变的更小，解析速度更快，还可以对外提供工具，扩大影响力**

2.  多个 chunk 包（代码分离）

    1.  配置多个入口，此法比较简单，可自行测试

        js

        代码解读

        复制代码

        `// rollup.config.js  input: {                  index: 'src/main.js',                  other: 'src/other.js',              },`

    2.  代码分离 （**动态 import，懒加载， import(xxx).then(module => {})** ）

    - [此处有一个官方的例子，再清楚不过了](https://link.juejin.cn?target=https%3A%2F%2Frollupjs.org%2Frepl%2F%3Fversion%3D1.6.0%26shareable%3DJTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMiUyRiolMjBEWU5BTUlDJTIwSU1QT1JUUyU1Q24lMjAlMjAlMjBSb2xsdXAlMjBzdXBwb3J0cyUyMGF1dG9tYXRpYyUyMGNodW5raW5nJTIwYW5kJTIwbGF6eS1sb2FkaW5nJTVDbiUyMCUyMCUyMHZpYSUyMGR5bmFtaWMlMjBpbXBvcnRzJTIwdXRpbGl6aW5nJTIwdGhlJTIwaW1wb3J0JTIwbWVjaGFuaXNtJTVDbiUyMCUyMCUyMG9mJTIwdGhlJTIwaG9zdCUyMHN5c3RlbS4lMjAqJTJGJTVDbmlmJTIwKGRpc3BsYXlNYXRoKSUyMCU3QiU1Q24lNUN0aW1wb3J0KCcuJTJGbWF0aHMuanMnKS50aGVuKGZ1bmN0aW9uJTIwKG1hdGhzKSUyMCU3QiU1Q24lNUN0JTVDdGNvbnNvbGUubG9nKG1hdGhzLnNxdWFyZSg1KSklM0IlNUNuJTVDdCU1Q3Rjb25zb2xlLmxvZyhtYXRocy5jdWJlKDUpKSUzQiU1Q24lNUN0JTdEKSUzQiU1Q24lN0QlMjIlMkMlMjJpc0VudHJ5JTIyJTNBdHJ1ZSU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJtYXRocy5qcyUyMiUyQyUyMmNvZGUlMjIlM0ElMjJpbXBvcnQlMjBzcXVhcmUlMjBmcm9tJTIwJy4lMkZzcXVhcmUuanMnJTNCJTVDbiU1Q25leHBvcnQlMjAlN0JkZWZhdWx0JTIwYXMlMjBzcXVhcmUlN0QlMjBmcm9tJTIwJy4lMkZzcXVhcmUuanMnJTNCJTVDbiU1Q25leHBvcnQlMjBmdW5jdGlvbiUyMGN1YmUlMjAoeCUyMCklMjAlN0IlNUNuJTVDdHJldHVybiUyMHNxdWFyZSh4KSUyMColMjB4JTNCJTVDbiU3RCUyMiUyQyUyMmlzRW50cnklMjIlM0FmYWxzZSU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJzcXVhcmUuanMlMjIlMkMlMjJjb2RlJTIyJTNBJTIyZXhwb3J0JTIwZGVmYXVsdCUyMGZ1bmN0aW9uJTIwc3F1YXJlJTIwKCUyMHglMjApJTIwJTdCJTVDbiU1Q3RyZXR1cm4lMjB4JTIwKiUyMHglM0IlNUNuJTdEJTIyJTJDJTIyaXNFbnRyeSUyMiUzQWZhbHNlJTdEJTVEJTJDJTIyb3B0aW9ucyUyMiUzQSU3QiUyMmZvcm1hdCUyMiUzQSUyMmNqcyUyMiUyQyUyMm5hbWUlMjIlM0ElMjJteUJ1bmRsZSUyMiUyQyUyMmFtZCUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyJTIyJTdEJTJDJTIyZ2xvYmFscyUyMiUzQSU3QiU3RCU3RCUyQyUyMmV4YW1wbGUlMjIlM0FudWxsJTdE 'https://rollupjs.org/repl/?version=1.6.0&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMiUyRiolMjBEWU5BTUlDJTIwSU1QT1JUUyU1Q24lMjAlMjAlMjBSb2xsdXAlMjBzdXBwb3J0cyUyMGF1dG9tYXRpYyUyMGNodW5raW5nJTIwYW5kJTIwbGF6eS1sb2FkaW5nJTVDbiUyMCUyMCUyMHZpYSUyMGR5bmFtaWMlMjBpbXBvcnRzJTIwdXRpbGl6aW5nJTIwdGhlJTIwaW1wb3J0JTIwbWVjaGFuaXNtJTVDbiUyMCUyMCUyMG9mJTIwdGhlJTIwaG9zdCUyMHN5c3RlbS4lMjAqJTJGJTVDbmlmJTIwKGRpc3BsYXlNYXRoKSUyMCU3QiU1Q24lNUN0aW1wb3J0KCcuJTJGbWF0aHMuanMnKS50aGVuKGZ1bmN0aW9uJTIwKG1hdGhzKSUyMCU3QiU1Q24lNUN0JTVDdGNvbnNvbGUubG9nKG1hdGhzLnNxdWFyZSg1KSklM0IlNUNuJTVDdCU1Q3Rjb25zb2xlLmxvZyhtYXRocy5jdWJlKDUpKSUzQiU1Q24lNUN0JTdEKSUzQiU1Q24lN0QlMjIlMkMlMjJpc0VudHJ5JTIyJTNBdHJ1ZSU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJtYXRocy5qcyUyMiUyQyUyMmNvZGUlMjIlM0ElMjJpbXBvcnQlMjBzcXVhcmUlMjBmcm9tJTIwJy4lMkZzcXVhcmUuanMnJTNCJTVDbiU1Q25leHBvcnQlMjAlN0JkZWZhdWx0JTIwYXMlMjBzcXVhcmUlN0QlMjBmcm9tJTIwJy4lMkZzcXVhcmUuanMnJTNCJTVDbiU1Q25leHBvcnQlMjBmdW5jdGlvbiUyMGN1YmUlMjAoeCUyMCklMjAlN0IlNUNuJTVDdHJldHVybiUyMHNxdWFyZSh4KSUyMColMjB4JTNCJTVDbiU3RCUyMiUyQyUyMmlzRW50cnklMjIlM0FmYWxzZSU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJzcXVhcmUuanMlMjIlMkMlMjJjb2RlJTIyJTNBJTIyZXhwb3J0JTIwZGVmYXVsdCUyMGZ1bmN0aW9uJTIwc3F1YXJlJTIwKCUyMHglMjApJTIwJTdCJTVDbiU1Q3RyZXR1cm4lMjB4JTIwKiUyMHglM0IlNUNuJTdEJTIyJTJDJTIyaXNFbnRyeSUyMiUzQWZhbHNlJTdEJTVEJTJDJTIyb3B0aW9ucyUyMiUzQSU3QiUyMmZvcm1hdCUyMiUzQSUyMmNqcyUyMiUyQyUyMm5hbWUlMjIlM0ElMjJteUJ1bmRsZSUyMiUyQyUyMmFtZCUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyJTIyJTdEJTJDJTIyZ2xvYmFscyUyMiUzQSU3QiU3RCU3RCUyQyUyMmV4YW1wbGUlMjIlM0FudWxsJTdE')

      js

      代码解读

      复制代码

      `// 入口 main.js /* DYNAMIC IMPORTS 动态import     Rollup supports automatic chunking and lazy-loading  Rollup支持自动分块和懒加载     via dynamic imports utilizing the import mechanism   通过dynamic imports动态导入     of the host system.      */ if (displayMath) {     import('./maths.js').then(function (maths) {             console.log(maths.square(5));             console.log(maths.cube(5));     }); } // './maths.js' import square from './square.js'; export {default as square} from './square.js'; export function cube (x ) {         return square(x) * x; } // './square.js' export default function square ( x ) {         return x * x; } ---------------- 打包结果 ---------------- // main.js 'use strict'; /* DYNAMIC IMPORTS 动态import     Rollup supports automatic chunking and lazy-loading  Rollup支持自动分块和懒加载     via dynamic imports utilizing the import mechanism   通过dynamic imports动态导入     of the host system.      */ if (displayMath) {         // 打包成cjs模块的话，import替换成 Promise + require         // Promise.resolve(require('../chunk-0ee5c472.js')).then(function (maths) {         import('../chunk-c4d97f01.js').then(function (maths) {                 console.log(maths.square(5));                 console.log(maths.cube(5));         }); } // '../chunk-0ee5c472.js' 'use strict'; function square ( x ) {         return x * x; } function cube (x ) {         return square(x) * x; } exports.cube = cube; exports.square = square;`

      对于代码分割，还有一种方法可以通过 **output.manualChunks** 选项**显式**告诉 Rollup 哪些模块要**分割成单独的块**。

      **总结**：

      - **动态 import，rollup 对比 webpack 打包后的模块格式的支持度**

        | 打包后的模块格式： | esm            | cjs  | amd  | umd    |
        | ------------------ | -------------- | ---- | ---- | ------ |
        | webpack            | 不支持，实验中 | 支持 | 支持 | 支持   |
        | rollup             | 支持           | 支持 | 支持 | 不支持 |

      - 实现原理，对比 webpack：

        - webpack 是**自己实现的“动态 import“**（借助 promise + script 标签 + window 对象 + 模拟 import 方法）
        - rollup 是 （打包成 esm 模块）利用浏览器（chorme63 以上）天然支持[动态 import](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fimport%23%25E5%258A%25A8%25E6%2580%2581import 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%8A%A8%E6%80%81import')
          - 或 （打包成 cjs 模块）promise + cjs 的 require

      - **此处有个很重要细节点**

        - rollup 打的包，如果要用 动态 import（现在 vue 和 react 的单页项目 特别流行用动态 import 加载路由，算硬需求了），**注意 如果要在浏览器上跑，首先要是 esm 的包（浏览器不支持 cjs），然后浏览器版本要注意（chorme63 以上）**
          - 因为 rollup 不做额外代码注入，完全利用高版本浏览器原生支持 import（所以代码特别干净，webpack 会做大量的兼容 自己实现 require 和 import） ![esm-compatible.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0b0bf8de76c41dc9f96ad8c4ad7c313~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

    3.  rollup 如何处理公共模块？（比如， a、b、c 3 个模块 同时依赖 d）

        **有 2 种情况：**

        1.  源代码内 **不存在 动态 import**，那么会打成**一个 chunk**（a、b、c、d 4 个模块都在一包内，d 只正常有一份）
        2.  源代码内 **存在 懒加载模块，并且懒加载的模块也访问了公共依赖**，比如

            js

            代码解读

            复制代码

            `// 入口 main.js import {deepCopy} from '@xxx/methods/deepCopy.js' // 这是放在公司的npm域内的一个包，可以理解为export一个简单的deepCopy函数 console.log(deepCopy(a)) import('./test/a').then(e => {   console.log(e) }) // './test/a' 懒加载模块 也依赖 同一公共模块 import {deepCopy} from '@xxx/methods/deepCopy.js' const a = {a: 1} export const b = deepCopy(a) ---------- 是否会把 公共依赖  打包2份呢?  -------------- 答案是no，rollup还是牛p，公共依赖只会出来一份，然后对外 export  （此处举例是导出esm格式， 亲测导出cjs格式一样的可以，此处就不赘述，有兴趣可以自己test一下） 生成的目录结构，有3个文件     a-19173be8.js     main.js     main-219c2eaf.js // main.js import './main-219c2eaf.js'; // main-219c2eaf.js const deepCopy = function (obj) {   // do .. }; console.log(deepCopy(a)); import('./a-19173be8.js').then(e => {   console.log(e); }); // a-19173be8.js import { d as deepCopy } from './main-219c2eaf.js'; const a = {a: 1}; const b = deepCopy(a); export { b };`

            总结：**对于公共依赖，rollup 不会出现重复打包的情况！并且完全无注入代码！无需额外配置。** 对比 webpack 的话，webpack 需要配置 optimization.splitChunks （webpack4.x 以上）

## **总结** rollup vs webpack

### rollup 诞生在 esm 标准出来后

- **出发点就是希望开发者去写 esm 模块**，这样适合做代码静态分析，可以做 tree shaking 减少代码体积，也是浏览器除了 script 标签外，真正让 JavaScript 拥有模块化能力。是 js 语言的未来
- **rollup 完全依赖高版本浏览器原生去支持 esm 模块，所以无额外代码注入，打包后的代码结构也是清晰的**（不用像 webpack 那样 iife）
  - 目前浏览器支持模块化只有 3 种方法：
    1.  ①script 标签（缺点没有作用域的概念）
    2.  ②script 标签 + iife + window + 函数作用域（可以解决作用域问题。webpack 的打包的产物就这样）
    3.  ③esm （什么都好，唯一缺点 需要高版本浏览器）

### webpack 诞生在 esm 标准出来前，commonjs 出来后

- 当时的浏览器只能通过 script 标签加载模块
  - **script 标签加载代码是没有作用域的，只能在代码内 用 iife 的方式 实现作用域效果**，
    - **这就是 webpack 打包出来的代码 大结构都是 iife 的原因**
    - 并且**每个模块都要装到 function 里面**，才能保证互相之间作用域不干扰。
    - **这就是为什么 webpack 打包的代码为什么乍看会感觉乱，找不到自己写的代码的真正原因**
- 关于 webpack 的代码注入问题，是因为**浏览器不支持 cjs**，所以**webpack 要去自己实现 require 和 module.exports 方法**（才有很多注入）
  - 这么多年了，甚至到现在 2022 年，**浏览器为什么不支持 cjs**？
    - **cjs 是同步的，运行时的，node 环境用 cjs，node 本身运行在服务器，无需等待网络握手，所以同步处理是很快的**
    - **浏览器是 客户端，访问的是服务端资源，中间需要等待网络握手，可能会很慢，所以不能 同步的 卡在那里等服务器返回的，体验太差**
- **后续出来 esm 后，webpack 为了兼容以前发在 npm 上的老包**（并且当时心还不够决绝，导致这种“丑结构的包”越来越多，以后就更不可能改这种“丑结构了”），所以保留这个 iife 的结构和代码注入，**导致现在看 webpack 打包的产物，乍看结构比较乱且有很多的代码注入，自己写的代码都找不到**

## 最终使用推荐

1.  打包**开源库**：**不用思考，rollup 会是你更好的选择**

    - rollup 本身也支持很多插件，生态也成熟，各种场景几乎都能照顾到

2.  打包**应用程序**：个人推荐，看您的 应用程序 **需不需要兼容老浏览器**

    兼容表如下（其实就是 动态 import 的兼容表 ） 以 chorme 为例，需要 chorme63 以上 ![esm-compatible.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0b0bf8de76c41dc9f96ad8c4ad7c313~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

    **如果不考虑兼容老浏览器，建议用 vite 开发应用程序**（[vite 官网（react/vue/ts 都支持）](https://link.juejin.cn?target=https%3A%2F%2Fcn.vitejs.dev%2Fguide%2Fwhy.html 'https://cn.vitejs.dev/guide/why.html') ）

    - **dev 开发方面**：vite 提供 dev 服务器，以及比 webpack 快的多的热更新，dev 开发的体验更好了
    - **prd 生产方面**：vite 打生产包，实际上用的就是**rollup**，笔者用 vite 已经上过真实项目，开发体验很棒，**打的生产包比用 webpack 小了很多，有不错的性能提升**
      - vite 的优点和特点，可以看我另一篇：[vite 原理浅析-dev 篇（对比 webpack）](https://juejin.cn/post/7050293652739850271 'https://juejin.cn/post/7050293652739850271')
    - **理论上 chorme63 以上 可以开箱即用，chorme63 以下也不是完全不能用**，需要自己加**polyfill**或 vite 插件（[vite 推荐的兼容做法](https://link.juejin.cn?target=https%3A%2F%2Fcn.vitejs.dev%2Fguide%2Fbuild.html%23browser-compatibility 'https://cn.vitejs.dev/guide/build.html#browser-compatibility') ）

---

篇幅有点长，最好先对 webpack 有充分的了解，在看此篇，会更好理解 和 全面对比。了解 webpack 可以先看笔者的上篇 [webpack 打包产物解析及原理（含 cjs/esm/代码分离/懒加载）](https://juejin.cn/post/7053998924071174175 'https://juejin.cn/post/7053998924071174175')

笔者建议，最好自己上手打包 调试，得到的打包产物 并仔细分析。一时看不懂的话，也可以收藏本文，过段时间在看，先了解前置知识

最后，感谢爱学习的你，谢谢点赞！

本文转自 <https://juejin.cn/post/7054752322269741064/>
