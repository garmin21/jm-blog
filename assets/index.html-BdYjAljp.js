import{_ as e,c as i,a as n,o}from"./app-CQLjC5Lq.js";const a={};function r(p,t){return o(),i("div",null,t[0]||(t[0]=[n('<div class="hint-container tip"><p class="hint-container-title">提问</p><ul><li>什么是外边距合并？</li><li>什么情况下会发生外边距合并？</li></ul></div><h2 id="外边距合并" tabindex="-1"><a class="header-anchor" href="#外边距合并"><span>外边距合并</span></a></h2><p>块元素的上外边距和下外边距有时候会发生合并，其大小取其中绝对值最大的值，这种行为叫做外边距合并。</p><h2 id="发生外边距合并的场景" tabindex="-1"><a class="header-anchor" href="#发生外边距合并的场景"><span>发生外边距合并的场景</span></a></h2><p><strong>浮动元素</strong> 和 <strong>绝对定位元素</strong> 的外边距不会发生合并。这是因为触发了 <strong>块格式化上下文</strong> 。</p><ol><li>相邻元素之间的外边距会发生合并（如果后一个元素需要清除前面的浮动，则不一定发生合并）。</li><li>父元素与其第一个子元素之间不存在边框、内边距、行内内容、没有创建 <strong>块格式化上下文</strong>、没有清除浮动；或者父元素与其最后一个子元素之间不存在边框、内边距、行内内容、heigh、min-height、max-height，那么子元素的外边距会溢出到父元素外面。</li><li>如果一个块级元素不包含任何内容，并且在不存在边框、内边距、行内内容、heigh、min-height，则该元素的上下外边距会发生合并。</li></ol><p>三种情况的外边距合并是可以组合产生更加复杂的外边距合并情况的。</p><p><em>如果外边距合并的值都是负值，则合并的值为最小的外边距的值。</em></p><p><em>如果发生外边距合并的值包含负值，则合并后的值为最大的正外边距与最小的负外边距之和。</em></p>',9)]))}const l=e(a,[["render",r],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/interview-question/bnjq8wxb/","title":"外边距合并","lang":"zh-CN","frontmatter":{"title":"外边距合并","createTime":"2022/04/12 03:50:43","author":"李嘉明","permalink":"/interview-question/bnjq8wxb/","description":"提问 什么是外边距合并？ 什么情况下会发生外边距合并？ 外边距合并 块元素的上外边距和下外边距有时候会发生合并，其大小取其中绝对值最大的值，这种行为叫做外边距合并。 发生外边距合并的场景 浮动元素 和 绝对定位元素 的外边距不会发生合并。这是因为触发了 块格式化上下文 。 相邻元素之间的外边距会发生合并（如果后一个元素需要清除前面的浮动，则不一定发生合...","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/interview-question/bnjq8wxb/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"外边距合并"}],["meta",{"property":"og:description","content":"提问 什么是外边距合并？ 什么情况下会发生外边距合并？ 外边距合并 块元素的上外边距和下外边距有时候会发生合并，其大小取其中绝对值最大的值，这种行为叫做外边距合并。 发生外边距合并的场景 浮动元素 和 绝对定位元素 的外边距不会发生合并。这是因为触发了 块格式化上下文 。 相邻元素之间的外边距会发生合并（如果后一个元素需要清除前面的浮动，则不一定发生合..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"外边距合并\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.4,"words":420},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"notes/面试题/CSS/外边距合并.md","bulletin":false}');export{l as comp,c as data};