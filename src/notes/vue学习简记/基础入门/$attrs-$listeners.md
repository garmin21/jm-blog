---
title: $attrs 与 $listeners
createTime: 2025/06/14 21:56:58
permalink: /learn-vue/bvkibyqh/
---

## vue2

### $attrs

什么是$attrs：**它是 Vue 实例上的一个对象，包含了父组件传递给子组件的所有非props属性（即没有在props中声明的属性）。在创建高阶组件或封装组件时非常有用**


看一个例子：我对 el-button 进行二次封装


```vue
<template>
  <el-button v-bind="$attrs">{{ label }}</el-button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false 
}
</script>
```

> TODO: `inheritAttrs 默认为true` vue 会将 $attrs 中的属性自动绑定到el-button 组件的根上，你可以 改为 `false` 禁用这种行为


**使用**

使用后，el-button 组件会接收到 `type` `round` 这些 未在 props 对象中声明对属性, 对其进行设置prop
```vue
<template>
  <MyButton type="primary" round label="点击事件"></MyButton>
</template>

<script>
import MyButton from '@/components/my-button'
export default {
  components: {
    MyButton
  }
}
</script>
```

### $listeners

> 什么是`$listeners`: 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器 它可以通过 `v-on="$listeners"` 传入内部组件

看一个例子：我对 el-button 进行二次封装

```vue
<template>
  <el-button  v-on="$listeners"></el-button>
</template>

<script>
export default {
  name: 'my-button',
  inheritAttrs: false,
  mounted() {
    setTimeout(() => {
      this.$emit('custom-event')
    }, 1000);
  }
}
</script>
```

**使用**

使用后，$listeners 会帮我们把 `@click` `@custom-event` 等事件传递给 子孙组件，子孙组件，可以通过 $emit 来进行触发事件
```vue
<template>
  <MyButton @click="handleClick" @custom-event="handleCustomEvent"></MyButton>
</template>

<script>
import MyButton from '@/components/my-button'
export default {
  components: {
    MyButton
  },
  methods: {
    handleClick() {
      console.log('Clicked!');
    },
    handleCustomEvent() {
      console.log('自定义事件')
    }
  }
}
</script>
```


## vue3

在 Vue 3 中，`$listeners` 已经被废弃，取而代之的是 $attrs 包含了所有的属性和事件监听器


同样还是封装el-button

```vue
<template>
  <div>
    <el-button v-bind="$attrs">{{ label }}</el-button>
  </div>
</template>

<script lang="js" setup>
import { onMounted, defineEmits } from 'vue'
const emit = defineEmits('custom')
defineProps({
  label: {
    type: String,
    default: '8999'
  }
})
defineOptions({
  inheritAttrs: false
})

onMounted(() => {
  setTimeout(() => {
    emit('custom')
  }, 2000)
})
</script>
```

> 新增一个 BFC 父组件 ，更直观的看清楚 其使用意义


```vue
<template>
  <myButton v-bind="$attrs"></myButton>
</template>

<script lang='ts' setup >
import myButton from './my-button.vue';

</script>
```

**使用**

```vue
<template>
  <BFC type="success" label="点击事件" size="large" round @click="handleClick" @custom="handleCustom"></BFC>
</template>

<script lang='ts' setup >
import BFC from './BFC.vue'

function handleClick() {
  console.log('默认已有的事件')
}

function handleCustom() {
  console.log('自定义的事件')
}
</script>
```