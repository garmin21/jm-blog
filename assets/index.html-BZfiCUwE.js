import{_ as i,c as a,a as e,o as n}from"./app-Bz0t8sQz.js";const t={};function l(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="获取表单元素以及表单控件元素-了解" tabindex="-1"><a class="header-anchor" href="#获取表单元素以及表单控件元素-了解"><span>获取表单元素以及表单控件元素（了解）</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">forms</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   // 获取页面中所有form元素组成的集合</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">formName</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   // 通过form元素的name属性值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">formElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">inputName</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   // 通过表单控件的name属性值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">formElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">elements</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 所有的表单控件组成的集合 (类数组)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">formElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // form元素本身也可以取索引</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-元素" tabindex="-1"><a class="header-anchor" href="#form-元素"><span>form 元素</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 属性：</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">length</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   // 返回所有表单控件的数量</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">elements</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 所有表单控件组成的集合</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 方法：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">submit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">reset</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input元素" tabindex="-1"><a class="header-anchor" href="#input元素"><span>input元素</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">方法：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">blur</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  失去焦点</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">focus</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  获取焦点</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">select</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  选中里面的文字</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="textarea" tabindex="-1"><a class="header-anchor" href="#textarea"><span>textarea</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">方法：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">select</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  选中文本</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="select元素" tabindex="-1"><a class="header-anchor" href="#select元素"><span>select元素</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">属性：</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">	options</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  所有</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">option</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">元素的集合</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">	selectedIndex</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  被选中的</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">option</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">的索引（如果选中了多个，取第一个）</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">	length</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">   option</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">元素的个数</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">方法：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">option</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">元素</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  追加一个</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">option</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	remove</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  删除指定的索引</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	focus</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	blur</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">创建</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">option</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">元素：</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">	new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Option</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">innerText</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">值， </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">value</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const d=i(t,[["render",l],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/nzehjxgy/","title":"form 表单相关的元素","lang":"zh-CN","frontmatter":{"title":"form 表单相关的元素","author":"李嘉明","createTime":"2024/05/26 21:02:29","permalink":"/article/nzehjxgy/","tags":["DOM"],"head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/nzehjxgy/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"form 表单相关的元素"}],["meta",{"property":"og:description","content":"获取表单元素以及表单控件元素（了解） form 元素 input元素 textarea select元素"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"DOM"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"form 表单相关的元素\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"获取表单元素以及表单控件元素（了解） form 元素 input元素 textarea select元素"},"headers":[{"level":2,"title":"获取表单元素以及表单控件元素（了解）","slug":"获取表单元素以及表单控件元素-了解","link":"#获取表单元素以及表单控件元素-了解","children":[{"level":3,"title":"form 元素","slug":"form-元素","link":"#form-元素","children":[]},{"level":3,"title":"input元素","slug":"input元素","link":"#input元素","children":[]},{"level":3,"title":"textarea","slug":"textarea","link":"#textarea","children":[]}]}],"isBlogPost":true,"readingTime":{"minutes":0.86,"words":258},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/16.DOM/form.md","categoryList":[{"type":1,"name":"前端"},{"type":16,"name":"DOM"}]}`);export{d as comp,r as data};