import{_ as e,c as i,a,o as t}from"./app-Bx7wUcyz.js";const n={};function l(d,s){return t(),i("div",null,s[0]||(s[0]=[a(`<p>内容安全策略（<code>Content-Security-Policy</code>），简称 <code>CSP</code>。是一种 计算机安全标准。</p><p>主要目标是 减少和报告 XSS 攻击、数据注入攻击等。这些攻击手段的主要目的是盗取网站数据、网站内容污染、散发恶意软件等。</p><p>几乎所有现在浏览器都支持 <code>CSP</code>， 对于不支持的浏览器，则会忽略 <code>CSP</code>。</p><h2 id="xss-攻击" tabindex="-1"><a class="header-anchor" href="#xss-攻击"><span>XSS 攻击</span></a></h2><p>XSS 攻击是一种常见的、危害极大的网络攻击手段。它利用浏览器对从服务器获取的内容的信任， 通过站点的 <code>script</code> 脚本、内联脚本、外部导入资源等方式进行注入攻击。 恶意脚本在受害者浏览器中执行，以达成其目的。</p><h2 id="csp" tabindex="-1"><a class="header-anchor" href="#csp"><span>CSP</span></a></h2><p><code>CSP</code> 通过 <strong>有效域名</strong>，即 <strong>浏览器认可的可执行脚本的有效来源</strong> ，使 服务器管理者有能力消除或减少 XSS 攻击所以来的载体。 支持 <code>CSP</code> 的浏览器，仅会执行从白名单域名加载的脚本文件，忽略其他所有脚本，包括内联脚本和 HTML 事件处理属性。</p><h2 id="制定策略" tabindex="-1"><a class="header-anchor" href="#制定策略"><span>制定策略</span></a></h2><p><code>CSP</code> 通过 声明 HTTP 头部字段 <code>Content-Security-Policy</code> 来启用和配置策略：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: policy;</span></span>
<span class="line"><span>Content-Security-Policy: policy; policy;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数 <code>[policy]</code> 是一个包含了描述 各种 CSP 策略指令的字符串。</p><h2 id="策略指令" tabindex="-1"><a class="header-anchor" href="#策略指令"><span>策略指令</span></a></h2><h3 id="default-src" tabindex="-1"><a class="header-anchor" href="#default-src"><span>default-src</span></a></h3><p>为其他 CSP 指令提供备选项，如果其他指令不存在，用户代理会查找并应用该值，如果其他指令有配置值，那么则不会应用 default-src 的值。</p><p>default-src 策略允许指定一个或多个值：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: default-src &lt;source&gt;;</span></span>
<span class="line"><span>Content-Security-Policy: default-src &lt;source&gt; &lt;source&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="script-src" tabindex="-1"><a class="header-anchor" href="#script-src"><span>script-src</span></a></h3><p>脚本内容安全策略指令，包括限制 外部资源、内联脚本、eval 函数。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: script-src &lt;source&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="style-src" tabindex="-1"><a class="header-anchor" href="#style-src"><span>style-src</span></a></h3><p>CSS 文件内容安全策略指令，包括限制 内联样式表、通过<code>&lt;link&gt;</code> 引入的 css 文件、样式中通过 <code>@import</code> 导入的 css 文件、 元素的 <code>style</code> 属性、 <code>style.cssText</code> 属性、以及 <code>el.setAttribute(&#39;style&#39;, &#39;&#39;)</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: style-src &lt;source&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="img-src" tabindex="-1"><a class="header-anchor" href="#img-src"><span>img-src</span></a></h3><p>图片资源内容安全策略指令， 限制通过 <code>&lt;img&gt;</code> 加载的图片资源</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: img-src &lt;source&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="media-src" tabindex="-1"><a class="header-anchor" href="#media-src"><span>media-src</span></a></h3><p>媒体资源内容安全策略指令，限制通过 <code>&lt;audio&gt;</code>、<code>&lt;video&gt;</code>、<code>&lt;track&gt;</code> 加载的媒体资源</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: media-src &lt;source&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="frame-src" tabindex="-1"><a class="header-anchor" href="#frame-src"><span>frame-src</span></a></h3><p>iframe 内容安全策略指令，限制<code>&lt;iframe&gt;</code> 加载的页面资源</p><h3 id="其他指令" tabindex="-1"><a class="header-anchor" href="#其他指令"><span>其他指令</span></a></h3><ul><li><code>manifest-src</code> 限制 manifest 资源（通过<code>&lt;link&gt;</code>引入的 manifest 文件）</li><li><code>worker-src</code> 限制 <code>worker</code>资源，包括 <code>Worker</code>、<code>SharedWorker</code> 、<code>ServiceWorker</code></li><li><code>child-src</code> 限制 <code>web worker</code>、<code>&lt;frame&gt;</code> 、<code>&lt;iframe&gt;</code></li><li><code>connect-src</code> 限制允许通过脚本接口加载的链接地址，包括：<code>&lt;a&gt;</code>、<code>Fetch</code>、<code>XMLHttpRequest</code>、<code>WebSocket</code>、<code>EventSource</code></li><li><code>font-src</code> 限制 <code>@font-face</code> 加载字体的有效源规则。</li><li><code>object-src</code> 限制 <code>&lt;object&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;applet&gt;</code></li></ul><h3 id="指令-source-有效值" tabindex="-1"><a class="header-anchor" href="#指令-source-有效值"><span>指令<code>&lt;source&gt;</code>有效值</span></a></h3><ul><li><p><code>&lt;host-source&gt;</code></p><p>以域名或者 IP 地址表示的主机名，外加可选的 URL 协议名（URL scheme）以及端口号。 支持前置通配符（星号 &#39;*&#39;），可以将通配符应用于站点地址、端口中，如应用于端口，则表示允许使用该域名下的所有端口。</p><ul><li><strong>example.com:443</strong> 匹配 example.com 上 443 端口访问</li><li><strong><a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a></strong> 匹配使用了 http: 的 example.com 的访问</li><li><strong>*.example.com</strong> 匹配 example.com 下的所有子域名的访问</li></ul></li><li><p><code>&lt;scheme-source&gt;</code></p><p>协议名如&#39;http:&#39; 或者 &#39;https:&#39;。必须带有冒号，不要有单引号。</p></li><li><p><code>&#39;self&#39;</code></p><p>指向与要保护的文件所在的源，包括相同的 URL scheme 与端口号。必须有单引号。</p></li><li><p><code>&#39;unsafe-inline&#39;</code></p><p>允许使用内联资源，例如内联 <code>&lt;script&gt;</code> 元素（javascript: URL）、内联事件处理器以及内联 <code>&lt;style&gt;</code> 元素。必须有单引号。</p></li><li><p><code>&#39;unsafe-eval&#39;</code></p><p>允许使用 eval() 以及相似的函数来从字符串创建代码。必须有单引号。</p></li><li><p><code>&#39;none&#39;</code></p><p>不允许任何内容。 必须有单引号。</p></li><li><p><code>&#39;nonce-&lt;base64 值&gt;&#39;</code></p><p>特定使用一次性加密内联脚本的白名单。服务器必须在每一次传输政策时生成唯一的一次性值。否则将存在绕过资源政策的可能。</p></li><li><p><code>&lt;hash-source&gt;</code></p><p>使用 sha256、sha384 或 sha512 编码过的内联脚本或样式。其由用短划线分隔的两部分组成：用于创建哈希的加密算法，以及脚本或样式 base64 编码的哈希值。当生成哈希值的时候，不要包含 <code>&lt;script&gt;</code> 或 <code>&lt;style&gt;</code> 标签，同时注意字母大小写与空格——包括首尾空格——都是会影响生成的结果的。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: default-src sha256-abcdef;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><code>&#39;strict-dynamic&#39;</code></p><p>strict-dynamic 指定对于含有标记脚本 (通过附加一个随机数或散列) 的信任，应该传播到由该脚本加载的所有脚本。与此同时，任何白名单以及源表达式例如 &#39;self&#39; 或者 &#39;unsafe-inline&#39; 都会被忽略。</p></li></ul><h2 id="启用-csp" tabindex="-1"><a class="header-anchor" href="#启用-csp"><span>启用 CSP</span></a></h2><p>启用 CSP，可以在 HTTP 服务器中，新增 Header 字段： 如，在 nginx 中：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">http</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # ...more</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # ...more</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> / </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      index </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">index.html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      Content-Security-</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Policy</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> default-src </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;self&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # ...more</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在 html 文件中 添加 <code>&lt;meta&gt;</code> 标签</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">meta</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> http-equiv</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Content-Security-Policy</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">default-src &#39;self&#39;;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例 1</span></a></h3><p>默认只允许加载本站资源</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: default-src &#39;self&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例 2</span></a></h3><p>默认只允许加载本站资源，但允许任意来源图片资源</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: default-src &#39;self&#39;; img-src *;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例 3</span></a></h3><p>默认只允许加载本站资源，允许 script 资源、css 资源、图片资源从指定 cdn 域名加载</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: default-src &#39;self&#39;; script-src &#39;self&#39; https://cdn.example.com; style-src  &#39;self&#39; https://cdn.example.com; img-src &#39;self&#39; https://cdn.example.com;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4"><span>示例 4</span></a></h3><p>阻止所有 iframe 窗口，允许本站加载其他资源</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: default-src &#39;self&#39;; frame-src &#39;none&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5"><span>示例 5</span></a></h3><p>执行特定 nonce 的内联脚本：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: script-src &#39;nonce-abcdef&#39; &#39;self&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>只有在<code>&lt;script&gt;</code>标签内带有特定 <code>nonce</code> 值的脚本才允许执行：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> nonce</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">abcdef</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">example.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="示例-6" tabindex="-1"><a class="header-anchor" href="#示例-6"><span>示例 6</span></a></h3><p>Hash 值相符的脚本才能执行：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: script-src &#39;sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng=&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该 hash 值必须是 script 标签内容的 sha256 值，代码才能执行：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  alert</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hello, world.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="违例报告" tabindex="-1"><a class="header-anchor" href="#违例报告"><span>违例报告</span></a></h2><p>启用 CSP 后，默认情况下，违例报告不会发送。我们可以通过配置 <code>report-uri</code> 策略指令，并提供至少一个 URI 地址去递交报告。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Content-Security-Policy: default-src &#39;self&#39;; report-uri http://report.example.com/csp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="违例报告示例" tabindex="-1"><a class="header-anchor" href="#违例报告示例"><span>违例报告示例</span></a></h3><p>违例报告将以 JSON 对象的数据结构进行递交：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">csp-report</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">document-uri</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://example.com/index.html</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 发生违规的文档的 URI</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">referrer</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 违规发生处的文档引用（地址）</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">blocked-uri</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://example.com/css/style.css</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 被 CSP 阻止的资源 URI。</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">violated-directive</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">style-src cdn.example.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 违反的策略名称。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 在 Content-Security-Policy HTTP 头部中指明的原始策略。</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">original-policy</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">default-src &#39;none&#39;; style-src cdn.example.com; report-uri /_/csp-reports</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当服务器接收到 违例报告，可以通过分析报告内容，来进行自定义的处理。</p>`,69)]))}const p=e(n,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/article/snkdmwsz/","title":"内容安全策略(CSP)","lang":"zh-CN","frontmatter":{"title":"内容安全策略(CSP)","createTime":"2020/08/28 03:25:32","author":"李嘉明","tags":["http","安全"],"permalink":"/article/snkdmwsz/","description":"内容安全策略（Content-Security-Policy），简称 CSP。是一种 计算机安全标准。 主要目标是 减少和报告 XSS 攻击、数据注入攻击等。这些攻击手段的主要目的是盗取网站数据、网站内容污染、散发恶意软件等。 几乎所有现在浏览器都支持 CSP， 对于不支持的浏览器，则会忽略 CSP。 XSS 攻击 XSS 攻击是一种常见的、危害极大的...","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/snkdmwsz/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"内容安全策略(CSP)"}],["meta",{"property":"og:description","content":"内容安全策略（Content-Security-Policy），简称 CSP。是一种 计算机安全标准。 主要目标是 减少和报告 XSS 攻击、数据注入攻击等。这些攻击手段的主要目的是盗取网站数据、网站内容污染、散发恶意软件等。 几乎所有现在浏览器都支持 CSP， 对于不支持的浏览器，则会忽略 CSP。 XSS 攻击 XSS 攻击是一种常见的、危害极大的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"http"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内容安全策略(CSP)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":5.73,"words":1719},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/8.HTTP/CSP.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"2a0632","sort":8,"name":"HTTP"}],"bulletin":false}');export{p as comp,r as data};