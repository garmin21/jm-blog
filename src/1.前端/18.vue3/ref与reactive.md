---
title: ref与reactive的优缺点
createTime: 2025/04/27 19:00:14
permalink: /article/p3so2tq9/
tags:
  - vue3
---

> ref 是 vue3 中比较推荐的 数据结构，它基本完全代替 reactive

## 数组

```vue
<script setup>
import { ref, reactive } from 'vue';

const arr = ref([1, 2, 3, 4]);

const str = reactive([1, 2, 3, 4]);

// 如果是 reactive 的修改
setTimeout(() => {
  // ❌ reactive 不支持 直接覆盖
  // str = [9,6,6,8]
  // ✅ 直接设置为0  可以被拦截到，并立即清空数据
  // str.length = 0
  // ✅ splice 修改原数组，删除所有元素，再新增元素，也可以被拦截到
  // const data = [8, 5, 6, 7, 8, 3, 5, 6];
  // str.splice(0, str.length, ...data);
  // ✅ reactive 支持通过下标修改
  // str[1] = '我是被修改的'
}, 4000);

// 如果是 ref 的修改
setTimeout(() => {
  // ref 支持直接覆盖
  // ✅ arr.value = [9,6,6,8]
  // 直接设置为0  可以被拦截到，并立即清空数据
  // ✅ arr.value.length = 0
  // ✅ splice 修改原数组，删除所有元素，再新增元素，也可以被拦截到
  // const data = [8, 5, 6, 7, 8, 3, 5, 6];
  // arr.value.splice(0, arr.length, ...data);
  // ✅ ref 支持通过下标修改
  // arr.value[1] = '我是被修改的'
}, 4000);
</script>

<template>
  <h1>{{ arr }}</h1>
  <h1>{{ str }}</h1>
</template>
```

## 对象

```vue
<script setup>
import { ref, reactive } from 'vue';

const arr = ref({});
const str = reactive({});

setTimeout(() => {
  // ref 支持直接覆盖
  // ✅ arr.value = {name: 'jack'}

  // ✅ 新增新属性 能被拦截到
  arr.value.name = '我是新增的属性';
}, 4000);

setTimeout(() => {
  // ❌ reactive 不支持直接覆盖
  // str = {name: 'jack'}

  // ✅ 新增新属性 能被拦截到
  str.name = '我是新增的属性';
}, 4000);
</script>

<template>
  <h1>{{ arr }}</h1>
  <h1>{{ str }}</h1>
</template>
```


我们可以看出，大部分场景，`ref` 的使用是 优与  `reactive` 的