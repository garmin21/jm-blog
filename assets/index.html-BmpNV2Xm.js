import{_ as s,c as e,a as n,o as t}from"./app-CQLjC5Lq.js";const a={};function d(r,i){return t(),e("div",null,i[0]||(i[0]=[n(`<h2 id="minimum-content-size-in-css-grid" tabindex="-1"><a class="header-anchor" href="#minimum-content-size-in-css-grid"><span>Minimum Content Size In CSS Grid</span></a></h2><p>网格布局的最小内容大小： CSS 网格的子项具有默认的最小内容大小，即 <code>auto</code> 。 这意味着，如果存在大于网格项的元素，它将溢出。</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">wrapper</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 250</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  display</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> grid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  grid-template-columns</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">fr</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  grid-gap</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><div class="grid-box-110"><div class="grid-box-110__main"> gridboxgridbox </div><div class="grid-box-110__aside"></div></div></div></div><p>由于 左侧栏中的内容长度过宽，大于剩余的内容空间，导致了 内容溢出。</p><p>为了解决这个问题，我们有三种不同的解决方案：</p><ol><li>在 网格项中使用 <code>min-width: 0</code></li><li>使用 <code>minmax()</code></li><li>在 网格项中使用 <code>overflow: hidden</code></li></ol><p>作为 防御性 CSS 策略，选择使用 哪种方案并不重要，只要能够解决问题即可。</p><p>在这里，我们选择 <code>min-width: 0</code></p><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><div class="grid-box-110"><div class="grid-box-110__main min"> gridboxgridbox </div><div class="grid-box-110__aside"></div></div></div></div>`,10)]))}const p=s(a,[["render",d],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/learn-css/minimum-content-size-in-grid/","title":"Minimum Content Size In CSS Grid","lang":"zh-CN","frontmatter":{"title":"Minimum Content Size In CSS Grid","author":"李嘉明","tags":["CSS"],"createTime":"2023/08/07 11:32:57","permalink":"/learn-css/minimum-content-size-in-grid/","description":"Minimum Content Size In CSS Grid 网格布局的最小内容大小： CSS 网格的子项具有默认的最小内容大小，即 auto 。 这意味着，如果存在大于网格项的元素，它将溢出。 gridboxgridbox 由于 左侧栏中的内容长度过宽，大于剩余的内容空间，导致了 内容溢出。 为了解决这个问题，我们有三种不同的解决方案： 在 网格...","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/learn-css/minimum-content-size-in-grid/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"Minimum Content Size In CSS Grid"}],["meta",{"property":"og:description","content":"Minimum Content Size In CSS Grid 网格布局的最小内容大小： CSS 网格的子项具有默认的最小内容大小，即 auto 。 这意味着，如果存在大于网格项的元素，它将溢出。 gridboxgridbox 由于 左侧栏中的内容长度过宽，大于剩余的内容空间，导致了 内容溢出。 为了解决这个问题，我们有三种不同的解决方案： 在 网格..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-01T08:21:49.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:modified_time","content":"2025-01-01T08:21:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minimum Content Size In CSS Grid\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-01T08:21:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.12,"words":337},"git":{"updatedTime":1735719709000},"autoDesc":true,"filePathRelative":"1.前端/7.css/技巧篇/minimum-content-size-in-grid.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"7e9d4b","sort":7,"name":"css"},{"id":"3621b0","sort":10004,"name":"技巧篇"}],"bulletin":false}');export{p as comp,o as data};