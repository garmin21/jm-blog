import{_ as i,c as a,a as e,o as n}from"./app-CQLjC5Lq.js";const t={};function l(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>WEB API接口: <code>FileReader</code> 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/File" target="_blank" rel="noopener noreferrer"><code>File</code></a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Blob" target="_blank" rel="noopener noreferrer"><code>Blob</code></a> 对象指定要读取的文件或数据。</p></div><h3 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化"><span>实例化</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> reader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> FileReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">FileReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">error</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 只读一个DOMException，表示在读取文件时发生的错误 。</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">FileReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">readyState</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 只读,表示FileReader状态的数字。取值如下：</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        EMPTY</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">	0</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	// 还没有加载任何数据.</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        LOADING</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">	1</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	// 数据正在被加载.</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        DONE</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">	2</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	// 已完成全部的读取请求.</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">FileReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">result</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 只读,文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法"><span>实例方法</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 1. 异步按字符读取文件内容，结果用字符串表示形式</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">reader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">readAsText</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">files</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 2. 异步读取文件内容，结果为data:url的形式表示</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">reader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">readAsDataURL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">files</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 3. 异步按照字节读取文件内容，结果为文件的二进制串</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">reader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">readAsBinaryString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">files</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 4. 异步按字节读取文件内容，结果用 ArrayBuffer 对象表示</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">reader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">readAsArrayBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">files</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 5. 中止读取操作</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">reader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">abort</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3><table><thead><tr><th><code>onabort</code></th><th>中断时触发</th></tr></thead><tbody><tr><td><code>onerror</code></td><td>出错时触发</td></tr><tr><td><code>onload</code></td><td>文件读取成功完成时触发</td></tr><tr><td><code>onloadend</code></td><td>读取完成触发（无论成功或失败）</td></tr><tr><td><code>onloadstart</code></td><td>读取开始时触发</td></tr><tr><td><code>onprogress</code></td><td>读取中</td></tr></tbody></table><h3 id="arraybuffer-对象" tabindex="-1"><a class="header-anchor" href="#arraybuffer-对象"><span>ArrayBuffer 对象</span></a></h3><blockquote><p><code>ArrayBuffer</code> 对象用来表示通用的、固定长度的原始二进制数据缓冲区.<code>ArrayBuffer</code> 不能直接操作,而是要通过类型数组对象或 <code>DataView</code> 对象来操作,它们会将缓冲区中的数据表示为特定的格式,并通过这些格式来读写缓冲区的内容.</p></blockquote><p><code>ArrayBuffer</code>也是一个构造函数，可以分配一段可以存放数据的连续内存区域</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ArrayBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// ArrayBuffer 对象有实例属性 byteLength ，表示当前实例占用的内存字节长度（单位字节）</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">byteLength</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于无法对 <code>Arraybuffer</code> 直接进行操作,所以我们需要借助其他对象来操作. 所有就有了 <code>TypedArray</code>(类型数组对象)和 <code>DataView</code>对象。</p><h4 id="dataview-对象" tabindex="-1"><a class="header-anchor" href="#dataview-对象"><span><code>DataView 对象</code></span></a></h4><blockquote><p><code>DataView</code>视图是一个可以从二进制<code>ArrayBuffer</code>对象中读写多种数值类型的底层接口。</p></blockquote><ol><li><p><code>setint8()</code> 从<code>DataView</code>起始位置以<code>byte</code>为计数的指定偏移量（<code>byteOffset</code>）处存储一个<code>8-bit</code>数（一个字节）</p></li><li><p><code>getint8()</code> 从<code>DataView</code>起始位置以<code>byte</code>为计数的指定偏移量（<code>byteOffset</code>）处获取一个<code>8-bit</code>数（一个字节）</p></li></ol><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ArrayBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">byteLength</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 2</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> dataView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> DataView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dataView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setInt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dataView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setInt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dataView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInt8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 1</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dataView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInt8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dataView</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getInt16</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 258</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typedarray" tabindex="-1"><a class="header-anchor" href="#typedarray"><span><code>TypedArray</code></span></a></h4><blockquote><p><code>TypedArray</code>视图，与<code>DataView</code>视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。<code>TypedArray</code>对象描述了一个底层的二进制数据缓存区（<code>binary data buffer</code>）的一个类数组视图（<code>view</code>）。但它本身不可以被实例化，甚至无法访问，你可以把它理解为接口，它有很多的实现</p></blockquote><p>实现方法</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ArrayBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">byteLength</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 8</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> int8Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Int8Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">int8Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 8</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> int16Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Int16Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">buffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">int16Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="blob对象" tabindex="-1"><a class="header-anchor" href="#blob对象"><span>Blob对象</span></a></h3><blockquote><p><code>Blob</code>是用来支持文件操作的。简单的说：在<code>JS</code>中，有两个构造函数 <code>File</code> 和 <code>Blob</code>, 而<code>File</code>继承了所有<code>Blob</code>的属性。 <code>File</code>对象可以看作一种特殊的<code>Blob</code>对象。</p></blockquote>`,24)]))}const p=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/a3eerq3w/","title":"FileReader对象","lang":"zh-CN","frontmatter":{"title":"FileReader对象","author":"李嘉明","createTime":"2024/05/26 21:27:10","permalink":"/article/a3eerq3w/","tags":["BOM"],"description":"提示 WEB API接口: FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。 实例化 属性 实例方法 事件 ArrayBuffer 对象 ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区.ArrayBuffer 不...","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/a3eerq3w/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"FileReader对象"}],["meta",{"property":"og:description","content":"提示 WEB API接口: FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。 实例化 属性 实例方法 事件 ArrayBuffer 对象 ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区.ArrayBuffer 不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"BOM"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FileReader对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":3.01,"words":904},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/17.BOM/FileReader.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"35486d","sort":17,"name":"BOM"}],"bulletin":false}');export{p as comp,d as data};