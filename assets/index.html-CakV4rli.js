import{_ as a,c as t,a as i,o as s}from"./app-BAyfK_aM.js";const n={};function r(o,e){return s(),t("div",null,e[0]||(e[0]=[i('<div class="hint-container tip"><p class="hint-container-title">提问</p><ol><li>typeof NaN 的结果是什么？</li><li>isNaN() 和 Number.isNaN() 有什么区别？</li></ol></div><h2 id="typeof-nan" tabindex="-1"><a class="header-anchor" href="#typeof-nan"><span>typeof NaN</span></a></h2><p><code>NaN</code> 表示不是一个数字 （not a number），NaN 是一个警戒值，用于指出数字类型中的错误情况， 即 执行数字预算没有成功，这是失败后返回的结果。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> NaN</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // &quot;number&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>NaN 作为一个特殊值， 它和自身是不相等的，是唯一个非自反的值，即</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NaN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ===</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> NaN</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // false</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="isnan-和-number-isnan" tabindex="-1"><a class="header-anchor" href="#isnan-和-number-isnan"><span>isNaN() 和 Number.isNaN()</span></a></h2><p><code>isNaN()</code> 接受参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的值都会返回 true，因此非数字值传入也会 返回 true，影响 NaN 的判断。</p><p><code>Number.isNaN()</code> 会首先判断传入的参数是否为数字，如果是数字再继续判断是否为 NaN, 这种方法对 NaN 的判断更为准确。</p>',9)]))}const d=a(n,[["render",r],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/defensive-javascript/jilzuxpt/","title":"NaN","lang":"zh-CN","frontmatter":{"title":"NaN","createTime":"2022/04/15 03:35:01","author":"李嘉明","permalink":"/defensive-javascript/jilzuxpt/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/defensive-javascript/jilzuxpt/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"NaN"}],["meta",{"property":"og:description","content":"提问 typeof NaN 的结果是什么？ isNaN() 和 Number.isNaN() 有什么区别？ typeof NaN NaN 表示不是一个数字 （not a number），NaN 是一个警戒值，用于指出数字类型中的错误情况， 即 执行数字预算没有成功，这是失败后返回的结果。 NaN 作为一个特殊值， 它和自身是不相等的，是唯一个非自反的值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NaN\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"提问 typeof NaN 的结果是什么？ isNaN() 和 Number.isNaN() 有什么区别？ typeof NaN NaN 表示不是一个数字 （not a number），NaN 是一个警戒值，用于指出数字类型中的错误情况， 即 执行数字预算没有成功，这是失败后返回的结果。 NaN 作为一个特殊值， 它和自身是不相等的，是唯一个非自反的值..."},"headers":[{"level":2,"title":"typeof NaN","slug":"typeof-nan","link":"#typeof-nan","children":[]},{"level":2,"title":"isNaN() 和 Number.isNaN()","slug":"isnan-和-number-isnan","link":"#isnan-和-number-isnan","children":[]}],"readingTime":{"minutes":0.76,"words":229},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/JAVASCRIPT学习简记/基础篇/NaN.md"}`);export{d as comp,c as data};