import{_ as d,c as e,a as i,o as t}from"./app-Bz0t8sQz.js";const s={};function b(n,a){return t(),e("div",null,a[0]||(a[0]=[i(`<h2 id="using-space-between" tabindex="-1" data-v-d4553fbb><a class="header-anchor" href="#using-space-between" data-v-d4553fbb><span data-v-d4553fbb>Using Space Between</span></a></h2><p data-v-d4553fbb>在 Flex 容器中， 我们可以使用 <code data-v-d4553fbb>space-between</code> 来定义项目之间的间距。 当子项的数量 符合我们的 布局预期时，在 UI 效果上来看还不错。 但是，如果 项目的数量过多或过少时，布局就会看起来很糟糕。</p><p data-v-d4553fbb>请看下面示例：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css" data-v-d4553fbb><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" data-v-d4553fbb><code data-v-d4553fbb><span class="line" data-v-d4553fbb><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;" data-v-d4553fbb>wrapper</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb> {</span></span>
<span class="line" data-v-d4553fbb><span style="--shiki-light:#998418;--shiki-dark:#B8A965;" data-v-d4553fbb>  display</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;" data-v-d4553fbb> flex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>;</span></span>
<span class="line" data-v-d4553fbb><span style="--shiki-light:#998418;--shiki-dark:#B8A965;" data-v-d4553fbb>  justify-content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;" data-v-d4553fbb> space-between</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>;</span></span>
<span class="line" data-v-d4553fbb><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" data-v-d4553fbb><div class="line-number" data-v-d4553fbb></div><div class="line-number" data-v-d4553fbb></div><div class="line-number" data-v-d4553fbb></div><div class="line-number" data-v-d4553fbb></div></div></div><div class="demo-wrapper" data-v-d4553fbb><div class="demo-head" data-v-d4553fbb><div class="demo-ctrl" data-v-d4553fbb><i data-v-d4553fbb></i><i data-v-d4553fbb></i><i data-v-d4553fbb></i></div></div><div class="demo-container" data-v-d4553fbb><p align="center" data-v-d4553fbb>justify-content: space-between</p><p data-v-d4553fbb>项目为 4 个时，看起来还不错。</p><div class="flex-box" data-v-d4553fbb><div data-v-d4553fbb></div><div data-v-d4553fbb></div><div data-v-d4553fbb></div><div data-v-d4553fbb></div></div><p data-v-d4553fbb>项目为 3 个时，间隔就过大了。</p><div class="flex-box" data-v-d4553fbb><div data-v-d4553fbb></div><div data-v-d4553fbb></div><div data-v-d4553fbb></div></div></div></div><p data-v-d4553fbb>对此，我们有不同的解决方案：</p><ul data-v-d4553fbb><li data-v-d4553fbb>使用 <code data-v-d4553fbb>margin</code> 设置外边距作为间隔</li><li data-v-d4553fbb>使用 flexbox <code data-v-d4553fbb>gap</code> 设置间隔</li><li data-v-d4553fbb>在父元素上使用 <code data-v-d4553fbb>padding</code> 作为 子元素 间隔</li><li data-v-d4553fbb>添加空白元素作为间隔</li></ul><p data-v-d4553fbb>比如，我们使用 <code data-v-d4553fbb>gap</code> 设置 间隔</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css" data-v-d4553fbb><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" data-v-d4553fbb><code data-v-d4553fbb><span class="line" data-v-d4553fbb><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;" data-v-d4553fbb>wrapper</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb> {</span></span>
<span class="line" data-v-d4553fbb><span style="--shiki-light:#998418;--shiki-dark:#B8A965;" data-v-d4553fbb>  display</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;" data-v-d4553fbb> flex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>;</span></span>
<span class="line" data-v-d4553fbb><span style="--shiki-light:#998418;--shiki-dark:#B8A965;" data-v-d4553fbb>  gap</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;" data-v-d4553fbb> 1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;" data-v-d4553fbb>rem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>;</span></span>
<span class="line" data-v-d4553fbb><span style="--shiki-light:#999999;--shiki-dark:#666666;" data-v-d4553fbb>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" data-v-d4553fbb><div class="line-number" data-v-d4553fbb></div><div class="line-number" data-v-d4553fbb></div><div class="line-number" data-v-d4553fbb></div><div class="line-number" data-v-d4553fbb></div></div></div><div class="demo-wrapper" data-v-d4553fbb><div class="demo-head" data-v-d4553fbb><div class="demo-ctrl" data-v-d4553fbb><i data-v-d4553fbb></i><i data-v-d4553fbb></i><i data-v-d4553fbb></i></div></div><div class="demo-container" data-v-d4553fbb><p align="center" data-v-d4553fbb>gap: 1rem</p><div class="flex-box gap" data-v-d4553fbb><div data-v-d4553fbb></div><div data-v-d4553fbb></div><div data-v-d4553fbb></div><div data-v-d4553fbb></div></div><div class="flex-box gap" data-v-d4553fbb><div data-v-d4553fbb></div><div data-v-d4553fbb></div><div data-v-d4553fbb></div></div></div></div>`,10)]))}const p=d(s,[["render",b],["__scopeId","data-v-d4553fbb"],["__file","index.html.vue"]]),l=JSON.parse(`{"path":"/defensive-css/using-space-between/","title":"Using Space Between","lang":"zh-CN","frontmatter":{"title":"Using Space Between","author":"李嘉明","createTime":"2023/08/09 13:25:55","permalink":"/defensive-css/using-space-between/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/defensive-css/using-space-between/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"Using Space Between"}],["meta",{"property":"og:description","content":"Using Space Between 在 Flex 容器中， 我们可以使用 space-between 来定义项目之间的间距。 当子项的数量 符合我们的 布局预期时，在 UI 效果上来看还不错。 但是，如果 项目的数量过多或过少时，布局就会看起来很糟糕。 请看下面示例： justify-content: space-between 项目为 4 个时，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Using Space Between\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"Using Space Between 在 Flex 容器中， 我们可以使用 space-between 来定义项目之间的间距。 当子项的数量 符合我们的 布局预期时，在 UI 效果上来看还不错。 但是，如果 项目的数量过多或过少时，布局就会看起来很糟糕。 请看下面示例： justify-content: space-between 项目为 4 个时，..."},"headers":[{"level":2,"title":"Using Space Between","slug":"using-space-between","link":"#using-space-between","children":[]}],"readingTime":{"minutes":1.13,"words":338},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/CSS学习简记/技巧篇/using-space-between.md"}`);export{p as comp,l as data};