---
title: vue2的奇怪问题
createTime: 2025/04/27 18:18:30
permalink: /article/m8xpks8j/
author: 李嘉明
tags:
  - 小课堂
---


## 下面的操作是否可以生效？

```vue
<template>
  <div>
    <h1>{{ arr }}</h1>
     <h1>{{ myname }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [0,1,2,3,4]
    }
  },
  mounted() {
    this.arr[0] = 9 
    this.myname = 'jack'
  }
}

</script>
```


## 扩展问题: vue3 中 ref reactive 等 是否可以支持 数组下标，对象新增属性 的操作


```vue
<script setup>
import { ref, reactive } from 'vue';

const obs = reactive({})

obs.name = 'jack'


const arr = ref([1,2,3,4])


arr.value[0] = 90


setTimeout(() => {
  arr.value[1] = 190
}, 4000)

</script>

<template>
  <h1>{{obs}}</h1>
  <h1>{{ arr }}</h1>
</template>

```
