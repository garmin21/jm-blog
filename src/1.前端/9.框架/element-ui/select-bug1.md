---
title: el-select 悬浮出视口
author: 李嘉明
createTime: 2024/12/20 13:49:04
permalink: /article/ydriumdm/
tags:
  - element-ui
---

今天遇到一个，极为无语的 bug ，el-select 下拉组件，跑出视口，大概原因就算 el-select 使用到的自动计算的库，第二次计算的时候，位置计算错误了。具体如何计算的就不清楚了

![select](/element-ui/el-select.png)

最后，前前后后，搞了一个小时，查资料，当我给 select 加上以下这一段代码时，问题解决

```vue
<script>
export default {
  methods: {
    // select 下拉打开，请求数据
    handleVisibleChange(val) {
      this.$nextTick(() => {
        if (val) {
          // 在下一次DOM 更新后，去请求数据接口
          this.more();
        }
      });
    }
  }
};
</script>
```


猜测分析问题的原因：


select 在数据没有显示前，计算的位置 是正确的，
当数据请求回来后，第一次显示正确，select 内部是使用 v-show 进行显示和隐藏，所以 v-show 并不是真正把DOM 删除，select 没有销毁，他就会，记住上一次的信息，然后，下次用上一次的信息，去打开下拉


为什么，要缓存上一次的信息，我估计，也是为了复用 提升性能


**这个问题出现的原因，可能就是，是 打开请求的数据，如果是 一开始就把数据填充好了，是不是就不会，这样？**
