import{_ as s,c as a,a as t,o as e}from"./app-Bx7wUcyz.js";const n={};function p(l,i){return e(),a("div",null,i[0]||(i[0]=[t(`<h2 id="函数柯里化" tabindex="-1"><a class="header-anchor" href="#函数柯里化"><span>函数柯里化</span></a></h2><p>函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。</p><p>函数柯里化的目的是参数复用。本质上是降低通用性，提高适用性。</p><p>实现：</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> curry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> curry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bind</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=s(n,[["render",p],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/article/dyfx0oo9/","title":"函数柯里化","lang":"zh-CN","frontmatter":{"title":"函数柯里化","createTime":"2022/04/24 07:06:15","author":"李嘉明","tags":["javascript"],"permalink":"/article/dyfx0oo9/","description":"函数柯里化 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。 函数柯里化的目的是参数复用。本质上是降低通用性，提高适用性。 实现：","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/dyfx0oo9/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"函数柯里化"}],["meta",{"property":"og:description","content":"函数柯里化 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。 函数柯里化的目的是参数复用。本质上是降低通用性，提高适用性。 实现："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-01T08:21:49.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2025-01-01T08:21:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数柯里化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-01T08:21:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.36,"words":107},"git":{"updatedTime":1735719709000},"autoDesc":true,"filePathRelative":"1.前端/6.JavaScript/基础篇/函数柯里化.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"e69382","sort":6,"name":"JavaScript"},{"id":"0fb168","sort":10005,"name":"基础篇"}],"bulletin":false}');export{r as comp,k as data};