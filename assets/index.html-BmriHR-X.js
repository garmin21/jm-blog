import{_ as i,c as a,a as n,o as e}from"./app-Bx7wUcyz.js";const t={};function p(l,s){return e(),a("div",null,s[0]||(s[0]=[n(`<blockquote><p>记录 <code>npm</code> <code>yarn</code> <code>pnpm</code> 相关踩坑</p></blockquote><h2 id="npm-安装-node-sass-经常失败" tabindex="-1"><a class="header-anchor" href="#npm-安装-node-sass-经常失败"><span>npm 安装 <code>node-sass</code> 经常失败</span></a></h2><blockquote><p>虽说 <code>node-sass</code> 已经被淘汰，现在都用 <a href="https://github.com/sass/dart-sass" target="_blank" rel="noopener noreferrer">dart-sass</a>，但你总会遇到一些老古董项目的</p></blockquote><p>在使用 <code>npm</code> 安装依赖时，遇到含有二进制文件的依赖包会经常失败，比如：<code>node-sass</code>、<code>puppeteer</code> 等</p><details class="hint-container details"><summary>为什么配置了国内镜像源安装也会失败？</summary><p>配置的国内镜像源只对 <code>npm</code> 包生效，而其中包含的二进制文件使用的是专门的下载地址，需要单独配置</p><p>比如 <code>node-sass</code> 需要配置 <code>sass_binary_site</code>，其<a href="https://github.com/sass/node-sass/blob/ee13eb9c62449d1e535189a063cbdd15583ebf32/lib/extensions.js#L246" target="_blank" rel="noopener noreferrer">源码</a>如下</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> getBinaryUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> site</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    getArgument</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">--sass-binary-site</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    process</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">env</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">SASS_BINARY_SITE</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    process</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">env</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">npm_config_sass_binary_site</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">pkg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">nodeSassConfig</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pkg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">nodeSassConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">binarySite</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://github.com/sass/node-sass/releases/download</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">site</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">v</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pkg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> getBinaryName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()].</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">join</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其默认地址是 <code>github</code>，而因为一些原因导致咱们安装失败所以也正常</p></details><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h4><div class="hint-container tip"><p class="hint-container-title">前置知识：<code>.npmrc</code></p><p><code>.npmrc</code> 文件是 <code>npm</code> 的配置文件</p><p>当在使用 <code>npm</code> 时它会从命令行、环境变量和 <code>.npmrc</code> 文件中获取其配置</p><p>其加载优先级：命令行 &gt; 项目 <code>.npmrc</code> &gt; 全局 <code>.npmrc</code> &gt; 默认</p><blockquote><p><code>yarn</code> 的配置文件为 <code>.yarnrc</code></p><p><code>pnpm</code> 的配置文件为 <code>.npmrc</code></p></blockquote></div><h4 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1"><span>解决方法</span></a></h4><blockquote><p>临时解决（以 <code>node-sass</code> 为例）</p></blockquote><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node-sass</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --sass_binary_site=https://npmmirror.com/mirrors/node-sass</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># OR</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node-sass</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --sass_binary_site=https://npmmirror.com/mirrors/node-sass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>长期解决</p></blockquote><p>在项目根目录新建 <code>.npmrc</code> 文件，然后配置对应的二进制下载地址</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># npm 镜像地址</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">registry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://registry.npmmirror.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 二进制文件下载地址</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">sass_binary_site</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://npmmirror.com/mirrors/node-sass</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">phantomjs_cdnurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://npmmirror.com/mirrors/phantomjs</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">electron_mirror</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://npmmirror.com/mirrors/electron</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">profiler_binary_host_mirror</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://npmmirror.com/mirrors/node-inspector</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">chromedriver_cdnurl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://npmmirror.com/mirrors/chromedriver</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const r=i(t,[["render",p],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/i1wc1ulc/","title":"node-sass 安装失败解决方案","lang":"zh-CN","frontmatter":{"title":"node-sass 安装失败解决方案","createTime":"2021/11/26 06:28:37","tags":["development"],"permalink":"/article/i1wc1ulc/","author":"李嘉明","description":"记录 npm yarn pnpm 相关踩坑 npm 安装 node-sass 经常失败 虽说 node-sass 已经被淘汰，现在都用 dart-sass，但你总会遇到一些老古董项目的 在使用 npm 安装依赖时，遇到含有二进制文件的依赖包会经常失败，比如：node-sass、puppeteer 等 为什么配置了国内镜像源安装也会失败？ 配置的国内镜像...","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/i1wc1ulc/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"node-sass 安装失败解决方案"}],["meta",{"property":"og:description","content":"记录 npm yarn pnpm 相关踩坑 npm 安装 node-sass 经常失败 虽说 node-sass 已经被淘汰，现在都用 dart-sass，但你总会遇到一些老古董项目的 在使用 npm 安装依赖时，遇到含有二进制文件的依赖包会经常失败，比如：node-sass、puppeteer 等 为什么配置了国内镜像源安装也会失败？ 配置的国内镜像..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-25T14:00:36.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"development"}],["meta",{"property":"article:modified_time","content":"2024-12-25T14:00:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"node-sass 安装失败解决方案\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-25T14:00:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.37,"words":411},"git":{"updatedTime":1735135236000},"autoDesc":true,"filePathRelative":"1.前端/10.开发/node-sass.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"90af2f","sort":10,"name":"开发"}],"bulletin":false}');export{r as comp,d as data};