---
title: defineAsyncComponent
author: 李嘉明
createTime: 2024/09/08 18:56:27
permalink: /learn-vue3/clr9tdki/
---

defineAsyncComponent 是 Vue 3 提供的一个用于**异步加载组件**的功能，它允许我们在需要时才去加载某个组件，而不是一开始就把所有组件都加载到页面中。这样可以有效地**减少首屏加载时间**尤其是当项目中组件数量庞大时，异步加载组件可以极大提高应用的[性能]

## 1\. 由来

在 [Vue 2](https://so.csdn.net/so/search?q=Vue%202&spm=1001.2101.3001.7020) 中，我们使用 Vue.component 来异步加载组件，但这种方式不够灵活，而且代码风格比较混乱。因此在 Vue 3 中，引入了 defineAsyncComponent，提供了一种更清晰、更模块化的异步组件定义方法。

## 2. 为什么引入？

1、减少首屏加载时间：在大型应用中，初始加载时如果同时加载所有的组件，可能会导致页面首屏加载过慢。异步组件可以按需加载，提升页面加载速度。

2、提升性能：当用户访问到某个特定页面或触发特定操作时再加载相关组件，避免一次性加载所有内容，节省带宽和资源。

3、提升用户体验：使用 defineAsyncComponent 可以配合加载中的 UI 组件，给用户一种流畅的交互体验。

## 3\. 基本使用

[Vue 3](https://so.csdn.net/so/search?q=Vue%203&spm=1001.2101.3001.7020) 中 defineAsyncComponent 是一个[函数](https://marketing.csdn.net/p/3127db09a98e0723b83b2914d9256174?pId=2782&utm_source=glcblog&spm=1001.2101.3001.7020)，用于异步导入组件。它返回一个函数，当组件真正被使用时才去加载该组件。

**在模板中使用异步组件：**

```html
<template>
  <div><AsyncComponent /></div
></template>
<script>
  import { defineAsyncComponent } from 'vue';
  export default {
    components: {
      AsyncComponent: defineAsyncComponent(() => import('./Component.vue')),
    },
  };
</script>
```

import('./Component.vue') 是动态导入语法，返回一个 **Promise**，当组件加载成功时解析这个 Promise，组件才会被渲染。

其还支持更复杂的用法，比如配置加载中组件、错误组件和延迟时间等。

**带选项的用法：**

```javascript
const AsyncComponent = defineAsyncComponent({
  // 工厂函数，返回一个 Promise
  loader: () => import('./Component.vue'),
  // 当异步组件正在加载时要显示的组件
  loadingComponent: LoadingComponent,
  // 当加载失败时要显示的组件
  errorComponent: ErrorComponent,
  // 延迟显示 loadingComponent，默认是 200 毫秒
  delay: 300,
  // 如果加载组件超时，将显示 errorComponent，默认值是 Infinity
  timeout: 3000,
});
```

\- loader：这是一个工厂函数，返回一个 Promise。

\- loadingComponent：当组件正在加载时，用来展示的占位组件。

\- errorComponent：如果组件加载失败（例如网络问题或超时），展示的错误组件。

\- delay：如果需要延迟展示 loading 组件，可以设置一个延迟时间（单位为毫秒）。默认延迟是 200 毫秒，避免闪烁问题。

\- timeout：如果在指定时间内组件没有加载完毕，就会显示 errorComponent，这里可以设定超时时间。

**配合路由懒加载：**

```javascript
const routes = [
  {
    path: '/about',
    component: defineAsyncComponent(() => import('./components/About.vue')),
  },
];
```

当用户访问 /about 路径时才会去加载 About.vue 组件。

## 4\. 隐藏点

1、首次渲染时的延迟

默认情况下，异步组件的 loadingComponent 会有一个 200 毫秒的延迟，这个延迟是为了避免在组件加载非常快时，闪烁显示加载组件。如果不想要这个延迟，可以手动设置 delay: 0。

```javascript
const AsyncComponent = defineAsyncComponent({  loader: () => import('./Component.vue'),  loadingComponent: LoadingComponent,  delay: 0, // 取消默认延迟});
```

如果不设置 delay，短时间内加载完成的异步组件不会展示 LoadingComponent，这可能会让我们觉得加载动画不一致。

2、组件缓存与重复加载

\- defineAsyncComponent 默认**不会缓存**已经加载的组件。如果多次切换到同一个异步组件，Vue 会每次重新加载它。要避免这种情况，可以将组件手动缓存到本地或使用类似 Vue Router 的路由缓存。

\- 如果在同一个页面内反复使用同一个异步组件，且该组件的加载过程比较耗时，最好将组件缓存，减少不必要的重复加载。

```html
<keep-alive> <AsyncComponent /></keep-alive>
```

3、异步组件的并发加载

如果异步组件在多个地方被同时加载，Vue 不会自动合并这些请求，导致同一组件被多次加载。这种情况可能会引起性能问题，尤其是在网络较差时。

解决方法：可以手动控制组件的加载，通过 Promise 的 then 和 catch 来缓存加载状态，避免重复加载。

```javascript
let AsyncComponentPromise;
const AsyncComponent = defineAsyncComponent(() => {
  if (!AsyncComponentPromise) {
    AsyncComponentPromise = import('./Component.vue');
  }
  return AsyncComponentPromise;
});
```

4、异步[错误处理](https://marketing.csdn.net/p/3127db09a98e0723b83b2914d9256174?pId=2782&utm_source=glcblog&spm=1001.2101.3001.7020)机制

defineAsyncComponent 提供了 onError 回调，这个回调可以捕获组件加载过程中发生的错误，比如网络问题、模块解析失败等。通过 onError 可以做一些自定义的错误处理，比如重试机制或展示特定的错误信息。

默认情况下异步组件失败时只是简单地显示 errorComponent，但可以通过 onError 实现更复杂的错误恢复或重试机制。

```javascript
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./Component.vue'),
  onError(error, retry, fail, attempts) {
    if (attempts < 3) {
      // 尝试重试
      retry();
    } else {
      // 如果超过了重试次数，失败
      fail();
    }
  },
});
```

## 5\. 使用场景

1、大型单页应用（SPA）：当应用包含大量组件时，通过按需加载优化性能。

2、动态加载某些不常用的页面或组件：如管理后台、图表页面等，用户并不总是访问这些页面，可以异步加载以节省初始加载资源。

3、配合路由懒加载：使用 Vue Router 时，通过路由懒加载，实现不同页面组件的异步加载。

## 6\. 注意事项

1、组件路径问题：要确保 import('./Component.vue') 的路径是正确的，否则会抛出模块找不到的错误。

2、超时处理：如果网络较慢，加载超时会显示错误组件，可以根据实际情况调整 timeout。

3、SEO 问题：异步组件的懒加载可能会导致首屏渲染延迟，影响到搜索引擎优化（SEO）。因此对于需要 SEO 的页面，应该避免懒加载关键内容。

4、加载中状态处理：为了用户体验，通常要显示 loadingComponent，并避免加载中的页面闪烁。


## 总结：

defineAsyncComponent 是 Vue 3 为优化性能和用户体验而提供的一种强大工具，尤其适用于大项目中按需加载组件的需求。通过合理设置 loadingComponent、errorComponent 等选项，可以为用户提供更加流畅的体验，同时减轻首屏加载压力。
