import{_ as s,c as e,a,o as t}from"./app-CQLjC5Lq.js";const n={};function r(l,i){return t(),e("div",null,i[0]||(i[0]=[a(`<div class="hint-container info"><p class="hint-container-title">题目</p><p>Github: <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/" target="_blank" rel="noopener noreferrer">Parameters</a></p><p>实现内置的 Parameters 类型，而不是直接使用它</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> arg2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> FunctionParamsType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MyParameters</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // [arg1: string, arg2: number]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h3><p>通过 条件类型推断，获取函数的参数类型</p><h3 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h3><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MyParameters</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">infer</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> R</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> any</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> R</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> never</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h3><blockquote><ul><li><a href="https://www.typescriptlang.org/docs/handbook/2/generics.html" target="_blank" rel="noopener noreferrer">泛型 Generics</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html" target="_blank" rel="noopener noreferrer">条件类型 Conditional Types</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types" target="_blank" rel="noopener noreferrer">条件类型内推断 Inferring Within Conditional Types</a></li></ul></blockquote>`,7)]))}const p=s(n,[["render",r],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/type-challenges/easy/parameters/","title":"✔️ Parameters","lang":"zh-CN","frontmatter":{"title":"✔️ Parameters","createTime":"2022/12/01 04:18:33","author":"李嘉明","permalink":"/type-challenges/easy/parameters/","description":"题目 Github: Parameters 实现内置的 Parameters 类型，而不是直接使用它 解题思路 通过 条件类型推断，获取函数的参数类型 答案 参考 泛型 Generics 条件类型 Conditional Types 条件类型内推断 Inferring Within Conditional Types","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/type-challenges/easy/parameters/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"✔️ Parameters"}],["meta",{"property":"og:description","content":"题目 Github: Parameters 实现内置的 Parameters 类型，而不是直接使用它 解题思路 通过 条件类型推断，获取函数的参数类型 答案 参考 泛型 Generics 条件类型 Conditional Types 条件类型内推断 Inferring Within Conditional Types"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"✔️ Parameters\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.43,"words":128},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/type-challenges/简单/parameters.md","bulletin":false}');export{p as comp,k as data};