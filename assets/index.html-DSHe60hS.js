import{_ as e,c as i,a,o}from"./app-BAyfK_aM.js";const c={};function s(n,t){return o(),i("div",null,t[0]||(t[0]=[a('<div class="hint-container tip"><p class="hint-container-title">提问</p><p>谈谈你对 this 对象的理解</p></div><p><code>this</code> 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象， 在实际开发中，this 的指向可以通过四种调用模式来判断。</p><ul><li>函数调用模式。当一个函数不是一个对象的属性时，直接作为函数来调用，this 指向全局对象。</li><li>方法调用模式。如果一个函数作为一个对象的方法来调用时，this 指向这个对象。</li><li>构造器调用模式。如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。</li><li>apply、call、bind 调用模式，这三个方法都可以显式的指向调用函数的 this 指向。 <ul><li><code>apply</code> 方法接受两个参数，一个是 this 绑定的对象，一个是参数数组。</li><li><code>call</code> 方法接受的参数，第一个参数是 this 绑定的对象，后面其余的参数是传入函数执行的参数。</li><li><code>bind</code> 方法通过传入一个对象，返回一个 this 绑定了传入对象的函数。</li></ul></li></ul>',3)]))}const d=e(c,[["render",s],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/defensive-javascript/wdcjym47/","title":"this对象","lang":"zh-CN","frontmatter":{"title":"this对象","createTime":"2022/04/15 04:11:13","author":"李嘉明","permalink":"/defensive-javascript/wdcjym47/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/defensive-javascript/wdcjym47/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"this对象"}],["meta",{"property":"og:description","content":"提问 谈谈你对 this 对象的理解 this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象， 在实际开发中，this 的指向可以通过四种调用模式来判断。 函数调用模式。当一个函数不是一个对象的属性时，直接作为函数来调用，this 指向全局对象。 方法调用模式。如果一个函数作为一个对象的方法来调用时，this 指向这个对象。 构造器调用模..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"this对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"提问 谈谈你对 this 对象的理解 this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象， 在实际开发中，this 的指向可以通过四种调用模式来判断。 函数调用模式。当一个函数不是一个对象的属性时，直接作为函数来调用，this 指向全局对象。 方法调用模式。如果一个函数作为一个对象的方法来调用时，this 指向这个对象。 构造器调用模..."},"headers":[],"readingTime":{"minutes":1.03,"words":308},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/JAVASCRIPT学习简记/基础篇/this对象.md"}`);export{d as comp,p as data};