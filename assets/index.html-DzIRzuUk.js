import{_ as t,c as o,a as c,o as i}from"./app-Bz0t8sQz.js";const d={};function r(a,e){return i(),o("div",null,e[0]||(e[0]=[c('<div class="hint-container tip"><p class="hint-container-title">提问</p><p>vue2 和 vue3 的区别</p></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h2><ul><li><p>响应式原理</p><p>vue2 通过 <code>Object.defineProperties()</code> 实现数据劫持，结合 发布/订阅模式，将数据变更通知给 Watcher，实现响应式。 vue3 通过 <code>Proxy</code> 做数据劫持，实现响应式对象，同时也保留了 <code>getter/setter</code> 实现 <code>ref()</code>。</p></li><li><p>使用 工厂函数 <code>createApp()</code> 代替 构造函数 <code>new Vue()</code> 创建应用实例</p></li><li><p>使用 <code>app.config.globalProperties</code> 代替 <code>Vue.prototype</code> 用于添加全局属性</p></li><li><p>移除了 <code>Vue.extend</code></p></li><li><p><code>v-model</code> 使用 <code>modelValue/emit</code> 代替了 <code>value/input</code> 的实现</p></li><li><p><code>key</code> 现在不需要添加在 <code>v-if</code> <code>v-else</code> <code>v-else-if</code> 上，Vue 会自己生成，且可以添加在 <code>&lt;template&gt;</code> 上。</p></li><li><p><code>v-if</code> 的优先级总是高于<code>v-for</code> （vue2 是反过来的）</p></li><li><p>移除了 <code>filter</code> 过滤器</p></li><li><p>自定义指令使用了全新的生命周期</p></li><li><p>移除了 <code>$children</code></p></li><li><p>将 <code>$listener</code> 合并到了 <code>$attrs</code> 中, <code>$attrs</code> 也包含了 <code>class</code> 和 <code>style</code></p></li><li><p>使用 <code>beforeUnmount</code> 和 <code>unmounted</code> 代替 <code>beforeDestroy</code> 和 <code>destroyed</code></p></li><li><p>新增了 <code>setup()</code> 以及 组合式 API</p></li><li><p>新增内置组件 <code>&lt;Teleport&gt;</code> 和 <code>&lt;Suspense&gt;</code></p></li></ul>',3)]))}const n=t(d,[["render",r],["__file","index.html.vue"]]),l=JSON.parse(`{"path":"/interview-question/2o905emj/","title":"vue2和vue3的区别","lang":"zh-CN","frontmatter":{"title":"vue2和vue3的区别","createTime":"2022/04/24 02:44:44","author":"李嘉明","permalink":"/interview-question/2o905emj/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/interview-question/2o905emj/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"vue2和vue3的区别"}],["meta",{"property":"og:description","content":"提问 vue2 和 vue3 的区别 区别 响应式原理 vue2 通过 Object.defineProperties() 实现数据劫持，结合 发布/订阅模式，将数据变更通知给 Watcher，实现响应式。 vue3 通过 Proxy 做数据劫持，实现响应式对象，同时也保留了 getter/setter 实现 ref()。 使用 工厂函数 create..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue2和vue3的区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"提问 vue2 和 vue3 的区别 区别 响应式原理 vue2 通过 Object.defineProperties() 实现数据劫持，结合 发布/订阅模式，将数据变更通知给 Watcher，实现响应式。 vue3 通过 Proxy 做数据劫持，实现响应式对象，同时也保留了 getter/setter 实现 ref()。 使用 工厂函数 create..."},"headers":[{"level":2,"title":"区别","slug":"区别","link":"#区别","children":[]}],"readingTime":{"minutes":0.88,"words":265},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/面试题/Vue/vue2和vue3的区别.md"}`);export{n as comp,l as data};