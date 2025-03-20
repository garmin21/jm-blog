---
title: vuex原理
createTime: 2025/03/20 09:53:57
permalink: /learn-vue/ae6shqn6/
---

vuex 在 vue 中的使用

`yarn add vuex`

## 1. 基本使用

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {};

const actions = {};

const mutations = {};

const getters = {};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;
```

```js
// main.js
import store from "./store";

new Vue({
  store,
});
```

## 2. 分析需要做的事情

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // 实现一个插件 必须要有install 方法

const state = {}; // 将state 要处理成响应式的数据

const actions = {}; // 异步处理

const mutations = {}; // 同步处理

const getters = {}; // 计算属性

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;

// main.js
import store from "./store";

new Vue({
  store,
});
```

分析：

1. 实现一个插件
2. 让每一个组件都能访问到 \$store 对象？
3. 将 state 处理成响应式数据
4. 实现 commit 方法
5. 实现 dispatch 方法, 并且 需要对异步做处理
6. 实现 getters 计算属性

### 1. 实现一个插件

```js
let Vue;
function JmStore(options) {}

function install(_Vue) {
  Vue = _Vue;
}

export default { JmStore, install };
```

### 2. 让每一个组件都能访问到 \$store 对象？

```js
let Vue;
function JmStore(options) {}

function install(_Vue) {
  Vue = _Vue;
  // 每一个组件，都会被 mixin 注入
  Vue.mixin({
    // 初始化前
    beforeCreate() {
      //  判断到根组件上有 store 对象， 直接挂载到 Vue.prototype
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { JmStore, install };
```

### 3. 将 state 处理成响应式数据

```js
let Vue;
function JmStore(options) {

    // 借鸡生蛋
    this.state = new Vue({
        data: options.state;
    })
}

function install(_Vue) {
  Vue = _Vue;
  // 每一个组件，都会被 mixin 注入
  Vue.mixin({
    // 初始化前
    beforeCreate() {
      //  判断到根组件上有 store 对象， 直接挂载到 Vue.prototype
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { JmStore, install };
```

### 4. 实现 commit 方法

```js
let Vue;
function JmStore(options) {

    this._mutations = options.mutations;

    // 借鸡生蛋
    this.state = new Vue({
        data: options.state;
    })

    this.commit = function(type, val) {
        // 需要从options.mutations 中找到对应的方法执行
        // 并且 参数一 是一个 state
        this._mutations[type](this.state, val)
    }
}

function install(_Vue) {
  Vue = _Vue;
  // 每一个组件，都会被 mixin 注入
  Vue.mixin({
    // 初始化前
    beforeCreate() {
      //  判断到根组件上有 store 对象， 直接挂载到 Vue.prototype
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { JmStore, install };


```

### 5. 实现 dispatch 方法, 并且 需要对异步做处理

```js
let Vue;
function JmStore(options) {

    this._mutations = options.mutations;
    this._actions = options.actions;

    // 借鸡生蛋
    this.state = new Vue({
        data: options.state;
    })

    this.commit = function(type, val) {
        // 需要从options.mutations 中找到对应的方法执行
        // 并且 参数一 是一个 state
        this._mutations[type](this.state, val)
    }
    // 需要从 options.actions 中找到 对应的方法执行
    // 参数一是一个 上下文对象 this
    // 对异步做处理，其他和 commit 没什么两样
    this.dispatch = function(type, val) {
        return new Promise((reslove, reject) => {
            try {
                const res = this._actions[type](this, val);
                reslove(res)
            } catch(e) {
                reject(e)
            }
        })
    }

}

function install(_Vue) {
  Vue = _Vue;
  // 每一个组件，都会被 mixin 注入
  Vue.mixin({
    // 初始化前
    beforeCreate() {
      //  判断到根组件上有 store 对象， 直接挂载到 Vue.prototype
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { JmStore, install };

```

### 6. 实现 getters 计算属性

```js
let Vue;
JmStore.prototype.getters = {} // 存储 getters 的数据结构

function JmStore(options) {

    this._mutations = options.mutations;
    this._actions = options.actions;
    this._getters = options.getters;

    // 借鸡生蛋
    this.state = new Vue({
        data: options.state;
    })

    this.commit = function(type, val) {
        // 需要从options.mutations 中找到对应的方法执行
        // 并且 参数一 是一个 state
        this._mutations[type](this.state, val)
    }
    // 需要从 options.actions 中找到 对应的方法执行
    // 参数一是一个 上下文对象 this
    // 对异步做处理，其他和 commit 没什么两样
    this.dispatch = function(type, val) {
        return new Promise((reslove, reject) => {
            try {
                const res = this._actions[type](this, val);
                reslove(res)
            } catch(e) {
                reject(e)
            }
        })
    }

    // 实现一个calculate方法，将 JmStore.prototype.getters 处理成键值对的方式

    const calculate = () => {
        const keys = Object.keys(this._getters);

        for(let i = 0; i < keys.length; i++) {
            // 获取key
            const key = keys[i]
            // 获取value
            const value = this._getters[key](this.state)
            // 判断属性是否已经被设置过, 已经存在？
            if(this.getters[key]) {
                this.getters[key] = value
            } else {
                Object.defineProperty(this.getters, key, {
                    value,
                    configurable: true, // 允许被删除
                    writable: true  // 允许被修改
                })
            }
        }
    }

    // 初始化执行
    calculate();
}

function install(_Vue) {
  Vue = _Vue;
  // 每一个组件，都会被 mixin 注入
  Vue.mixin({
    // 初始化前
    beforeCreate() {
      //  判断到根组件上有 store 对象， 直接挂载到 Vue.prototype
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { JmStore, install };
```


### 7. 优化 state， 约束对 state  的修改

ES6 系列之 Babel 是如何编译 Class 的：https://segmentfault.com/a/1190000017036525

从babel编译结果分析class的实现原理：https://www.cnblogs.com/zhengrongbaba/archive/2021/09/15/15266927.html

ES6中的class是如何实现的(附Babel编译的ES5代码详解)：https://www.jb51.net/article/161452.htm

目前看来 state 是不安全的，他可以被修改？

```js

// 使用get set 访问器对state 做一个拦截
JmStore.prototype = {
    get state() {
        return this._vm._data.$$state;
    },
    set state(state) {
        return new TypeError('不允许', state)
    }
}

JmStore.prototype.getters = {};

function JmStore(options) {

    this._options = options;
    this._mutations = options.mutations;
    this._actions = options.actions;
    this._getters = options.getters;

    // 借鸡生蛋, 将state 好好保护起来
    this._vm = new Vue({
        data: {
            $$state: options.state
        }
    })

    const calculate = () => {
        const keys = Object.keys(this._getters)
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const value = this._getters[key](this.state)
            // 判读属性是否已存在
            if(this.getters[key]) {
                this.getters[key] = value;
            } else {
                Object.defineProperty(this.getters, key, 
                { 
                    value,
                    configurable: true,
                    writable: true 
                })
            }
        }
    }

    // 初始化 getters
    calculate();


    this.commit = function(type, val) {
        this._mutations[type](this.state, val);
        // 触发 getters 计算
        calculate();
    }




    this.dispatch = function(type, val) {
        return new Promise((reslove, reject) => {
            try {
                const res = this._actions[type](this, val)
                reslove(res)
            } catch (error) {
                reject(error)
            }
        })
    }


    // 返回的是一个store
    return this;
}


// Vue.use 静态方法会传递一个 Vue 构造函数进来
function install(_Vue) {
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}


export default { 
    JmStore,
    install
}
```

## 3. modules 的实现？？

---

## api 总结

Object 对象属性和方法: https://www.cnblogs.com/elfpower/p/12705219.html

### 1. Object.keys()

Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

### 2. Object.defineProperty(obj, prop, descriptor)

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

obj
要定义属性的对象。
prop
要定义或修改的属性的名称或 Symbol 。
descriptor
要定义或修改的属性描述符。

configurable
当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
默认为 false。

enumerable
当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
默认为 false。

value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
默认为 undefined。

writable
当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符 (en-US)改变。
默认为 false。

存取描述符还具有以下可选键值：

get
属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的 this 并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
默认为 undefined。

set
属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
默认为 undefined。

描述符默认值汇总

拥有布尔值的键 configurable、enumerable 和 writable 的默认值都是 false。
属性值和函数的键 value、get 和 set 字段的默认值为 undefined。
