import{_ as i,c as a,a as n,o as t}from"./app-Bz0t8sQz.js";const l="/jm-blog/images/func-value-stack.png",e="/jm-blog/images/func-value-heap.png",h={};function p(k,s){return t(),a("div",null,s[0]||(s[0]=[n(`<p>我们知道，在 <code>ECMAScrip</code> 中， 函数的参数是 <strong>按值传递</strong> 的。</p><p>那么怎么理解 <strong>按值传递</strong> ？</p><p>简单来说， <strong>把函数外部的值复制给函数内部的参数</strong>，即 <strong>把值从一个变量复制到另一个变量</strong>。</p><p>那么也就是说，在函数内部，修改函数参数的值，不会改变外部变量的值。</p><p>我们来看一个例子：2</p><p><strong>示例 1：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，外部变量<code>a</code>作为 函数 <code>foo</code> 的执行时参数值， 在函数内部修改传入的参数值进行修改， 函数执行后，并不会对外部变量<code>a</code> 发生修改。</p><p>这个例子确实说明了函数参数是按值传递的。</p><p>但是再来看另一个例子：</p><p><strong>示例 2：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> obj1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // { a: 2 }</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // { a: 2 }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> obj2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> bar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">obj2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // { a: 1 }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中， 函数<code>foo</code> 执行完后， 打印的 <code>obj1</code> 值发生了变化，说明函数<code>foo</code> 内部修改了外部变量<code>obj1</code>， 为什么会发生修改？而在 函数<code>bar</code> 执行后，<code>obj2</code> 值保持不变，这又是为什么？ 函数参数是否真的是 <strong>按值传递</strong>？</p><p>那么该如何理解 <code>函数参数是按值传递的</code>?</p><p>在理解这个之前，我们首先需要知道，<code>JavaScript</code> 的数据类型，以及不同数据类型的存储方式。</p><h2 id="数据类型及其存储方式" tabindex="-1"><a class="header-anchor" href="#数据类型及其存储方式"><span>数据类型及其存储方式</span></a></h2><p>我们知道， 在 <code>JavaScript</code> 中， 有两种 数据类型，分别是：<strong>(1)基本数据类型</strong>和 <strong>(2)引用数据类型</strong>，</p><ul><li><p>基本数据类型：值 直接保存在 <strong>栈（stack）</strong> 中。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 2 1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本类型在 <strong>栈</strong> 中的赋值变动如下：</p><div style="text-align:center;"><p><img src="`+l+`" alt="function-value-stack" style="width:500px;"></p></div></li><li><p>引用数据类型：值 保存在 <strong>堆（heap）</strong> 中， 并在 <strong>栈（stack）</strong> 中保存 值 在 <strong>堆（heap）</strong> 中的内存地址。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Mark</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">John</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // { name: &#39;John&#39; }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用类型在 <strong>栈</strong> 和 <strong>堆</strong> 中的复制变动如下：</p><div style="text-align:center;"><p><img src="`+e+'" alt="function-value-stack" style="width:680px;"></p></div></li></ul><h2 id="按值传递" tabindex="-1"><a class="header-anchor" href="#按值传递"><span>按值传递</span></a></h2><p>我们从 数据类型来理解 <code>按值传递</code>, 那么可以发现， <strong>传递</strong> 的值， 是指在 <strong>栈（stack）</strong> 中保存的值。</p><p>即， 无论 <strong>参数值</strong> 是 基本数据类型还是引用数据类型， <strong>传递</strong> 的是 <strong>栈（stack）</strong> 中的值。</p><ul><li><p>对于基本数据类型， 函数内部修改参数的值，实际上是修改的是 函数参数重新在 <strong>栈（stack）</strong> 中的内存片段保存的值。</p></li><li><p>对于引用数据类型， 函数参数 传递是的 引用类型在 <strong>栈（stack）</strong> 中的内存地址：</p><ul><li>如果直接修改参数的值，函数参数在 <strong>栈（stack）</strong> 中的内存片段保存的内存地址被覆盖。</li><li>如果修改 参数对象的属性值，修改的是根据 函数参数在 <strong>栈（stack）</strong> 中的内存片段保存的内存地址对应的在 <strong>堆（heap）</strong> 中的值。</li></ul></li></ul><p>所以回头重新看 <strong>示例 1</strong> 和 <strong>示例 2</strong>， 均正确表述了 函数的参数是 <strong>按值传递</strong> 的。</p>',23)]))}const d=i(h,[["render",p],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/defensive-javascript/m4a92nl5/","title":"JavaScript进阶（五）— 函数参数按值传递","lang":"zh-CN","frontmatter":{"title":"JavaScript进阶（五）— 函数参数按值传递","createTime":"2020/02/12 11:27:54","author":"李嘉明","permalink":"/defensive-javascript/m4a92nl5/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/defensive-javascript/m4a92nl5/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"JavaScript进阶（五）— 函数参数按值传递"}],["meta",{"property":"og:description","content":"我们知道，在 ECMAScrip 中， 函数的参数是 按值传递 的。 那么怎么理解 按值传递 ？ 简单来说， 把函数外部的值复制给函数内部的参数，即 把值从一个变量复制到另一个变量。 那么也就是说，在函数内部，修改函数参数的值，不会改变外部变量的值。 我们来看一个例子：2 示例 1： 可以看出，外部变量a作为 函数 foo 的执行时参数值， 在函数内部..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://garmin21.github.io/jm-blog/images/func-value-stack.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript进阶（五）— 函数参数按值传递\\",\\"image\\":[\\"http://garmin21.github.io/jm-blog/images/func-value-stack.png\\",\\"http://garmin21.github.io/jm-blog/images/func-value-heap.png\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"我们知道，在 ECMAScrip 中， 函数的参数是 按值传递 的。 那么怎么理解 按值传递 ？ 简单来说， 把函数外部的值复制给函数内部的参数，即 把值从一个变量复制到另一个变量。 那么也就是说，在函数内部，修改函数参数的值，不会改变外部变量的值。 我们来看一个例子：2 示例 1： 可以看出，外部变量a作为 函数 foo 的执行时参数值， 在函数内部..."},"headers":[{"level":2,"title":"数据类型及其存储方式","slug":"数据类型及其存储方式","link":"#数据类型及其存储方式","children":[]},{"level":2,"title":"按值传递","slug":"按值传递","link":"#按值传递","children":[]}],"readingTime":{"minutes":2.77,"words":830},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/JAVASCRIPT学习简记/进阶篇/函数参数按值传递.md"}`);export{d as comp,g as data};