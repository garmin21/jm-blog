---
title: vue3中深入原理-setup中直接使用异步会有什么问题？
createTime: 2025/05/17 19:48:43
permalink: /article/xo2vpq2v/
---


## 先说结论

setup() 可以是 async 函数，但它返回的是一个 Promise，这会影响组件的行为（特别是用于 `<Suspense>`、SSR、生命周期等）。

1. 返回的是一个promise, Vue 不会立即获取返回的data.而是等他resolve
2. 生命周期钩子会延迟触发, onMounted 钩子 需要等异步 resolve 后再触发
3. 只能在 `<Suspense>` 中使用,不然vue3 会给出警告
4. 错误处理变复杂，异常不会立即报错


```vue
<!-- HelloWorld.vue -->
<script setup>
import { onMounted } from 'vue'
defineProps({
  msg: {
    type: String,
    required: true,
  }
})

const fetchSomething = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  },3000)
})

await fetchSomething();


onMounted(() => [
  alert(1)
])
</script>

<template>
  <div class="greetings">
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>
```


```vue
<!-- App.vue -->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <HelloWorld />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
```