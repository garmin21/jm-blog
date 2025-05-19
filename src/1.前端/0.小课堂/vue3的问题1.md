---
title: vue3的template 为 什么不需要加 .value
createTime: 2025/05/18 19:39:06
permalink: /article/d2sccugu/
author: 李嘉明
tags:
  - 小课堂
---


> **在 Vue 3 的模板编译过程中，ref 会自动解包为其 .value 值。**这个机制被称为 "template ref unwrapping"，并且只在模板中生效，不会影响 JavaScript 逻辑。


### 原理：自动解包是如何实现的？
✅ 1. 编译阶段处理：模板编译器会自动识别 ref 并插入 .value 访问


```js
return function render() {
  return createVNode('div', null, [
    unref(count)  // 👈 相当于 count.value
  ])
}
```

✅ 2. unref() 是什么？

Vue 提供的工具函数，作用如下：

```js
function unref(val) {
  return isRef(val) ? val.value : val;
}
```


判断是否是 ref 如果是 ref 那么就自动帮助你 .value 否则 直接返回


### 注意事项

在模板渲染上下文中，只有顶级的 ref 属性才会被解包。


例如：

```js
// ✅ 这种方式 自动解包
const count = ref(0)

// ❌ 这种方式不会自动解包
const object = { id: ref(1) }
```