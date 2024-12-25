---
title: extends
author: 李嘉明
createTime: 2024/12/25 21:49:45
permalink: /learn-vue3/axh2p9lq/
---

[](https://cn.vuejs.org/api/options-composition.html#extends)

今天发现一个 vue3 extends 关键字, 估摸着来说，v2 应该也有，

下面是一个固定的示例：

```vue{21}
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

// 父组件
const BaseComponent = defineComponent({
  data() {
    return {
      title: 'Hello from Base Component',
      message: 'This is a message from the base component.',
    };
  },
});

export default defineComponent({
  extends: BaseComponent,
  data() {
    return {
      title: '你好啊',
      message: 'This is an extended message from the extended component.',
    };
  },
  setup(props) {
    console.log(props, 'mmm');
  },
});
</script>
```


默认继承后，子组件对象中与 父组件相同的 方法和 字段，会被覆盖，应该就是类似与 java中 `extends` 继承

使用场景

1. 比如某一个组件的，内部处理数据的时候，你想加点东西，那么你可以通过继承重写
