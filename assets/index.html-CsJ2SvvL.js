import{_ as e,c as i,a as p,o}from"./app-Bx7wUcyz.js";const n={};function r(a,t){return o(),i("div",null,t[0]||(t[0]=[p('<div class="hint-container tip"><p class="hint-container-title">提问</p><p>如何做前端性能优化？</p></div><p>前端性能优化主要是为了提高页面的加载速度，优化用户的访问体验。</p><p>为了能够提高页面的加载速度，就需要从资源的数量、大小、加载方式、加载时间等方面去优化，包括：</p><ul><li><p>资源压缩与合并</p><p>对 HTML、CSS、JS 进行压缩和文件合并； 对图片进行压缩、使用雪碧图等；</p><p>资源压缩后可以减少资源的大小，从而提高加载速度；</p><p>而对文件进行合并，可以减少网站 http 请求的次数，让更多的资源能够并发完成加载。</p></li><li><p>对非核心代码使用异步加载。</p><p>对于首屏渲染不需要使用到的代码，使用异步加载的方式，等待首屏渲染完成后，再进行加载。 可以使用 defer、 async 属性，或者动态脚本的方式进行脚本的异步加载。</p></li><li><p>避免使用 <code>@import</code> 加载 CSS 资源</p></li><li><p>使用 CDN 服务，对内容进行分发，提高用户对资源请求的相应速度。</p><p>还可以更细致的将 js、css 资源放在一个 CDN 域名，将图片资源放在另一个 CDN 域名， 通过多个域名并发加载更多的资源，以减少最终等待时间。</p></li><li><p>利用 浏览器/HTTP 缓存</p><p>对 JS、CSS、图片等资源，使用强缓存策略，使用打包工具对这些资源文件进行哈希重命名。 强缓存过的资源，二次访问时不会再发起网络请求，而是直接从浏览器缓存区读取。</p></li><li><p>服务器开启 GZip/Brotli 压缩，进一步减少请求文件大小</p></li></ul>',4)]))}const c=e(n,[["render",r],["__file","index.html.vue"]]),s=JSON.parse('{"path":"/interview-question/jzx0jvhn/","title":"前端性能优化","lang":"zh-CN","frontmatter":{"title":"前端性能优化","createTime":"2022/04/14 04:50:01","author":"李嘉明","permalink":"/interview-question/jzx0jvhn/","description":"提问 如何做前端性能优化？ 前端性能优化主要是为了提高页面的加载速度，优化用户的访问体验。 为了能够提高页面的加载速度，就需要从资源的数量、大小、加载方式、加载时间等方面去优化，包括： 资源压缩与合并 对 HTML、CSS、JS 进行压缩和文件合并； 对图片进行压缩、使用雪碧图等； 资源压缩后可以减少资源的大小，从而提高加载速度； 而对文件进行合并，可...","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/interview-question/jzx0jvhn/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"前端性能优化"}],["meta",{"property":"og:description","content":"提问 如何做前端性能优化？ 前端性能优化主要是为了提高页面的加载速度，优化用户的访问体验。 为了能够提高页面的加载速度，就需要从资源的数量、大小、加载方式、加载时间等方面去优化，包括： 资源压缩与合并 对 HTML、CSS、JS 进行压缩和文件合并； 对图片进行压缩、使用雪碧图等； 资源压缩后可以减少资源的大小，从而提高加载速度； 而对文件进行合并，可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端性能优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.51,"words":453},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/面试题/其他/前端性能优化.md","bulletin":false}');export{c as comp,s as data};