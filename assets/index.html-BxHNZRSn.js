import{_ as i,c as a,a as n,o as h}from"./app-CQLjC5Lq.js";const t={};function l(k,s){return h(),a("div",null,s[0]||(s[0]=[n(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>UMD 是 AMD 和 CommonJS 的一个糅合。AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载。 既然要通用，怎么办呢？那就先判断是否支持 node.js 的模块，存在就使用 node.js；再判断是否支持 AMD（define 是否存在），存在则使用 AMD 的方式加载。这就是所谓的 UMD。</p></div><h2 id="umd-模块格式" tabindex="-1"><a class="header-anchor" href="#umd-模块格式"><span>UMD 模块格式</span></a></h2><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!function</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> t</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">object</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typeof</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> exports</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;&amp;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">object</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typeof</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 判断是否支持 node</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> t</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> else</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">function</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> define</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> define</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">amd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 判断 是否支持 amd</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        define</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">([],</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> t</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> else</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">object</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typeof</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 这里判断是否有 exports ,上面已经有判断了</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">VueJsonPretty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> t</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 实在找不到，就挂载到 window 上</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">4</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">VueJsonPretty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> t</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> component</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  function</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }()</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">component</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">这里返回的就是我们编写的内容</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> component</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const p=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/learn-build/umd/","title":"前端模块","lang":"zh-CN","frontmatter":{"title":"前端模块","author":"李嘉明","createTime":"2024/05/27 22:26:24","permalink":"/learn-build/umd/","description":"提示 UMD 是 AMD 和 CommonJS 的一个糅合。AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载。 既然要通用，怎么办呢？那就先判断是否支持 node.js 的模块，存在就使用 node.js；再判断是否支持 AMD（define 是否存在），存在则使用 AMD 的方式加载。这就是所谓的 UMD。 UMD 模块格式","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/learn-build/umd/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"前端模块"}],["meta",{"property":"og:description","content":"提示 UMD 是 AMD 和 CommonJS 的一个糅合。AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载。 既然要通用，怎么办呢？那就先判断是否支持 node.js 的模块，存在就使用 node.js；再判断是否支持 AMD（define 是否存在），存在则使用 AMD 的方式加载。这就是所谓的 UMD。 UMD 模块格式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.75,"words":224},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/构建工具/Webpack/umd模块.md","bulletin":false}');export{p as comp,d as data};