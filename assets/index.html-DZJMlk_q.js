import{_ as h,c as t,a as k,d as e,w as n,r as d,o as r,b as i,e as s}from"./app-C_XscStE.js";const p={};function g(y,a){const l=d("CodeDemo");return r(),t("div",null,[a[1]||(a[1]=k(`<p>在业务开发中发现了一个陌生的方法：<code>scrollIntoView</code> 。从字面意思来看，这个方法应该是让 dom 元素滚动到视口，于是查阅了一下<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView" target="_blank" rel="noopener noreferrer">MDN</a>。</p><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>Element 方法 <code>scrollIntoView</code>：滚动父级容器，使得元素出现在视口。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> alignToTop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> scrollIntoViewOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  behavior</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">auto</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">smooth</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  block</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">start</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">end</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">nearest</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  inline</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">start</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">end</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">nearest</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Element</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  scrollIntoView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">alignToTop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">scrollIntoViewOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> void</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>scrollIntoViewOptions</strong>，一个包含下列属性的对象。</p><ul><li><p><code>behavior</code>定义过渡动画，默认值为<code>auto</code>。</p><ul><li><code>auto</code>，表示没有平滑的滚动动画效果。</li><li><code>smooth</code>，表示有平滑的滚动动画效果。</li></ul></li><li><p><code>block</code>定义垂直方向的对齐，默认值为<code>start</code>。</p><ul><li><p><code>start</code>，表示<code>顶端</code>对齐。</p></li><li><p><code>center</code>，表示<code>中间</code>对齐。</p></li><li><p><code>end</code>，表示<code>底端</code>对齐。</p></li><li><p><code>nearest</code>：</p><ul><li>如果元素完全在视口内，则垂直方向不发生滚动。</li><li>如果元素未能完全在视口内，则根据最短滚动距离原则，垂直方向滚动父级容器，使元素完全在视口内。</li></ul></li></ul></li><li><p><code>inline</code>定义水平方向的对齐，默认值为<code>nearest</code>。</p><ul><li><p><code>start</code>，表示<code>左端</code>对齐。</p></li><li><p><code>center</code>，表示<code>中间</code>对齐。</p></li><li><p><code>end</code>，表示<code>右端</code>对齐。</p></li><li><p><code>nearest</code>：</p><ul><li>如果元素完全在视口内，则水平方向不发生滚动。</li><li>如果元素未能完全在视口内，则根据最短滚动距离原则，水平方向滚动父级容器，使元素完全在视口内。</li></ul></li></ul></li></ul><p><strong>alignToTop</strong></p><ul><li>当传入参数<code>true</code>时，相当于<code>{behavior: &#39;auto&#39;, block: &#39;start&#39;, inline: &#39;nearest&#39;}</code></li><li>当传入参数<code>false</code>时，相当于<code>{behavior: &#39;auto&#39;, block: &#39;end&#39;, inline: &#39;nearest&#39;}</code></li><li>当未传入参数时，默认值为：<code>{behavior: &#39;auto&#39;, block: &#39;start&#39;, inline: &#39;nearest&#39;}</code></li></ul><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果"><span>效果</span></a></h2>`,10)),e(l,{id:"code-demo-136",type:"normal",code:"eJyNUk1v00AQ/SsrC8m2VLtNKBeTVOLQAxI3ECcfut7dxEs2u2U9doLSSEiICnHhDL0gcaBCFeqBQxF/p6b8DMbeuDStRHvZj5k3b9/svIXHisJLvNiUIGyfLFJNyExyyBPS29ranz9sAqYSdqTMLCG55FxoDC5TnequKmZGA5Va2DWC/opgHSv1ddyD7p1cyHEOVwIZZZOxNaXmETPK2ITsSz1pU6iHIlSJEbR3hc9HNwhAzCGiSo51QpjQqMDp8Ta8HKYKOx9wWRGmaFEMU89pTL2dpnYtc9nhKnkt3TaFqd5gE8P/Q/RvRdy/FbH9D9Gduh1PWQlgNOEUaCQ5lm1jSX16eHFyUh8dnZ99q9++ufjx+fevT/X74/rdaf39Z/3x+M/Xw/rDl8Gmq24Yb/D0LnnOz17fmQe/+kVjMW5YOcURxC9LYV89FUowMPaRUoHvsH4Yj4zdpSwPggx0SIY7ziZ4iSnnuxVWP5EFCPyFwGdKsom/QQpmjVLPTNhMtllGpWYgUXmXCUQVOiacYgFEai7mZEhEFQO1YwFx02OBu+Tk4ID0Wut0et0c1lUHe1cs7xydaMgjlkvFg3uL9oVluBeuip2SxxrMcylmwYJkIqeVbAztF1NjIMdGpG48jBFnVIxkyrAJBrSgVhTgk7a/xr7Lv5JrYGc="},{default:n(()=>a[0]||(a[0]=[i("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"outer2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 100"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  overflow"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," hidden"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"outer2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 200"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"outer2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"inner"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 50"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  height"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 50"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," pink"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  float"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," left"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  line-height"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 50"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  text-align"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," center"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"outer2"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"container"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"inner"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"inner"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"inner"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"3"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"inner"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"4"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  </"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"button"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," data-id"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"4"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"将第四个元素滚动到容器视口"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"button"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"button"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," data-id"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"1"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"将第一个元素滚动到容器视口"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"button"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"document"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"querySelectorAll"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"button"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"forEach"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"btn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  btn"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"addEventListener"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"click"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," scrollTo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"});")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," scrollTo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ev"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," index"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ev"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"target"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"dataset"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"id"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ||"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  document")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"querySelector"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},".container .inner:nth-child("),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"${"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"index"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"}"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},")"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"scrollIntoView"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," behavior"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"smooth"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," inline"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"center"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," block"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"nearest"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const o=h(p,[["render",g],["__file","index.html.vue"]]),B=JSON.parse(`{"path":"/article/vgugrup8/","title":"scrollIntoView 元素出现视口","lang":"zh-CN","frontmatter":{"title":"scrollIntoView 元素出现视口","author":"李嘉明","createTime":"2024/07/10 21:04:05","permalink":"/article/vgugrup8/","tags":["DOM"],"head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/vgugrup8/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"scrollIntoView 元素出现视口"}],["meta",{"property":"og:description","content":"在业务开发中发现了一个陌生的方法：scrollIntoView 。从字面意思来看，这个方法应该是让 dom 元素滚动到视口，于是查阅了一下MDN。 描述 Element 方法 scrollIntoView：滚动父级容器，使得元素出现在视口。 参数 scrollIntoViewOptions，一个包含下列属性的对象。 behavior定义过渡动画，默认值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"DOM"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"scrollIntoView 元素出现视口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"在业务开发中发现了一个陌生的方法：scrollIntoView 。从字面意思来看，这个方法应该是让 dom 元素滚动到视口，于是查阅了一下MDN。 描述 Element 方法 scrollIntoView：滚动父级容器，使得元素出现在视口。 参数 scrollIntoViewOptions，一个包含下列属性的对象。 behavior定义过渡动画，默认值..."},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"效果","slug":"效果","link":"#效果","children":[]}],"isBlogPost":true,"readingTime":{"minutes":1.82,"words":545},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/16.DOM/scrollIntoView.md","categoryList":[{"type":1,"name":"前端"},{"type":16,"name":"DOM"}]}`);export{o as comp,B as data};