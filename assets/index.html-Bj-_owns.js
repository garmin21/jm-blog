import{_ as e,c as i,a,o as p}from"./app-C_XscStE.js";const o={};function n(r,t){return p(),i("div",null,t[0]||(t[0]=[a('<div class="hint-container tip"><p class="hint-container-title">提问</p><ol><li>http/2</li><li>http2 有什么特性？</li></ol></div><h2 id="http-2" tabindex="-1"><a class="header-anchor" href="#http-2"><span>HTTP/2</span></a></h2><p>HTTP/2 是对 HTTP/1.1 的升级，对 HTTP/1.1 做了优化。</p><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2><ul><li><p>二进制协议</p><p>在 http/1.1 版中，报文的头信息必须是文本，数据体可是是文本或者二进制。 而在 HTTP/2 中，头信息和数据体都是二进制，并且统称为<code>帧</code>。</p></li><li><p>多路复用</p><p>HTTP/2 复用 TCP 连接，客户端和服务器都可以同一个 TCP 连接中并发请求或响应，且之间互不干扰。</p></li><li><p>数据流</p><p>每个请求或响应的所有数据包，称为一个数据流。</p></li><li><p>头信息压缩</p><p>头信息使用 gzip 或 compress 压缩后再发送；客户端和服务器会同时维护一张头信息表，所有字段都会存入这张表，并生成 一个索引号，对于相同字段，只发送索引号。</p></li><li><p>服务器推送</p><p>允许服务器未经请求，主动向客户端发送资源。</p></li></ul>',5)]))}const l=e(o,[["render",n],["__file","index.html.vue"]]),s=JSON.parse(`{"path":"/interview-question/yiutzl7y/","title":"http2","lang":"zh-CN","frontmatter":{"title":"http2","createTime":"2022/04/18 06:53:05","author":"李嘉明","permalink":"/interview-question/yiutzl7y/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/interview-question/yiutzl7y/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"http2"}],["meta",{"property":"og:description","content":"提问 http/2 http2 有什么特性？ HTTP/2 HTTP/2 是对 HTTP/1.1 的升级，对 HTTP/1.1 做了优化。 特性 二进制协议 在 http/1.1 版中，报文的头信息必须是文本，数据体可是是文本或者二进制。 而在 HTTP/2 中，头信息和数据体都是二进制，并且统称为帧。 多路复用 HTTP/2 复用 TCP 连接，客户..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"http2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"提问 http/2 http2 有什么特性？ HTTP/2 HTTP/2 是对 HTTP/1.1 的升级，对 HTTP/1.1 做了优化。 特性 二进制协议 在 http/1.1 版中，报文的头信息必须是文本，数据体可是是文本或者二进制。 而在 HTTP/2 中，头信息和数据体都是二进制，并且统称为帧。 多路复用 HTTP/2 复用 TCP 连接，客户..."},"headers":[{"level":2,"title":"HTTP/2","slug":"http-2","link":"#http-2","children":[]},{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]}],"readingTime":{"minutes":0.84,"words":253},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/面试题/计算机网络/http2.md"}`);export{l as comp,s as data};