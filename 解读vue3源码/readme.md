### 第一节课 h 函数 的使用

```js
// 01.render

const Stack = {
  props: {
    size: Number,
  },
  render() {
    const slot = this.$slots.default ? this.$slots.default() : [];

    return h(
      "div",
      { class: "stack" },
      slot.map((child) => {
        return h("div", { class: `mr-${this.$props.size}` }, [child]);
      })
    );
  },
};
```

### 第二节课 虚拟 dome 的创建

```js
// h 函数，返回指定格式的 虚拟dom js 对象
function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}

// 将虚拟dom ===> 真实dom ，挂载到根节点中
function mount(vnode, container) {
  const el = (vnode.el = document.createElement(vdom.tag));
  // props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      el.setAttribute(key, value);
    }
  }
  // children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((child) => {
        mount(child, el);
      });
    }
  }
  container.appendChild(el);
}

const vdom = h("div", { class: "red" }, [
  h("span", { class: "sss" }, "hello!"),
]);

const vdom2 = h("div", { class: "green" }, [
  h("span", { class: "sss" }, "💪💪💪!"),
  h("span", { class: "green" }, "wow 太棒了"),
]);

// 将虚拟dom，最终生成真实dom，挂载到 app 容器中
mount(vdom, document.getElementById("app"));

// patch 算法，保证最小操作 dom API 的方法，接收 老的虚拟dom n1 , 新的虚拟dom n2
function patch(n1, n2) {
  if (n1.tag === n2.tag) {
    const el = (n2.el = n1.el);
    // props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 元素的节点属性存在，只是 值有所变更
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (oldValue !== newValue) {
        // 替换为最新的值
        el.setAttribute(key, newValue);
      }
    }
    // 新的元素节点，某个属性已经不存在，需要删除
    for (const key in oldProps) {
      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }
    // children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];
    // 假设子节点都是文本,
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        // 如何 newChildren 是其他的内容，将最新的内容，直接覆盖整个的内容
        el.textContent = newChildren;
      }
    } else {
      // 假设 newChildren 不是一个string，oldChildren 是一个string的话
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChildren.forEach((child) => {
          mount(child, el);
        });
      } else {
        // 假如 newChildren,oldChildren 都不是文本，都是 array 的情况
        // 更新公共的部分
        const commonLength = Math.min(oldChildren.length, newChildren.length);
        for (let key = 0; key < commonLength; key++) {
          patch(oldChildren[key], newChildren[key]);
        }
        // 假设 newChildren 比 oldChildren 长, 把多出来的进行一次挂载
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((child) => {
            mount(child, el);
          });
        } else if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((child) => {
            el.removeChild(child);
          });
        }
      }
    }
  }
}

patch(vdom, vdom2);
```

### 第三节课 响应式 的基本工作原理 deps

```js
let activeEffect;

class Dep {
  // 依赖对象
  constructor(value) {
    this.subscribers = new Set();
    this._value = value;
  }

  get value() {
    // 搜集依赖
    this.depend();
    return this._value;
  }

  set value(newValue) {
    // 通知依赖更新函数执行
    this._value = newValue;
    this.notify();
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach((effect) => effect());
  }
}

function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

const dep = new Dep("hello!");

watchEffect(() => {
  console.log(dep.value);
}); // effect run

dep.value = "change";
```

### 第四节课 使用代理 proxy 重写 响应式系统

```js
let activeEffect;

class Dep {
  subscribers = new Set();

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach((effect) => effect());
  }
}

function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

const targetMap = new WeakMap();

function getDep(target, key) {
  let depMap = targetMap.get(target);
  if (!depMap) {
    depMap = new Map();
    targetMap.set(target, depMap);
  }
  let dep = depMap.get(key);
  if (!dep) {
    dep = new Dep();
    depMap.set(key, dep);
  }
  return dep;
}

const reactiveHandles = {
  get(target, key, receiver) {
    // 取值触发陷阱
    let dep = getDep(target, key);
    dep.depend();
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    // 设置值触发陷阱
    let dep = getDep(target, key);
    const result = Reflect.set(target, key, value, receiver);
    dep.notify();
    return result;
  },
  // ...
  has() {}, // count in state 触发陷阱
  ownKeys() {}, // for in state 触发陷阱
};

// 代理数组，往数组里添加一项，会导致arr.length 加一，继而隐式的触发 get set 陷阱

function reactive(raw) {
  return new Proxy(raw, reactiveHandles);
}

// reactive
const state = reactive({
  count: 0,
}); // 0

watchEffect(() => {
  console.log(state.count);
});

state.count++; // 1
```

### 第五课 根据目前实现的 API 实现一个最小版本的 vue3

```js
// render
function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}

function mount(vnode, container) {
  const el = (vnode.el = document.createElement(vnode.tag));
  // props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (key.startsWith("on")) {
        // 处理事件处理程序
        el.addEventListener(key.slice(2).toLowerCase(), value, false);
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  // children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((child) => {
        mount(child, el);
      });
    }
  }
  container.appendChild(el);
}

function patch(n1, n2) {
  if (n1.tag === n2.tag) {
    const el = (n2.el = n1.el);
    // props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 元素的节点属性存在，只是 值有所变更
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (oldValue !== newValue) {
        // 替换为最新的值
        el.setAttribute(key, newValue);
      }
    }
    // 新的元素节点，某个属性已经不存在，需要删除
    for (const key in oldProps) {
      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }
    // children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];
    // 假设子节点都是文本,
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        // 如何 newChildren 是其他的内容，将最新的内容，直接覆盖整个的内容
        el.textContent = newChildren;
      }
    } else {
      // 假设 newChildren 不是一个string，oldChildren 是一个string的话
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChildren.forEach((child) => {
          mount(child, el);
        });
      } else {
        // 假如 newChildren,oldChildren 都不是文本，都是 array 的情况
        // 更新公共的部分
        const commonLength = Math.min(oldChildren.length, newChildren.length);
        for (let key = 0; key < commonLength; key++) {
          patch(oldChildren[key], newChildren[key]);
        }
        // 假设 newChildren 比 oldChildren 长, 把多出来的进行一次挂载
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((child) => {
            mount(child, el);
          });
        } else if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((child) => {
            el.removeChild(child);
          });
        }
      }
    }
  }
}

// reactive
let activeEffect;

class Dep {
  subscribers = new Set();

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach((effect) => effect());
  }
}

function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

const targetMap = new WeakMap();

function getDep(target, key) {
  let depMap = targetMap.get(target);
  if (!depMap) {
    depMap = new Map();
    targetMap.set(target, depMap);
  }
  let dep = depMap.get(key);
  if (!dep) {
    dep = new Dep();
    depMap.set(key, dep);
  }
  return dep;
}

const reactiveHandles = {
  get(target, key, receiver) {
    // 取值触发陷阱
    let dep = getDep(target, key);
    dep.depend();
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    // 设置值触发陷阱
    let dep = getDep(target, key);
    const result = Reflect.set(target, key, value, receiver);
    dep.notify();
    return result;
  },
  // ...
  has() {}, // count in state 触发陷阱
  ownKeys() {}, // for in state 触发陷阱
};

function reactive(raw) {
  return new Proxy(raw, reactiveHandles);
}

const App = {
  data: reactive({ count: 0 }),
  render() {
    return h("div", { class: "red" }, [
      h("div", null, `${this.data.count}`),
      h(
        "button",
        {
          onClick: function handel() {
            App.data.count++;
          },
        },
        "Click"
      ),
    ]);
  },
};

// createApp 创建应用 将 虚拟dom 进行挂载 ，每次修改值的更新后，都会触发 watchEffect 更新 ，执行 patch 比对后，将更新最新的视图
function createApp(component, container) {
  let isMounted = false; // 记录是否已挂载过
  let prevVdom;
  watchEffect(() => {
    if (!isMounted) {
      prevVdom = component.render();
      mount(prevVdom, container);
      isMounted = true;
    } else {
      newVdom = component.render();
      patch(prevVdom, newVdom);
      prevVdom = newVdom;
    }
  });
}

createApp(App, document.getElementById("app"));
```
