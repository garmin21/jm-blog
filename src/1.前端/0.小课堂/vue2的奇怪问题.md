---
title: vue2中深入原理-修改响应式数据
createTime: 2025/04/27 18:18:30
permalink: /article/m8xpks8j/
author: 李嘉明
tags:
  - 小课堂
---

### 数组

问题：数组是否可以通过下标的方式去修改？

> mounted 中不能，vue2 不支持，因为 object.defineProperty 处理麻烦，需要对每一个属性进行get/set 的设置。那么数组有多少个元素，就有多少对get/set 十分消耗性能，并且对数组的支持不够完整，length 不支持拦截， 所以 vue2 提供 $set / 并且重写了一些数组的方法 的方式去修改

```vue
<template>
  <h1>{{ arr }}</h1>
</template>
<script>
export default {
  data() {
    return {
      arr: [0, 1, 2, 3, 4],
    };
  },
  beforeCreate() {
    // ❌ 不可以修改 创建之前 此时 data 还没准备好, 无法访问到数组下标数据
    this.arr[0] = 9;
  },
  created() {
    // ✅ 可以修改，此时创建完成，响应式数据准备好了 可以直接修改
    this.arr[0] = 9;
  },
  beforeMount() {
    // ✅ 可以修改 虚拟dom 渲染之前，跟 created 一样可以修改
    this.arr[0] = 9;
  },
  mounted() {
    // ❌ 无法修改 页面已经渲染完成，此时的修改操作，是不被vue2 允许的
    this.arr[0] = 9;

    // ✅ 直接覆盖了
    this.arr = [3,4,5]
  },
};
</script>
```

### 对象

问题：mounted 钩子中新增属性是否可以引起页面变化

> 不会，因为 新增的属性不会触发 object.defineProperty 的 set/get 自然也无法转变为响应式的属性，页面也不会做出响应




## vue3 中 ref reactive 为什么支持在 mounted 时去修改


```vue
<script setup>
import { ref, reactive } from 'vue';

// setup 🟰 beforeCreate + created
const obs = reactive({});
const arr = ref([1, 2, 3, 4]);

// ✅
arr.value[0] = 90;

setTimeout(() => {
  // ✅
  arr.value[1] = 190;
}, 4000);

onMounted(() => {
  // ✅
  arr.value[1] = 1000;
  obs.name = 'jack'
})

</script>

<template>
  <h1>{{ obs }}</h1>
  <h1>{{ arr }}</h1>
</template>
```


因为vue3 使用了 proxy API，` proxy `返回的代理对象，支持 动态属性的 getter/setter, 而 `Object.defineProperty` 需要对每一个属性 单独定义 getter/setter 。新增删除动态属性也不会触发getter/setter
