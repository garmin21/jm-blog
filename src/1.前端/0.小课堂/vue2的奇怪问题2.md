---
title: vue2中深入原理-ajax请求在那个生命周期钩子中？
createTime: 2025/04/29 14:57:10
permalink: /article/owgrgn6s/
author: 李嘉明
tags:
  - 小课堂
---


平时开发代码，大家首选就是 将请求写在 mounted 中，有没有想过为啥要写在mounted中呢？


<img title='生命周期' src='./lifecycle.png' width='360px' />


这是一张vue3的生命周期图，跟vue2 其实差不多，都是换了个名字而已，原理基本差不多。


可以看到 在 vue 对象被实例化后，基本干了这些事情 
1. 初始化 ，收集 ref reactive 中的 数据，将其包装成一个个的响应式数据 
2. 先触发 beforeCreate  后触发 create 表示当前数据依赖已经被收集了
3. 接下来就是 渲染虚拟dom， beforeMounted 表示即将挂载到真实dom
4. mounted 表示真实dom 已经挂载完成，页面此时也可以看到渲染了
6. 。。。


后面的不在过多称述了，可以看到 

1. created 钩子在实例创建后立即调用，此时数据已被设置，但 DOM 还未被渲染。适合用于发起 AJAX 请求以获取数据。
2. mounted 钩子在组件挂载到 DOM 后调用。如果你的请求依赖于 DOM 元素，或者需要在组件可见时执行，可以使用 mounted 钩子


```vue
<template>
  <div></div>
</template>

<script>
export default {
  created() {
    // 此时将数据转为响应式对象，为挂载到页面做准备
    fetch('http://xxxxxx').then(res => res.json()).then(res => {
      this.tableData = res.data
    })
  },
  mounted() {
    // 依赖dom 挂载，所以需要等 dom 挂载完成后，在进行渲染
    // 在这里，比如我有一个需要操作dom 的接口
  }  
};
</script>
```