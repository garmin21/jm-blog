![](/img/remote/1460000019056198)

前几天美化博客时发现滚动条在window下实在太难看，所以在基于vue的技术上寻找美化滚动条的方法。记得Element-ui源码中有名为 `el-scrollbar` 的滚动组件，虽然文档上没有提到，但使用的人还是不少。今天记录下源码的阅读心得。

在这之前
----

在看苦涩的代码前，先大概描述一下滚动条组件的用处和行为，方便理解代码逻辑。

因为操作系统和浏览器的不同，滚动条外观是不一样的。需要做风格统一时，就需要做自定义滚动条。当然也可以直接修改CSS3中的 `::-webkit-scrollbar` 相关属性来达到修改原生滚动条外观，但这个属性部分浏览器上没有能够完美兼容。

在一个固定高度的元素中，如内部内容超出了父级元素的固定高。为了让用户浏览其余的内容，通常都会设置父级元素`overflow-y: scroll` 出现滚动条。允许用户以滚动的形式来浏览剩下的内容。

而自定义滚动条，是先通过偏移视图元素，达到隐藏原生滚动条的效果。同时在视图元素的右侧和下方，增加用标签写出的模拟滚动条。监听模拟滚动条的事件（按下滑块或点击轨道），来动态更新视图窗口的`scrollTop`或`scrollLeft`值。同样的，也会监听视图窗口的事件（滚动事件或视图窗口的尺寸缩放事件），来同步更新自定义滚动条的状态（滑块所处的位置或滑块长度）。

滚动条其实是当前已浏览内容的一个直观展示，在固定元素中，如果`scrollTop`发生改变往下滚动。滚动条中的滑块也会向下移动。此时能够通过滚动条来得知内容的已滚动程度和剩余程度。

我们将页面想象成一个很长的画布，而我们能看到的是一个移动的窗口。当页面往下滚动时，窗口在画布中也就往下移动，来查看被遮挡的内容。同样的，滚动块里的滑块也往下移动同样比例的距离。所以滚动条就是一个等比例的缩小模型。

也就是说，固定元素的高度`clientHeight` 除以 固定元素包括溢出的总高度`scrollHeight`。同等于 滑块的高度 除以 滚动条的高度。他们的比例是一样的。

![未滚动前的滚动条](/img/remote/1460000019056199 "未滚动前的滚动条")  
![滚动后的滚动条](/img/remote/1460000019056200 "滚动后的滚动条")

在大概了解滚动条的工作内容和计算公式后，看看源码中是如何处理他们之间的计算关系的。

### 文件

scrollbar组件在 `package/scrollbar/index.js` 中被导出，其中 `package/scrollbar/src` 是代码的核心部分，入口文件是 `main.js`。

### 结构

<el-scrollbar\>
  <div style\="height: 300px;"\>
    <div style\="height: 600px;"\></div\>
  </div\>
</el-scrollbar\>

使用自定义标签 `el-scrollbar` 裹住使用的区域，**scrollbar** 组件会生成  
**view** 和 **wrap** 两个父级元素包裹插槽中的内容，还有两种类型的自定义滚动条 **horizontal** 和 **vertical**。

![生成后的结构](/img/remote/1460000019056201 "生成后的结构")

### main.js

main.js默认导出一个对象，接收一系列配置。

name: 'ElScrollbar',

components: { 
  //  滚动条组件，拥有水平与垂直两种形态
  Bar 
},

props: {
  native: Boolean,    //  是否使用原生滚动条，即不附加自定义滚动条
  wrapStyle: {},      //  wrap的内联样式
  wrapClass: {},      //  wrap的样式名
  viewClass: {},      //  view的样式名
  viewStyle: {},      //  view的内联样式
  noresize: Boolean,  //  当container尺寸发生变化时，自动更新滚动条组件的状态
  tag: {              //  组件最外层的标签属性，默认为 div
    type: String,
    default: 'div'
  }
},

data() {
  return {
    sizeWidth: '0',   //  水平滚动条的宽度
    sizeHeight: '0',  //  垂直滚动条的高度
    moveX: 0,         //  垂直滚动条的移动比例
    moveY: 0          //  水平滚动条的移动比例
  };
},

组件在render函数中生成结构。

**tips：如果在.vue文件中同时存在 `template` 和 `render` 函数，组件实例会先取 `template` 模板来渲染组件模板，而不采用 `render`函数**

render函数一开始会通过 **scrollbarWidth** 方法来计算当前浏览器的滚动条宽度。

render(h) {
    //  获取浏览器的滚动条宽度
    let gutter = scrollbarWidth();
    //  wrap内联样式
    let style = this.wrapStyle;
    
    ...

**scrollbarWidth** 方法在 **scrollbar-width.js** 中被默认导出。

import Vue from 'vue';

//  闭包变量，用于记录滚动条宽度
let scrollBarWidth;

export default function() {
  //  如果在服务端运行，返回 0
  if (Vue.prototype.$isServer) return 0;
  //  如存在滚动条宽度，直接返回
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  //  创建outer标签并隐藏
  const outer = document.createElement('div');
  outer.className = 'el-scrollbar\_\_wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  //  记录没有滚动内容的宽度
  const widthNoScroll = outer.offsetWidth;
  //  设置外层div滚动属性
  outer.style.overflow = 'scroll';
  //  创建inner标签，并追加到outer标签中
  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  //  此时outer已经可以滚动，记录下inner元素的宽度
  const widthWithScroll = inner.offsetWidth;
  //  销毁outer元素
  outer.parentNode.removeChild(outer);
  //  滚动条宽度 = 没有滚动条时的outer宽度 减去 有滚动条的outer中的inner宽度
  scrollBarWidth = widthNoScroll - widthWithScroll;
  //  返回滚动条宽度
  return scrollBarWidth;
};

获取滚动条方法会进行以下步骤

1.  创建outer容器，并记录outer容器的offsetwidth
2.  设置outer容器overflow: scroll，并新建inner容器，追加到outer容器下
3.  此时outer容器会带有滚动条，记录inner容器的offsetwitdh宽度
4.  计算滚动条宽度，并返回

![用于计算滚动条宽度的临时标签结构](/img/remote/1460000019056202 "用于计算滚动条宽度的临时标签结构")  
![outer宽](/img/remote/1460000019056203 "outer宽")  
![inner宽](/img/remote/1460000019056204 "inner宽")  
从而得出此时的浏览器滚动条宽度为 100 - 83 = 17 像素

如果存在滚动条宽度，会将wrap设置偏移，达到隐藏原生滚动条的效果。

//  如果存在滚动条宽度
if (gutter) {
  //  设置偏移宽度，隐藏原生滚动条
  const gutterWith = \`-${gutter}px\`;
  const gutterStyle = \`margin-bottom: ${gutterWith}; margin-right: ${gutterWith};\`;
  
  //  根据配置类型，生成样式
  /\*\*
   \* 如是对象数组属性 Array<Object> \[{"background": "red"}, {"color": "red"}\]
   \* 则会被转为对象  {background: "red", color: "red"}
   \*/
  if (Array.isArray(this.wrapStyle)) {
    style = toObject(this.wrapStyle);
    style.marginRight = style.marginBottom = gutterWith;
  } 
  //  如是字符串，直接拼接
  else if (typeof this.wrapStyle === "string") {
    style += gutterStyle;
  }
  //  否则直接赋值
  else {
    style = gutterStyle;
  }
}

接着生成view结构，设置配置的样式名和内联样式，插槽中的默认内容会放入view下，同时给view增加ref索引，用于后续的事件绑定。

//  生成view
const view = h(
  //  view的标签类型
  this.tag,
  //  view的属性
  {
    class: \["el-scrollbar\_\_view", this.viewClass\],
    style: this.viewStyle,
    ref: "resize"
  },
  //  接收的插槽内容
  this.$slots.default
);

接着生成wrap结构，设置配置的样式名和内联样式，同时监听滚动事件

//  生成wrap，并监听滚动事件
const wrap = (
  <div
    ref\="wrap"
    style\={style}
    onScroll\={this.handleScroll}
    class\={\[
      this.wrapClass,
      "el-scrollbar\_\_wrap",
      gutter ? "" : "el-scrollbar\_\_wrap--hidden-default"
    \]}
  >
    {\[view\]}
  </div\>
);

接着根据 native 配置，拼接组件的最终结构。

//  如果不使用原生滚动条，则添加自定义滚动条
if (!this.native) {
  /\*\*
   \* 使用自定义滚动条
   \* <div class="el-scrollbar\_\_wrap">
   \*  <div class="el-scrollbar\_\_view"></div>
   \* </div>
   \* <bar>
   \* <bar>
   \*/
  nodes = \[
    wrap,
    <Bar move\={this.moveX} size\={this.sizeWidth} />,
    <Bar vertical move\={this.moveY} size\={this.sizeHeight} />
  \];
} else {
  /\*\*
   \* 否则使用原生滚动条
   \* 
   \* <div class="el-scrollbar\_\_wrap"> wrap并无监听滚动事件
   \*  <div class="el-scrollbar\_\_view"></div>
   \* </div>
   \*/
  nodes = \[
    <div
      ref\="wrap"
      class\={\[this.wrapClass, "el-scrollbar\_\_wrap"\]}
      style\={style}
    >
      {\[view\]}
    </div\>
  \];
}

//  返回最终结构
return h("div", { class: "el-scrollbar" }, nodes);
//  render函数结束

在组件 **mounted** 和 **beforeDestroy** 时，根据配置进行事件监听。

mounted() {
  //  如使用原生滚动条，返回
  if (this.native) return;
  //  在下一更新循环结束执行更新方法
  this.$nextTick(this.update);
  //  根据配置进行监听内容窗口大小重置事件，执行更新方法
  !this.noresize && addResizeListener(this.$refs.resize, this.update);
},

beforeDestroy() {
  //  如使用原生滚动条，返回
  if (this.native) return;
  //  根据配置移除监听内容窗口大小重置事件的执行更新方法
  !this.noresize && removeResizeListener(this.$refs.resize, this.update);
}

**addResizeListener** 方法在 **resize-event.js** 中被导出，方法接收两个参数。监听的DOM节点和回调事件。

/\*\*
 \* 窗口缩放执行回调
 \*/
function resizeHandler(entries) {
  //  entry是ResizeObserver构造函数执行时传入的参
  for (let entry of entries) {
    //  取出之前声明的回调函数数组
    const listeners = entry.target.\_\_resizeListeners\_\_ || \[\];
    //  遍历执行回调
    if (listeners.length) {
      listeners.forEach(fn => {
        fn();
      });
    }
  }
}

/\*\*
 \* 添加尺寸改变时事件监听
 \* @param {HTMLDivElement} element 元素
 \* @param {Function} fn 回调
 \*/
const addResizeListener = function(element, fn) {
  if (!element.\_\_resizeListeners\_\_) {
    //  设置当前元素的事件回调数组
    element.\_\_resizeListeners\_\_ = \[\];
    //  实例化Resize观察者对象
    element.\_\_ro\_\_ = new ResizeObserver(resizeHandler);
    //  开始观察指定的目标元素，当元素尺寸改变时，会执行resizeHandler方法
    element.\_\_ro\_\_.observe(element);
    window.ro = element.\_\_ro\_\_;
  }
  //  往回调数组中添加本次监听事件
  element.\_\_resizeListeners\_\_.push(fn);
};

/\*\*
 \* 移除尺寸改变时事件监听
 \* @param {HTMLDivElement} element 元素
 \* @param {Function} fn 回调
 \*/
const removeResizeListener = function(element, fn) {
  if (!element || !element.\_\_resizeListeners\_\_) return;
  //  数组中移除
  element.\_\_resizeListeners\_\_.splice(
    element.\_\_resizeListeners\_\_.indexOf(fn),
    1
  );
  //  取消目标对象上所有对element的观察
  if (!element.\_\_resizeListeners\_\_.length) {
    element.\_\_ro\_\_.disconnect();
  }
};

这样，main.js的实例化过程就结束了。接着我们看wrap绑定的滚动回调**handleScroll**方法，和生命周期钩子中见到的**update**方法。

在wrap窗口滚动时，会执行**method**中的**handleScroll**方法，更新**data**中的**moveY**和**moveX**属性。  
**moveY**和**moveX**会作为配置属性传给**Bar**滚动条组件，实时更新**Bar**的 `translateY(moveY%)` 或 `translateX(moveX%)`作为滑块的滚动位置。

handleScroll() {
  const wrap = this.wrap;

  this.moveY = (wrap.scrollTop \* 100) / wrap.clientHeight;
  this.moveX = (wrap.scrollLeft \* 100) / wrap.clientWidth;
},

**moveY**和**modeX**的计算逻辑，一开始看着有点迷糊。  
但是调转一下计算顺序，就恍然大悟了。

handleScroll() {
  const wrap = this.wrap;

  this.moveY = (wrap.scrollTop / wrap.clientHeight) \* 100;
  this.moveX = (wrap.scrollLeft / wrap.clientWidth) \* 100;
},

这里是在求滚动高度与可见高度的比例。  
上面我们已经知道，固定元素的高度`clientHeight`除以 固定元素包括溢出的总高度`scrollHeight`。同等于 滑块的高度 除以 滚动条的高度。  
所以当`scrollTop`发生改变时，我们能够计算出比例关系来更新滑块的正确位置。

假设我们的wrap高度为300px，当前的滚动高 `scrollTop` 为0，滚动块的位置是贴紧顶部的，此时**Bar**组件的 `translateY`是 0%。  
**注意，图中右边的滚动条和左侧的视图内容，并不真正同高。仅仅是比例尺关系。**  
![当scrollTop为0时](/img/remote/1460000019056205 "当scrollTop为0时")

当向下滚动时，`scrollTop`刚好为300px（一个Wrap的高度），侧边的滚动块也应该往下移动刚好一个身位。也就是滚动块的自身的高度。  
![当scrollTop为300px时](/img/remote/1460000019056206?w=1075&h=604 "当scrollTop为300px时")

当wrap区域往下滚动刚好一整个wrap的高度时，侧边的滚动块也会往下移动一整个滚动块的长度。此时**Bar**组件的 `translateY`应该是 100%。

计算公式成立：`scrollTop`（300px）/ `scrollHeight`（300px）\* 100 = 100。

这里乘100是因为Bar组件中 `translateY` 是以百分比为单位设置属性。  
继续滚动到底部时，此时的`scrollTop`已经为550px，根据公式计算，550 / 300 \* 100 滚动块的位置为 translateY(183.333%)。约要偏移1.8个滚动块自身的长度，**Bar**才能反映出**wrap**中**container**的当前展示位置。  
![当scrollTop为550px时，滚动块已经到了底部](/img/remote/1460000019056207?w=1240&h=699 "当scrollTop为550px时，滚动块已经到了底部")  
**update** 方法负责更新 **Bar** 的滑块长度，在 **mounted** 生命周期钩子中，会根据 `noresize` 配置对view模板进行选择性监听窗口大小改变事件，当内容窗口大小发生改变时，会执行 **update** 方法。

update() {
  let heightPercentage, widthPercentage;
  const wrap = this.wrap;
  if (!wrap) return;

  heightPercentage = (wrap.clientHeight \* 100) / wrap.scrollHeight;
  widthPercentage = (wrap.clientWidth \* 100) / wrap.scrollWidth;

  this.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
  this.sizeWidth = widthPercentage < 100 ? widthPercentage + "%" : "";
}

**update**方法中，会计算出滚动块的百分比高度，然后赋值给**sizeHeight**或**sizeWidth**。更新Bar的滚动块宽度或高度。  
**heightPercentage**是由 可见区域高度 / 总滚动高度，计算出的占比。和滑块在滚动条轨道中的占比是一样的。  
![](/img/remote/1460000019056208)

this.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";

在计算**sizeHeight**时做了大于100判断，当尺寸改变后的内容大于滚动高度，说明就不需要滚动块了。  
至此，main.js 中的所有逻辑都已经过完了。简单总结一下 main.js 所做的事情。

1.  接收配置参数。
2.  根据配置生成wrap与view结构包裹使用的区域，根据配置添加自定义滚动条Bar。
3.  对wrap进行滚动事件监听，对view进行窗口内容改变事件监听。
4.  在滚动或窗口改变时，更新Bar组件的滑块位置或滑块长度。

然后来到Bar.js，在点击滑块和轨道时，如何处理视图窗口的更新。

### Bar.js

Bar组件接收三个属性**vertical**，**size**，**move**，并在计算属性中添加了当前滚动块类型的属性集合`bar`，与父组件的`wrap`索引。

export default {
    name: 'Bar',

    props: {
        //  是否垂直滚动条
        vertical: Boolean,
        //  size 对应的是 水平滚动条的 width 或 垂直滚动条的height
        size: String,
        //  move 用于 translateX 或 translateY 属性中
        move: Number
    },

    computed: {
        /\*\*
         \* 从BAR\_MAP中返回一个的新对象，垂直滚动条属性集合 或 水平滚动条属性集合
         \*/
        bar() {
            return BAR\_MAP\[this.vertical ? 'vertical' : 'horizontal'\];
        },
        //  父组件的wrap，用于鼠标拖动滑块后更新 wrap 的 scrollTop 值
        wrap() {
            return this.$parent.wrap;
        }
    },
    ...
}

`bar`会返回当前滚动条类型的滚动条属性集合，并在后续的操作中取对应的值作为更新。

const BAR\_MAP = {
    //  垂直滚动块的属性
    vertical: {
        offset: 'offsetHeight',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight',
        size: 'height',
        key: 'vertical',
        axis: 'Y',
        client: 'clientY',
        direction: 'top'
    },
    //  水平滚动块的属性
    horizontal: {
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        size: 'width',
        key: 'horizontal',
        axis: 'X',
        client: 'clientX',
        direction: 'left'
    }
};

在**render**函数中，会对轨道区域和滑块进行鼠标按下事件进行监听，并对滑块进行内联样式绑定，在 **size, move, bar** 等属性发生改变时，动态的改变滑块的位置或长度。

render(h) {
    //  size: 'width' || 'height'
    //  move: 滚动块的位置，单位为百分比
    //  bar: 垂直滚动条属性集合 或 水平滚动条属性集合
    const { size, move, bar } = this;

    return (
        <div
            class\={\['el-scrollbar\_\_bar', 'is-' + bar.key\]}
            //  滚动条区域监听 鼠标按下事件
            onMousedown\={this.clickTrackHandler} >
            <div
                ref\="thumb"
                class\="el-scrollbar\_\_thumb"
                //  滚动块监听 鼠标按下事件
                onMousedown\={this.clickThumbHandler}
                style\={renderThumbStyle({ size, move, bar })}>
            </div\>
        </div\>
    );
}

我们以垂直类型的Bar组件为例，首先看绑定在**轨道区域**的鼠标点击事件回调 **clickTrackHandler** 方法。  
在点击**轨道区域**时，滑块会快速定位到该位置，并且更新视图的`scrollTop`。这就是 **clickTrackHandler** 处理的事情。

//  对按下 滚动条区域 的某一个位置进行快速定位
clickTrackHandler(e) {
    /\*\*
     \* getBoundingClientRect() 方法返回元素的大小及其相对于浏览器页面的位置。
     \* this.bar.direction = "top"
     \* this.bar.client = "clientY"
     \* e.clientY 是事件触发时，鼠标指针相对于浏览器窗口顶部的距离。
     \*/
    //  偏移量            绝对值 （当前元素距离浏览器窗口的 顶部/左侧 距离     减去    当前点击的位置距离浏览器窗口的 顶部/左侧 距离）
    const offset = Math.abs(e.target.getBoundingClientRect()\[this.bar.direction\] - e\[this.bar.client\]);
    //  滑动块一半高度
    const thumbHalf = (this.$refs.thumb\[this.bar.offset\] / 2);
    //  计算点击后，根据 偏移量 计算在 滚动条区域的总高度 中的占比，也就是 滚动块 所处的位置
    const thumbPositionPercentage = ((offset - thumbHalf) \* 100 / this.$el\[this.bar.offset\]);
    //  设置外壳的 scrollHeight 或 scrollWidth 新值。达到滚动内容的效果
    this.wrap\[this.bar.scroll\] = (thumbPositionPercentage \* this.wrap\[this.bar.scrollSize\] / 100);
},

方法中比较多的公式计算，一时之间比较难理解。下图是各变量的图示，接着我们一个一个拆解。  
![变量图示](/img/remote/1460000019056209 "变量图示")  
在方法中，第一步会计算滑块的**偏移量（offset）**。代码中的偏移量计算公式是：  
**点击元素距离浏览器窗口顶部的距离** 减去 **鼠标点击位置距离浏览器窗口顶部的距离，再求结果的绝对值。**

**点击元素** 实则就是轨道区域，其实公式可以换成这样看，会更加容易理解。

**鼠标点击位置距离浏览器窗口顶部的距离** 减去 **滚动条区域距离浏览器窗口顶部的距离**

因为根据scrollBar组件的使用位置不同（有的包裹整个页面窗口，有的包裹一小块菜单区域），滚动条区域也不一定完全贴紧浏览器窗口的顶部。所以这边需要用 **鼠标点击位置距离浏览器窗口顶部的距离`e[this.bar.client]`** 将 **滚动条区域距离浏览器窗口顶部的距离`e.target.getBoundingClientRect()[this.bar.direction]`** 减去，才能得出准确的 **偏移量`offset`**。

/\*\*
 \* getBoundingClientRect() 方法返回元素的大小及其相对于浏览器页面的位置。
 \* this.bar.direction = "top"
 \* this.bar.client = "clientY"
 \* e.clientY 是事件触发时，鼠标指针相对于浏览器窗口顶部的距离。
 \*/

//  偏移量            绝对值 （当前元素距离浏览器窗口的 垂直/水平 坐标     减去    当前点击的位置距离浏览器窗口的 垂直/水平 坐标）
const offset = Math.abs(e.target.getBoundingClientRect()\[this.bar.direction\] - e\[this.bar.client\]);

![offset的计算](/img/remote/1460000019056210 "offset的计算")  
接下来计算的是滑动块一半的高度，用于后续逻辑处理。

//  滑动块一半高度
const thumbHalf = (this.$refs.thumb\[this.bar.offset\] / 2);

![滚动块一半高度计算](/img/remote/1460000019056211?w=292&h=380 "滚动块一半高度计算")  
根据浏览器滚动条操作行为，一般我们点击轨道某个点时，滑块的中心总会在我们的落点位置。  
在用偏移量 `offset` 减去滚动块的一半高度 `thumbHalf` 后得出 **滑块总移动的长度**。再用 **滑块总移动的长度** 除 **滚动区域的总高度**，得出 **滚动比例`thumbPositionPercentage`**。  
得出 **滚动比例** 后，因为滚动条和视图是一个缩放的比例尺关系。此时用 **滚动比例** 乘 **wrap的 scrollHeight** 得出滚动距离，再对 **wrap** 的 **scrollTop** 进行赋值，视图便滚动到需要更新展示的内容中。

//  计算点击后，根据 偏移量 计算在 滚动条区域的总高度 中的占比，也就是 滚动块 所处的位置
const thumbPositionPercentage = ((offset - thumbHalf) \* 100 / this.$el\[this.bar.offset\]);

//  设置外壳的 scrollTop 或 scrollLeft 新值。达到滚动内容的效果
this.wrap\[this.bar.scroll\] = (thumbPositionPercentage \* this.wrap\[this.bar.scrollSize\] / 100);

![计算wrap需要滚动的距离](/img/remote/1460000019056212 "计算wrap需要滚动的距离")

接下来是滑块监听的鼠标按下事件，**clickThumbHandler**。

**clickThumbHandler** 方法会在鼠标按下滑块时，监听鼠标移动事件和鼠标按键释放事件，更新滑块位置的同时，也更新视图窗口的滚动位置。

//  按下滑动块
clickThumbHandler(e) {
    /\*\*
     \* 防止右键单击滑动块
     \* e.ctrlKey: 检测事件发生时Ctrl键是否被按住了
     \* e.button： 指示当事件被触发时哪个鼠标按键被点击 0，鼠标左键；1，鼠标中键；2，鼠标右键
     \*/
    if (e.ctrlKey || e.button === 2) {
        return;
    }
    //  开始记录拖拽
    this.startDrag(e);
    //  记录点击滑块时的位置距滚动块底部的距离
    this\[this.bar.axis\] = (
        //  滑块的高度
        e.currentTarget\[this.bar.offset\] - 
        //  点击滑块距离顶部的位置 减去 滑块元素距离顶部的位置
        (e\[this.bar.client\] - e.currentTarget.getBoundingClientRect()\[this.bar.direction\])
    );
},

开始先判断是否鼠标右键触发的事件，如真返回。接着执行 **startDrag** 方法。  
最后会计算点击滑块时的位置距滚动块底部的距离。然后赋值给`this[this.bar.axis]`，因为当前滚动条类型是垂直滚动条，所以`this.bar.axis`从计算属性中获取为字符串 `Y`，`this['Y']`会用于后续的计算。  
`this['Y']` 的计算公式为：滑块的高度 减去 （点击滑块的位置距离页面窗口顶部的距离 `clientY` 减去 滑块元素距离页面窗口顶部的距离`Rect.top`）

![变量图示](/img/remote/1460000019056213 "变量图示")

`this.bar.axis` 从计算属性中获取，返回的是字符串，X 或 Y。但在**Bar**组件的 **data** 中，并没有对 `this['X']` 或 `this['Y']` 这两个属性进行声明。  
原因是因为**Bar**组件有两种类型，垂直或水平。所以作者没有选择一开始就声明，而是通过后续的操作再动态挂上 **X** 或 **Y** 属性  
需要注意的是，这样动态添加的属性，并不是一个响应式的属性。即未被vue进行`getter/setter`重写，在数据发生改变后视图是不会同步更新的。  
但是这里仅仅用于数据层面上的使用，并不在视图上使用。问题不大。  
具体可以查阅文档, [深入响应式原理](#)  
)

在**startDrag**方法中，会记录按下状态，并监听鼠标移动和鼠标按钮松开事件。

//  开始拖拽
startDrag(e) {
    //  停止后续的相同事件函数执行
    e.stopImmediatePropagation();
    //  记录按下状态
    this.cursorDown = true;
    //  监听鼠标移动事件
    on(document, 'mousemove', this.mouseMoveDocumentHandler);
    //  监听鼠标按键松开事件
    on(document, 'mouseup', this.mouseUpDocumentHandler);
    //  拖拽滚动块时，此时禁止鼠标长按划过文本选中。
    document.onselectstart = () => false;
},

**on**方法和**off**方法在 `utils/dom` 中被导出，在导出时会对环境进行兼容处理，导出对应的事件监听处理函数。

/\* istanbul ignore next \*/
export const on = (function() {
  //  查询实例是否在服务端运行，与是否支持 addEventListener，返回对应处理监听函数
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        //  适用于现代浏览器的监听事件 addEventListener
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        //  用于 ie 部分版本浏览器的监听事件 attachEvent
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

/\* istanbul ignore next \*/
export const off = (function() {
  //  查询实例是否在服务端运行，与是否支持 removeEventListener，返回对应处理监听函数
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        //  适用于现代浏览器的移除事件监听 removeEventListener
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        //  用于 ie 部分版本浏览器的移除事件监听 detachEvent
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

在鼠标移动时，会执行**mouseMoveDocumentHandler**事件。  
方法进入会判断`cursorDown`和`this.['Y']`是否存在，如果为假。说明方法并不是正常操作触发，结束返回。  
在鼠标的不断移动中，计算按住滑块移动时的位置距离轨道顶部的实际距离`offset`，同时用之前记录下来的`this['Y']`计算出按下滑块时距离滑块顶部的距离`thumbClickPosition` 。  
此时`offset`减去`thumbClickPosition` ，就是滑块在轨道中实际移动的距离。再用此值除以轨道长度。便是滚动比例`thumbPositionPercentage` 。  
最后用`thumbPositionPercentage` 乘视图窗口的滚动高度，便是视图窗口需要更新滚动的距离。

//  按下滚动条，并且鼠标移动时
mouseMoveDocumentHandler(e) {
   //  如果按下状态为假，返回
   if (this.cursorDown === false) return;
   //  点击位置时距滚动块底部的距离
   const prevPage = this\[this.bar.axis\];
   
   if (!prevPage) return;

   //              （滑块距离页面顶部的距离                            减  鼠标移动时距离顶部的距离） \* -1
   const offset = ((this.$el.getBoundingClientRect()\[this.bar.direction\] - e\[this.bar.client\]) \* -1);
   
   //  按下滑块位置距离滑块顶部的距离
   const thumbClickPosition = (this.$refs.thumb\[this.bar.offset\] - prevPage);
   //  滑动距离在滚动轨道长度的占比
   const thumbPositionPercentage = ((offset - thumbClickPosition) \* 100 / this.$el\[this.bar.offset\]);
   //  根据比例，更新视图窗口的滚动距离
   this.wrap\[this.bar.scroll\] = (thumbPositionPercentage \* this.wrap\[this.bar.scrollSize\] / 100);
},

![mouseMoveDocumentHandler中的变量图示](/img/remote/1460000019056214 "mouseMoveDocumentHandler中的变量图示")  
在鼠标松开时，重置各记录的状态，并取消监听的鼠标移动事件。

//  按下滚动条，并且鼠标松开
mouseUpDocumentHandler(e) {
    //  重置按下状态
    this.cursorDown = false;
    //  重置当前点击在滚动块的位置
    this\[this.bar.axis\] = 0;
    //  移除监听鼠标移动事件
    off(document, 'mousemove', this.mouseMoveDocumentHandler);
    //  拖拽结束，此时允许鼠标长按划过文本选中。
    document.onselectstart = null;
}

源码到这里已经全部解读结束，因个人水平有限，难免会有不准确或者存在歧义的地方，希望能够不吝赐教，共同交流进步。  
祝你有个愉快的劳动节假期。:)

Have a nice day.

参考资料
----

1.  [ResizeObserver](https://link.segmentfault.com/?enc=R4VRx9c0hvHr%2F5nhGRTMaQ%3D%3D.DKzF4EKTl0K6mCFDYAEt2%2FwMIYp7Uf3IcKzXq3hWoFsBoCBpCMkOAyCgdUT8zOaa4tyA7aSaP0Fqn4ny4Dx3TA%3D%3D)
2.  [深入响应式原理](#)

)

本文转自 <https://segmentfault.com/a/1190000019054618>，如有侵权，请联系删除。