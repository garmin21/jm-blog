import{_ as i,c as e,a as s,o as a}from"./app-C_XscStE.js";const n="/jm-blog/images/rust-untitled.png",r={};function l(d,t){return a(),e("div",null,t[0]||(t[0]=[s(`<div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">fn</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> i32</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> j</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> i32</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -&gt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> i32</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> j</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align:center;"><p><img src="`+n+'" alt="Untitled"></p></div><h2 id="函数要点" tabindex="-1"><a class="header-anchor" href="#函数要点"><span>函数要点</span></a></h2><ul><li>函数名和变量名使用 <strong>蛇形命名法</strong> 例如 <code>fn add_two() -&gt; {}</code></li><li>函数的位置可以随便放，rust 不关心我们在哪里定义了函数</li><li>每个函数参数都需要标注类型</li></ul><h2 id="函数返回" tabindex="-1"><a class="header-anchor" href="#函数返回"><span>函数返回</span></a></h2><ul><li>函数的返回值就是函数的最后一条 <strong>表达式</strong> 的返回值</li><li>也可以使用 <code>return</code> 提前返回</li></ul><p><strong>特殊返回类型:</strong></p><ul><li>无返回值 <code>()</code> 函数没有返回值，那么返回一个 <code>()</code> 通过 <code>;</code> 结尾的表达式返回 <code>()</code></li></ul>',8)]))}const p=i(r,[["render",l],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/learn-rust/function/","title":"函数","lang":"zh-CN","frontmatter":{"title":"函数","author":"李嘉明","createTime":"2022/06/03 05:43:50","permalink":"/learn-rust/function/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/learn-rust/function/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:description","content":"Untitled 函数要点 函数名和变量名使用 蛇形命名法 例如 fn add_two() -> {} 函数的位置可以随便放，rust 不关心我们在哪里定义了函数 每个函数参数都需要标注类型 函数返回 函数的返回值就是函数的最后一条 表达式 的返回值 也可以使用 return 提前返回 特殊返回类型: 无返回值 () 函数没有返回值，那么返回一个 ()..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://garmin21.github.io/jm-blog/images/rust-untitled.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数\\",\\"image\\":[\\"http://garmin21.github.io/jm-blog/images/rust-untitled.png\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"Untitled 函数要点 函数名和变量名使用 蛇形命名法 例如 fn add_two() -> {} 函数的位置可以随便放，rust 不关心我们在哪里定义了函数 每个函数参数都需要标注类型 函数返回 函数的返回值就是函数的最后一条 表达式 的返回值 也可以使用 return 提前返回 特殊返回类型: 无返回值 () 函数没有返回值，那么返回一个 ()..."},"headers":[{"level":2,"title":"函数要点","slug":"函数要点","link":"#函数要点","children":[]},{"level":2,"title":"函数返回","slug":"函数返回","link":"#函数返回","children":[]}],"readingTime":{"minutes":0.52,"words":157},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/rust学习简记/基础入门/函数.md"}`);export{p as comp,c as data};