import{_ as d,c as p,a as h,d as k,w as e,b as i,e as a,r,o}from"./app-BAyfK_aM.js";const g={};function c(y,s){const t=r("CodeTabs");return o(),p("div",null,[s[19]||(s[19]=h(`<p>随着 <code>Nodejs v16</code> 成为长期稳定支持的版本，<code>ESM</code> 也随之成为 <code>NodeJs</code> 正式支持的标准化模块系统，这允许我们通过 <code>ESM</code> 来开发我们的 <code>NodeJs</code> 项目，并在项目中通过<code>ESM</code> 来导入其他的<code>ESM</code>包。</p><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><p>我们以新建一个 NodeJs 项目为例， 它有如下的结构：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">./my-esm-package</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lib</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   ├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> resolve.js</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> index.js</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">└──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个项目的功能是导出一个 resolve 方法，是 <code>path.resolve</code> 的封装实现。</p>`,5)),k(t,{id:"14",data:[{id:"lib/index.js"},{id:"lib/resolve.js"}]},{title0:e(({value:l,isActive:n})=>s[0]||(s[0]=[a("lib/index.js")])),title1:e(({value:l,isActive:n})=>s[1]||(s[1]=[a("lib/resolve.js")])),tab0:e(({value:l,isActive:n})=>s[2]||(s[2]=[i("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," *"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./resolve.js"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"})])],-1)])),tab1:e(({value:l,isActive:n})=>s[3]||(s[3]=[i("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," path"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"path"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),i("span",{class:"line"}),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," const"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," resolve"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," (..."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"arg"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," path"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"resolve"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(..."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"arg"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[20]||(s[20]=i("h2",{id:"package-json",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#package-json"},[i("span",null,"package.json")])],-1)),s[21]||(s[21]=i("p",null,[a("在 "),i("code",null,"package.json"),a(" 中，我们需要进行以下声明：")],-1)),i("ul",null,[s[15]||(s[15]=i("li",null,[i("p",null,[a("声明 "),i("code",null,"type"),a(" 字段值为 "),i("code",null,"module")]),i("p",null,[a("这个字段声明了你的包将作为一个 "),i("code",null,"ECMAScript module"),a(" 被"),i("code",null,"NodeJs"),a(" 加载并解析，并允许使用"),i("code",null,".mjs"),a("格式的文件。")])],-1)),i("li",null,[s[13]||(s[13]=i("p",null,[a("声明 "),i("code",null,"exports"),a(" 字段")],-1)),s[14]||(s[14]=i("p",null,"该字段描述了 项目如何导出模块给到其他包使用。",-1)),i("ul",null,[i("li",null,[s[6]||(s[6]=i("p",null,"默认导出",-1)),k(t,{id:"49",data:[{id:"package.json"}]},{title0:e(({value:l,isActive:n})=>s[4]||(s[4]=[a("package.json")])),tab0:e(({value:l,isActive:n})=>s[5]||(s[5]=[i("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"exports"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/index.js"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[7]||(s[7]=i("p",null,[a("即当使用"),i("code",null,"import { resolve } from 'my-esm-package'"),a("时，默认引入的文件是 "),i("code",null,"lib/index.js"),a("。")],-1))]),i("li",null,[s[10]||(s[10]=i("p",null,"导出多个模块",-1)),k(t,{id:"62",data:[{id:"package.json"}]},{title0:e(({value:l,isActive:n})=>s[8]||(s[8]=[a("package.json")])),tab0:e(({value:l,isActive:n})=>s[9]||(s[9]=[i("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"exports"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"."),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/index.js"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"resolve"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/resolve.js"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[11]||(s[11]=h("<p>声明了导出了两种模块：一个是默认导出，使用<code>&quot;.&quot;</code> 作为 key；一个是具名导出。</p><p>当使用<code>import { resolve } from &#39;my-esm-package&#39;</code>时，默认引入的文件是 <code>lib/index.js</code>。</p><p>当使用<code>import { resolve } from &#39;my-esm-package/resolve&#39;</code> 时，引入的文件是 <code>lib/resolve.js</code>。</p>",3))]),s[12]||(s[12]=i("li",null,[i("p",null,[i("code",null,"exports"),a(" 还支持其他形式的值，这里暂不赘述。")])],-1))])]),s[16]||(s[16]=h("<li><p>声明 <code>engines</code> 字段</p><p>由于 <code>Nodejs</code> 并不是全版本支持<code>esm</code>的，而是从<code>v14.16.0</code>版本开始试验性的支持，并到了<code>v16</code>版本才作为正式支持， 且当前<code>v16</code>版本作为目前的长期稳定支持的版本。这个项目运行环境的<code>NodeJs</code> 版本，最低应该推荐使用 <code>v16</code> 以上的版本。 即它的值应该为 <code>{ &quot;node&quot;: &quot;&gt;=16&quot; }</code></p></li>",1))]),s[22]||(s[22]=i("p",null,[a("到这里，这个项目的"),i("code",null,"package.json"),a(" 文件，包含以下内容:")],-1)),k(t,{id:"96",data:[{id:"package.json"}]},{title0:e(({value:l,isActive:n})=>s[17]||(s[17]=[a("package.json")])),tab0:e(({value:l,isActive:n})=>s[18]||(s[18]=[i("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"{")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"name"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"my-esm-package"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"description"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"My first esm package."),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"type"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"module"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"exports"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"."),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/index.js"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"resolve"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./lib/resolve.js"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  },")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'  "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"engines"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'    "'),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"node"),i("span",{style:{"--shiki-light":"#99841877","--shiki-dark":"#B8A96577"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},">=16"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"')]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[23]||(s[23]=h(`<h2 id="编写项目代码" tabindex="-1"><a class="header-anchor" href="#编写项目代码"><span>编写项目代码</span></a></h2><ol><li><p>由于是一个 <code>esm</code> 项目，所以理所当然的不能项目中使用 <code>require()</code>/<code>module.exports</code> 来导入导出模块。 而是应该全部使用<code>import</code>/<code>export</code> 的方式来导入导出模块。</p></li><li><p>不需要在项目代码中 使用 <code>use strict</code>。</p></li><li><p>由于 <code>esm</code> 项目中，<code>NodeJs</code> 不再支持 <code>__dirname</code>/<code>__filename</code>，所以有相关场景需要使用时，需要使用其他的方式来实现相同功能：</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> basename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">path</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fileURLToPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">url</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __dirname</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">undefined</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    ?</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __dirname</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fileURLToPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> _filename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __filename</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">undefined</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    ?</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> __filename</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> basename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fileURLToPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">meta</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript</span></a></h2><p>如果在项目中使用了 <code>TypeScript</code>，那么除了需要遵循以上的内容，还需要在 <code>tsconfig.json</code> 配置文件中补充以下配置：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">module</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">node16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">moduleResolution</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">node16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且，应该将 <code>.ts</code> 文件，编译为 <code>.js</code> 文件，<code>package.json</code> 配置的 <code>exports</code> 导出的，是编译后的 <code>.js</code> 文件。</p><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后"><span>最后</span></a></h2><p>当完成了以上步骤，就可以得到一个<code>NodeJs ESM</code> 项目。它也只能在另一个支持 <code>esm</code> 的项目中使用。</p>`,9))])}const u=d(g,[["render",c],["__file","index.html.vue"]]),v=JSON.parse(`{"path":"/article/7jzjudus/","title":"在NodeJs项目中使用ECMAScript module","lang":"zh-CN","frontmatter":{"title":"在NodeJs项目中使用ECMAScript module","createTime":"2022/06/17 02:04:57","author":"李嘉明","tags":["node"],"permalink":"/article/7jzjudus/","head":[["script",{"type":"text/javascript"},"window._hmt = window._hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?49ebcb8d1abfcde890ef6f320a101db7","async":true}],["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/7jzjudus/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"在NodeJs项目中使用ECMAScript module"}],["meta",{"property":"og:description","content":"随着 Nodejs v16 成为长期稳定支持的版本，ESM 也随之成为 NodeJs 正式支持的标准化模块系统，这允许我们通过 ESM 来开发我们的 NodeJs 项目，并在项目中通过ESM 来导入其他的ESM包。 创建项目 我们以新建一个 NodeJs 项目为例， 它有如下的结构： 这个项目的功能是导出一个 resolve 方法，是 path.res..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在NodeJs项目中使用ECMAScript module\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]],"description":"随着 Nodejs v16 成为长期稳定支持的版本，ESM 也随之成为 NodeJs 正式支持的标准化模块系统，这允许我们通过 ESM 来开发我们的 NodeJs 项目，并在项目中通过ESM 来导入其他的ESM包。 创建项目 我们以新建一个 NodeJs 项目为例， 它有如下的结构： 这个项目的功能是导出一个 resolve 方法，是 path.res..."},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"package.json","slug":"package-json","link":"#package-json","children":[]},{"level":2,"title":"编写项目代码","slug":"编写项目代码","link":"#编写项目代码","children":[]},{"level":2,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"isBlogPost":true,"readingTime":{"minutes":2.59,"words":776},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/5.Node/在node项目中使用esm.md","categoryList":[{"type":1,"name":"前端"},{"type":5,"name":"Node"}]}`);export{u as comp,v as data};