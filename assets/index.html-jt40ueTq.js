import{_ as h,c as k,a as t,d as e,w as n,r,o as d,b as i,e as s}from"./app-BAyfK_aM.js";const p={};function g(y,a){const l=r("CodeDemo");return d(),k("div",null,[a[1]||(a[1]=t(`<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Custom_Highlight_API" target="_blank" rel="noopener noreferrer">MDN</a></p><p>CSS 自定义高亮 API 提供了一种方法，可以通过使用 JavaScript 创建范围并使用 CSS 定义样式来设置文档中任意文本范围的样式。</p><p>使用 CSS 自定义高亮 API 设置网页上文本范围的样式有四个步骤：</p><ol><li>创建 Range 对象。</li><li>为这些范围创建 Highlight 对象。</li><li>使用 HighlightRegistry 进行注册。</li><li>使用 ::highlight() 伪元素定义高亮样式。</li></ol><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 实例化一个 Highlight 对象</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> highlight</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Highlight</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">range1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> range2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 注册 Highlight 高亮</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">CSS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">highlights</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">user-1-highlight</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> highlight</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 从注册表中删除一个高亮显示。</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">CSS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">highlights</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">delete</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">user-1-highlight</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 清除注册表。</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">CSS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">highlights</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">clear</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/* 高亮样式 */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::highlight(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">user-1-highlight</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">) </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> pink</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> black</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果"><span>效果</span></a></h2>`,8)),e(l,{id:"code-demo-39",type:"normal",title:"%E9%AB%98%E4%BA%AE%E6%A1%88%E4%BE%8B",code:"eJx1Vltv00gU/iuH7EMcUdzuyz6Ulhe20j4gQJSHlQhaTe1pM4tjB8+4gFClwm4v6RXUC9q20lLUmyp6QVSQpBd+zHqc9Gn/wp7xOE7TLlGb2DPnfOd83zlz7JcZi/NMd6a7u8CGCg7+C4NT4luFGz7lgSN4Dl7mXYABYj0Z8r3AtW9YnuP53fDDYNdPN9VWcv+swATFhZG8m+nIFETRQdwe5pYCAeJFifbmM4I+F/kMdN7Kuz02GwbLIZzjuhcI6uczuAxwx/NpsQNYiQdFsBU0cCaAFKnASC6nlqAi8IHYrMQ4s5g7BNRhwoS73gDjwOnTgAH1fc9XcD4tBTYjrk2oRqNFIJYVcFIMODBBngYUisxlRQKKNnKwhAdWUFQbVlBiNhoJ2qHAeMAtjCqAPi85zCIDXpKnq8wJImOKvh+UBAMW+NSE+w6xKBHgDViEWgTXKedUYRGBAa6hEJ2oBDJHzX5XlVAcMYBDi9QV0ItJYy54aaK5/6IfNzA/38iasWjZHCquXZS4dz2bcnR69BiXB1E6w0HZGK503cSfniauiUQdO7Y2HeoOiQJuX7+e1FrjubiLjlc9HjGFDsAGwVBGpvp6iBWG3t5erAKuPOz79eFvd+/93JcgQis7sxTwQuynUgfAdsG/vPs9no/i3lHuj7M5k9h23zBa3WFcUJf6hoLIxk2WjUtk0OEc9N5qhu3shKgydv7XBoTVaVmera/8CdHnHTk+01jf0Sa3+/vNtPm5aTnY/obOrSkFF75SYtgUxB+iwhwmTkBN4bOikTOFd8d7Rv3bhNPUTUlzDb1S+qoRsWvdZB8Zt9B94g7FVUs1avqYRVIyDOrEjIwUKqZ1/mpWzo1H5dForYysouWJaO1jY+p1/XX135OZaP6NnF9WvOXpAvKGi/tYU+gIjzfl/FQcM9mU42Nyv9oKQp1YUf1Rdt24ZKqL256L6ot26qnxSC7XTuBl7N2hwo5cLE7CRO6vhNVytPjlfHVczlTPx2bl5KHce1f/uKWIxQzDynT0fkIZvJlsOWv9mGszq9X2V5Dlyajcno7+3mwcfEDA8HS2frrfslMnhGNhxX1PYXS1Q4SVWWygaHNFq6Myqy1hQnJjRR6+RaXD02/1xR01/RwK8my3PncAuCzndxtbr9Kg9aMP8mRJh5aH82FtLhH9fOmbrG0ph8NPYWW0vnoUlbcb6zMaqZ3N6UI0+bZxtiDHNtE0rOxqkf4ZfY0S0OcgN7YRuL5XVvBdEH09llPvMWOQk++w3cPKHsjql7CyGGGU5cMWazl60oqkmRjpZk9cvWRMXGjotgJgdN2/ZnxzbxD9/Y40QvNc6I86HYkPDowbP+ZgwKfkyc2YpNatfIZ5h7VxQFkaXz/LidplQRBG110PlBivPcyFoupo19VBbs67lmU8ftpKXpOTq/K4pk9ma08f4TRu3Ns67qWmbjvZGN6lz+CBuk4HRAKo1kxORb9KFQ86Pveu8kit+ly7ZdPG5pKDzjP2u8izZRVfphMSCTdm/pCrR5q27q1fmiNRHlQbn9axydomYvyO8EC/IqSmCdX03jBNU083c9Ahwsg1M1CFXttJBzF2pr7+XtBLMxq1MLLtrylZbLb/zSl5ysTTaZA46uGrljIj/wE6CI3f"},{default:n(()=>a[0]||(a[0]=[i("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"::highlight("),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"search-results"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},") "),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," #"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"f06"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," white"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"input"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," type"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"text"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"outer"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi error")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"  repudiandae dolorem accusamus itaque minima architecto cumque cupiditate,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"  suscipit explicabo ipsum numquam a corrupti iure. Placeat obcaecati esse")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"  atque!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," element"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," document"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"querySelector"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},".outer"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," textNodes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," [];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"for"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ("),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"let"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," i"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 0"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," i"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," element"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"childNodes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"length"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," i"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"++"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," node"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," element"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"childNodes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"i"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"  if"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"node"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"nodeType"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ==="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," Node"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"TEXT_NODE"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    textNodes"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"push"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"node"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"document"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"querySelector"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"[type=text]"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"addEventListener"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"  '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"input"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ev"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"    // 清除 之前的 注册表")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    CSS"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"highlights"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"clear"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," str"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ev"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"target"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"value"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"trim"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"toLowerCase"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"    if"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ("),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"!"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"str"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"      return"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ranges"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," textNodes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"el"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"        // 遍历所有的文本节点，提取除 当前 文本节点 el ,以及 text 文本内容")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"        el"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"        text"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," el"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"textContent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"toLowerCase"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      }))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(({"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," text"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," el"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," })"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"        // 定义收集匹配到字符的所有下标集合")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"        const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," indices"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," [];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"        // 定义开始查询的位置")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"        let"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," startPos"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 0"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"        // 不清楚内容到底有多少，使用 while 循环 ，只要查询的索引位置小于 文本长度，就一直执行循环")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"        // 当我输入一个字符。index 大于等于 0 添加到 列表中 并且更新 startPos 值")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"        while"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"startPos"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," text"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"length"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"          const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," index"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," text"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"indexOf"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"str"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," startPos"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"          if"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"index"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ==="),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," -"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," break"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";"),i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," // 只要找到了 就跳出循环")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          indices"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"push"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"index"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          startPos"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," index"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," str"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"length"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"        // 为创建 range")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"        return"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," indices"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"index"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"          const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," range"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," new"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," Range"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          range"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"setStart"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"el"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," index"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"          range"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"setEnd"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"el"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," index"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," str"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"length"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"          return"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," range"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      });")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"    // 为范围创建一个Highlight对象。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," searchResultsHighlight"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," new"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," Highlight"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(..."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ranges"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"flat"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"    // 在注册表中注册Highlight对象。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    CSS"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"highlights"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"set"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"search-results"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," searchResultsHighlight"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"  false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const A=h(p,[["render",g],["__file","index.html.vue"]]),B=JSON.parse(`{"path":"/article/wkddn2cw/","title":"Highlight CSS 自定义高亮 API","lang":"zh-CN","frontmatter":{"title":"Highlight CSS 自定义高亮 API","author":"李嘉明","createTime":"2024/07/12 16:41:01","permalink":"/article/wkddn2cw/","tags":["BOM"],"head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/wkddn2cw/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"Highlight CSS 自定义高亮 API"}],["meta",{"property":"og:description","content":"MDN CSS 自定义高亮 API 提供了一种方法，可以通过使用 JavaScript 创建范围并使用 CSS 定义样式来设置文档中任意文本范围的样式。 使用 CSS 自定义高亮 API 设置网页上文本范围的样式有四个步骤： 创建 Range 对象。 为这些范围创建 Highlight 对象。 使用 HighlightRegistry 进行注册。 使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"BOM"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Highlight CSS 自定义高亮 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"MDN CSS 自定义高亮 API 提供了一种方法，可以通过使用 JavaScript 创建范围并使用 CSS 定义样式来设置文档中任意文本范围的样式。 使用 CSS 自定义高亮 API 设置网页上文本范围的样式有四个步骤： 创建 Range 对象。 为这些范围创建 Highlight 对象。 使用 HighlightRegistry 进行注册。 使用..."},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"效果","slug":"效果","link":"#效果","children":[]}],"isBlogPost":true,"readingTime":{"minutes":1.75,"words":526},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/17.BOM/Highlight.md","categoryList":[{"type":1,"name":"前端"},{"type":17,"name":"BOM"}]}`);export{A as comp,B as data};