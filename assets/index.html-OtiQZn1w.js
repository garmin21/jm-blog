import{_ as i,c as s,a,o as t}from"./app-Bz0t8sQz.js";const n="/jm-blog/async/event-loop.png",r={};function l(d,e){return t(),s("div",null,e[0]||(e[0]=[a('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>利用Worker可以实现多线程，通过实例化一个Worker，创建一个子线程，子线程里面不允许操作DOM，也没有window</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>由于JS 是单线程的，所以，我们在主线程中，大量计算的话会导致，主线程一直卡在计算的程序中，导致后续代码无法执行，所有，有了事件循环的异步处理，但是，异步处理实际上也是需要，在主线程空闲的时候，才能被执行到，如果主线程一直被占用了，异步代码也不会执行了，所以我们在js 中 引入 <code>web Worker</code> 分线程，相当于创建了一个子线程，这是浏览器提供给我们的。</p><p>请看大图：</p><p><img src="'+n+`" alt="事件循环"></p><p><strong>worker适合场景:</strong> 把耗时的计算放在分线程，不会影响主线程的其他工作 如果耗时的计算在主线程，导致页面卡顿（甚至崩溃）</p><p><strong>worker的缺点：</strong></p><ol><li>无法操作DOM</li><li>无法跨域</li><li>兼容性（不是所有的浏览器都可以使用）</li></ol><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> worker</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Worker</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">file</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Blob</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">postMessage</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 向分线程发送数据</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">onmessage</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 监听分线程的消息</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分线程如何向主线程发送消息" tabindex="-1"><a class="header-anchor" href="#分线程如何向主线程发送消息"><span>分线程如何向主线程发送消息?</span></a></h2><p>我们知道在 分线程中 不允许操作DOM，也没有window 对象，但是他有全局的 self 对象， self 就相当于是一个 简化后的 window</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">postMessage</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">hello</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 向主线程发送数据</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17)]))}const o=i(r,[["render",l],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/article/qa2s1ldk/","title":"web Worker 多线程","lang":"zh-CN","frontmatter":{"title":"web Worker 多线程","author":"李嘉明","createTime":"2024/06/13 16:59:27","permalink":"/article/qa2s1ldk/","tags":["BOM"],"head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/qa2s1ldk/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"web Worker 多线程"}],["meta",{"property":"og:description","content":"提示 利用Worker可以实现多线程，通过实例化一个Worker，创建一个子线程，子线程里面不允许操作DOM，也没有window 前言 由于JS 是单线程的，所以，我们在主线程中，大量计算的话会导致，主线程一直卡在计算的程序中，导致后续代码无法执行，所有，有了事件循环的异步处理，但是，异步处理实际上也是需要，在主线程空闲的时候，才能被执行到，如果主线程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://garmin21.github.io/jm-blog/async/event-loop.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"BOM"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"web Worker 多线程\\",\\"image\\":[\\"http://garmin21.github.io/jm-blog/async/event-loop.png\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"提示 利用Worker可以实现多线程，通过实例化一个Worker，创建一个子线程，子线程里面不允许操作DOM，也没有window 前言 由于JS 是单线程的，所以，我们在主线程中，大量计算的话会导致，主线程一直卡在计算的程序中，导致后续代码无法执行，所有，有了事件循环的异步处理，但是，异步处理实际上也是需要，在主线程空闲的时候，才能被执行到，如果主线程..."},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":3,"title":"事件","slug":"事件","link":"#事件","children":[]}]},{"level":2,"title":"分线程如何向主线程发送消息?","slug":"分线程如何向主线程发送消息","link":"#分线程如何向主线程发送消息","children":[]}],"isBlogPost":true,"readingTime":{"minutes":1.35,"words":406},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/17.BOM/webWorker.md","categoryList":[{"type":1,"name":"前端"},{"type":17,"name":"BOM"}]}`);export{o as comp,h as data};