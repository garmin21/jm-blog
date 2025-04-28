---
title: vue2中深入原理-methods中的方法都被vue做了什么
createTime: 2025/04/28 17:02:21
permalink: /article/1040s4wr/
author: 李嘉明
tags:
  - 小课堂
---

目的： 输入框失去焦点后就不需要在执行最后一请求

现在有一个输入框，每次输入的时候，都会触发 exec 返回的防抖函数， 并且我们给 exec 防抖函数 添加了一个静态方法 `_cancel` 用于在输入框失去焦点的时候，停止执行最后一次

```vue
<template>
  <input type="text" v-model="inputValue" @input="handleInput" @blur="cancel" />
</template>

<script>
function exec(func, time) {
  let timeId = null;

  function de(...args) {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      func.apply(this, args);
    }, time);
  }
  de._cancel = function () {
    clearTimeout(timeId);
  };

  return de;
}
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    handleInput: exec(function () {
      console.log('查询线上数据返回！');
    }, 1000),
    cancel() {
      // ❌ this.handleInput._cancel()

      // 当前实例上的方法
      // console.log(this.handleInput)

      // 在配置对象里面的方法
      // console.log(this.$options.methods.handleInput)

      // console.log(this.handleInput === this.$options.methods.handleInput) // false
      // 竟然不是同一个东西，他们有什么关联呢？

      // 答：this.handleInput 实际 上 是 this.$options.methods.handleInput.bind(vm) 返回的新函数，所以不想等
      
      // 如何解决？

      // 答：data 中 返回的对象，不会被 bind 改变this, 放在 data 中就可以了
    },
  },
};
</script>
```
