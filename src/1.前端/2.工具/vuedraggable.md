---
title: vue draggable
createTime: 2025/01/06 11:18:19
permalink: /article/qaqhei3s/
tags:
  - 工具
---

[Vue.Draggable](https://github.com/SortableJS/Vue.Draggable#readme)

```vue
<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label><input type="checkbox" v-model="editable" />禁用拖拽</label>
        </div>
        <button type="button" class="btn btn-default" @click="orderList">
          排序
        </button>
      </div>
    </div>

    <div class="flex">
      <div class="col-md-3 flex-1">
        <Draggable
          class="list-group"
          tag="ul"
          v-model="list"
          v-bind="dragOptions"
          :move="onMove"
          @end="handleEnd"
        >
          <transition-group type="transition" :name="'flip-list'">
            <li
              class="list-group-item"
              v-for="element in list"
              :key="element.order"
            >
              <i
                :class="
                  element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                "
                @click="element.fixed = !element.fixed"
                aria-hidden="true"
              ></i>
              {{ element.name }}
              <span class="badge">{{ element.order }}</span>
            </li>
          </transition-group>
        </Draggable>
      </div>

      <div class="list-group col-md-3 flex-1">
        <pre>{{ listString }}</pre>
      </div>
    </div>
    <ol>
      <li>move 的回调函数，返回 false 将禁用 拖拽</li>
      <li>@start 拖拽之前触发</li>
      <li>@end 拖拽之后触发</li>
    </ol>

    <ol>
      <li>https://www.npmjs.com/package/vuedraggable</li>
      <li>
        https://github.com/SortableJS/Vue.Draggable/tree/master/example/components
      </li>
      <li>
        https://github.com/David-Desmaisons/draggable-example/blob/dependabot/npm_and_yarn/chownr-1.1.4/src/components/Hello.vue
      </li>
    </ol>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];
export default {
  name: "hello",
  components: {
    Draggable,
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
    };
  },
  methods: {
    handleEnd() {
      //   this.list = this.list.map((item, index) => {
      //     item.order = index + 1;
      //     return item;
      //   });
    },
    orderList() {
      /**
       * 将拖拽的第一个元素，的 order 变为 1，
       */
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost",
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
  },
};
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
</style>



```