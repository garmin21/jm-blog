import{_ as i,c as a,a as e,o as t}from"./app-Bx7wUcyz.js";const n={};function p(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<p>微前端 是最近比较新兴的一个话题，它不具体指某个库某个框架，而是一个思想，一种概念，运用这种思想， 根据自身的需求，从而实现适用于自身的 微前端 。</p><blockquote><p>本文根据最近我在公司内部举行的 微前端技术解决方案 分享而写。 提供的 微前端方案 也应用于公司内部的项目，并取得了良好的反馈，获得广泛好评。 本文不具体谈如何实现微前端，仅讲述微前端的概念，期望能够通过本文理解微前端。</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>微前端 目前在行业内是一个新兴的思想。</p><p>诞生这个思想的背景是，在公司内部，常常会有一类项目，这类项目很大、很重， 涉及的业务内容多而杂，还涉及了跨部门共同维护，积累的庞大的技术债 等各种问题。 这类项目在维护成本上、部署成本上等，都会花费巨大的开销，前端开发人员对于维护这类项目，苦不堪言， 急需找到解决这类问题的方案。</p><p>基于这样的背景下，开始探讨 解决方案的可行性， 微前端 正是基于此 开始慢慢 出现在人们的视野中。</p><h2 id="现状" tabindex="-1"><a class="header-anchor" href="#现状"><span>现状</span></a></h2><h3 id="发展历程" tabindex="-1"><a class="header-anchor" href="#发展历程"><span>发展历程</span></a></h3><p>在 Web 的发展初期，还没有所谓的前端的概念，网页的内容也相对简单，大多仅涉及文字图片信息的展示和表单内容， 这些工作可能网站负责人自己就包办了。 然后微软推出了 <strong>Ajax</strong> 技术，引起了网页的技术变革，从此网站开始具备了动态交互性， 能够在网页发起请求动态获取服务器的内容，这丰富了网页的可交互性，网页的开发也从 UI 界面和表单交互，进一步增加了 数据和逻辑的开发，前端也慢慢的被划分一个相对独立的职能。</p><p>而伴随着 nodejs 的出现，以及 angular 的出现，还包括 vue/react 等库，以及建立在 nodejs 上的生态， 包括 grunt、gulp、webpack 等工具的诞生，前端进入了一个喷井式爆发的时期，也是我们所处的时期。前端越来越专业化， 包含的技术内容越来越丰富，依托于 nodejs 以及众多的技术框架等，向着工程化进一步的发展，前端项目也越来越大。</p><h3 id="浮现的问题" tabindex="-1"><a class="header-anchor" href="#浮现的问题"><span>浮现的问题</span></a></h3><p>你是否维护过一个可能有着四五年以上历史的项目？是否维护过一个糅杂了各种各样的库的项目？ 是否维护过一个多个公司部门参与的跨团队联合开发的项目？</p><p>对于很多人来说，入职的某个公司，最怕被安排去维护一个这样的项目。因为每一次维护迭代，就如同开盲盒一样， 永远不知道有什么惊喜在等着自己。</p><p>对于这类项目，可能存在的问题包括：</p><ul><li>跨部门，夸团队联合开发，如何沟通？如何协作？</li><li>业务线多，页面多，如何管理？</li><li>如何进行代码管理？</li><li>如何进行分支管理？</li><li>多部门进行迭代，如何把控版本？</li><li>存在发布冲突，如何解决？</li><li>如何进行测试？</li><li>如何管理公共代码？</li><li>...</li></ul><p>可能改动某一行代码，都会带来意想不到的结果，种种问题的积累，技术债的、业务债的，使得项目越来越臃肿，越来越难以维护。</p><p>亟需寻找一种方案，能够解决这些问题。</p><h3 id="iframe-嵌入" tabindex="-1"><a class="header-anchor" href="#iframe-嵌入"><span>iframe 嵌入</span></a></h3><p>于是，在大多数时候，我们不得不去选择通过 iframe 嵌入 的方式，先把臃肿的项目一点一点的拆开给回各个部门或者团队自行维护， 再提供一个 系统门户应用，用 iframe 嵌入 的方式，加上维护一个菜单列表与其他项目入口链接的映射，来糅合成一个 网站应用。</p><p><img src="//assets.processon.com/chart_image/630f92445653bb0c5d1040ab.png" alt="iframe嵌入"></p><p>通过 iframe 嵌入，在一定程度上，满足了 各部门各团队各业务线 独立开发独立部署的需求，只需要提供对应的页面链接就可以接入到 整个系统中。但也存在着一些问题</p><h4 id="安全问题" tabindex="-1"><a class="header-anchor" href="#安全问题"><span>安全问题</span></a></h4><p>然而，我们知道， iframe 是存在安全问题的，如果攻击者使用 iframe 访问一个 未知来源的链接，有可能被注入恶意脚本，从而盗取 系统的隐私信息，这需要我们去严格配置 SCP，以及配置 sandbox，尽可能的保证 iframe 的安全性。</p><h4 id="资源加载过多" tabindex="-1"><a class="header-anchor" href="#资源加载过多"><span>资源加载过多</span></a></h4><p>而由于仅需要提供链接就可以嵌入，那么对于各自的项目来说，灵活度就很高，各个项目可以随意的选择各种技术框架来实现自己的业务， 又或者即使使用了相同的技术框架，但各项目的资源相对独立，对于整个系统而言，需要加载的资源量会十分庞大， 从而导致了页面访问速度变慢，经常会出现页面部分区域白屏等待时间过长等，这也带来了体验问题。</p><h4 id="访问地图丢失" tabindex="-1"><a class="header-anchor" href="#访问地图丢失"><span>访问地图丢失</span></a></h4><p>由于 iframe 嵌入的站点，独享访问历史记录，与外部的历史记录是相互独立的，即通过浏览器的 前进/回退 按钮来访问历史记录并 不能得到预期的结果，这在一定程度上影响了用户的操作。</p><h2 id="寻找解决方案" tabindex="-1"><a class="header-anchor" href="#寻找解决方案"><span>寻找解决方案</span></a></h2><p>有没有什么其他的方案，来进一步解决这些问题呢？</p><p>首先我们明确的知道，单项目管理目前来看不是一个可行的方案，需要在多项目管理上寻求解决方案。</p><h3 id="多项目公共业务组件" tabindex="-1"><a class="header-anchor" href="#多项目公共业务组件"><span>多项目公共业务组件</span></a></h3><p>对于多数的大型系统项目而言，大体上都采用以下布局结构：</p><p><img src="//assets.processon.com/chart_image/6311781d079129320755bec5.png" alt="微前端-2"></p><p>主体布局结构包括：</p><ul><li>导航栏 （可选）</li><li>左侧菜单栏 （可选）</li><li>内容区域</li><li>页脚 (可选)</li></ul><p>在这种布局结构下，各个业务板块通常通过 导航栏 或者 左侧菜单栏 进行 导航切换，在 内容区域 展示 业务板块。 即，总体上看，对于业务来说，导航栏、左侧菜单栏、页脚，这几个都是可能 共同的，主要的不同点在于 内容区域。</p><p>那么我们可以把 共同的部分，如 导航栏、左侧菜单栏、页脚 这几个部分，抽离为公共业务组件， 对于每个业务板块，独立为单独的项目进行开发维护，并在项目中引入这些 公共业务组件。 公共业务组件其中主要负责之一是提供 链接到各个业务板块。</p><p><img src="//assets.processon.com/chart_image/631301e65653bb40f833b613.png" alt="微前端-3"></p><p>这种方案具有如下的优点：</p><ul><li>整体系统根据业务板块拆分为了多个项目；</li><li>实现了项目的独立性，可独立进行开发、发布；</li><li>通过在主项目重载渲染，实现类似 <strong>SPA 应用</strong> 的访问体验；</li></ul><p>但同样也带来了新的问题：</p><ul><li><p>公共业务组件</p><ul><li>公共业务组件 如何进行管理；</li><li>公共业务组件 如何在业务板块项目之间保持同步更新；</li></ul></li></ul><p>以及没有解决的问题：</p><ul><li><p>资源加载过多；</p><p>各个业务板块项目重复加载公共业务组件，重复加载各种库资源。</p></li><li><p>项目无法实现统一管理；</p></li></ul><h3 id="主项目重载业务项目资源" tabindex="-1"><a class="header-anchor" href="#主项目重载业务项目资源"><span>主项目重载业务项目资源</span></a></h3><p>在上一个方案中，公共业务组件的引入解决了一部分问题，也带来了一部分问题，如何把公共业务组件进行统一管理，并保持一致性？</p><p>我们回到 iframe 方案，在这个 iframe 方案中，有一个主项目用于管理这些 菜单栏、导航栏等。 同样的，可以借鉴这个思路， 也抽象一个主项目，用于管理这些 公共业务组件，然后寻找另一种方式来加载渲染其他的业务板块项目。</p><p>我们知道，业务板块的项目，也是通过链接去访问的，而每个链接都对应着一个 html 资源文件，通过加载这个资源，以及 HTML 内的 css 资源、js 资源等来渲染页面。那么，我们可以通过解析这个 html 资源，然后将得到的 html 内容、css 文件、js 文件，在主项目中加载后渲染到特定的区域， 那么就可以做到在主项目中加载业务板块项目。</p><p><img src="//assets.processon.com/chart_image/6314ea9cf346fb55d89d4e77.png" alt="微前端-4"></p><p>在主项目中，实现一个 资源加载器与解析器，通过业务板块项目的访问链接，获取 html 资源文件，并解析 html 的内容，包括：</p><ul><li><code>&lt;head&gt;</code> 标签中的 <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code> 等;</li><li><code>&lt;body&gt;</code> 标签中的 html 内容，<code>&lt;script&gt;</code> 等</li></ul><p>然后加载 解析得到的 CSS 资源、JS 资源，将 html 内容 插入到 特定的区域中，并进行渲染。 从而呈现完整的网页内容。</p><p>这种方案，进一步解决了如下的问题：</p><ul><li>公共业务组件交由 主项目进行统一管理，直接避免了同步问题；</li><li>业务板块均在主项目中渲染，提高了用户体验；</li></ul><p>然而，也引入了新的问题：</p><ul><li>业务板块都运行在同一个环境中，多个板块之间切换，加载的资源容易对环境产生污染， 如污染了某个全局变量、polyfill 相互污染等。</li><li>可能存在 加载资源跨域问题。</li></ul><p>但是也拥有了如下的优点：</p><ul><li>拆分项目，可独立开发和部署；</li><li>主项目统一管理 公共业务组件，更易于维护；</li><li>项目间的切换得到体验优化；</li></ul><p>当方案思考到了这里，发现，主项目是通过 解析 <strong>链接</strong> 来加载业务板块项目， 而 <strong>链接</strong> 对于现代前端来说，更多的意义是可能是 <strong>路由</strong>。那么我们顺着这个思路，继续优化，</p><h2 id="新的方案" tabindex="-1"><a class="header-anchor" href="#新的方案"><span>新的方案</span></a></h2><p>说起路由，我们很容易想到，像如今的 <code>react</code>, <code>vue</code>, <code>angular</code> 等主流的库/框架， 通过 路由 来实现 <code>SPA</code> 应用， 或者说， 通过 <strong>路由分发页面</strong>。</p><p>那么，我们可以进一步的扩展这个思路，是否可以通过 <strong>路由分发应用</strong> ？</p><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h3><p>在前端的范畴中，路由指 随着浏览器的地址栏变化，而呈现不同的内容给用户。</p><p>通常使用 <strong>hash</strong> 或者 <strong>history API</strong> 实现前端路由。</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// hash</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://jm-garming.com/#route</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // history API</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://jm-garming.com/route</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由进一步细化，通过 <code>/</code> ，又可以 划分为 一级路由、二级路由、三级路由... 等多级路由。</p><p>在现代的前端框架如 <code>React</code> / <code>Vue</code> / <code>Angular</code> 等，均有通过 路由 实现 SPA 应用 的技术方案。 而 SPA 应用 就是 <strong>路由分发页面</strong> 。</p><h3 id="路由分发应用" tabindex="-1"><a class="header-anchor" href="#路由分发应用"><span>路由分发应用</span></a></h3><p>与 <strong>路由分发页面</strong> 类似，我们也可以通过 <strong>路由分发应用</strong> 。</p><p>类似于 主项目重载业务项目资源，通过 实现 路由与业务板块项目的映射关系， 在主项目中通过路由寻找业务板块项目，加载相关资源并渲染在相关区域。</p><h3 id="主应用与子应用" tabindex="-1"><a class="header-anchor" href="#主应用与子应用"><span>主应用与子应用</span></a></h3><p>从这里开始， 我们将 主项目 定位为 主应用， 将各个 业务板块项目 定义为 子应用。 在主应用中实现 子应用加载器，加载器通过 解析路由来获取加载对应的子应用。</p><p><strong>主应用：</strong> 作为独立的项目，整个系统的入口应用，负责统一管理公共业务组件（如 菜单栏、导航栏、页脚等），负责实现子应用加载器，负责实现渲染子应用的容器。</p><p><strong>子应用：</strong> 作为独立的项目，系统的各个业务板块分别独立为单独的项目，单独开发维护与部署。</p><h3 id="注册子应用" tabindex="-1"><a class="header-anchor" href="#注册子应用"><span>注册子应用</span></a></h3><p>主应用需要通过路由发现子应用，需要建议起 路由与子应用的映射关系，所以需要有一套机制，用于向主应用注册子应用， 并关联相关资源文件等。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">AppName</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Sub Application</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">route</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/sub-app-route</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">resource</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">js</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://example.com/index.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">css</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://example.com/style.css</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // more ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微前端" tabindex="-1"><a class="header-anchor" href="#微前端"><span>微前端</span></a></h2><p>通过将整个系统拆分为一个个小型的项目，小型项目即为子应用，通过细化，将整个系统细化为一个个微小的应用， 从而实现了降低整个系统的复杂性。 一个小型项目可以是某个部门的业务项目，可以是某个业务项目中的某个板块，也可以是一个单独的页面。</p><p>这也是为什么将新的方案称之为 <strong>微前端</strong>。</p><p>微前端是指，通过将一个系统，拆分为一个个 微小的独立的子应用，通过主应用聚合为一个完整的系统。 微前端是一个与框架无强关联的概念，可以类比于服务端的微服务，是浏览器端的微服务。</p><p><img src="//assets.processon.com/chart_image/6318b7297d9c0833ec81b2cd.png" alt="microfront"></p><p>由于子应用是独立的，理论上是支持使用任意的技术框架进行开发，无论是使用 jQuery 开发，还是使用 Vue、React、Angular 等。 然而在实际中，对于整个系统而言，技术框架的选择应该保持统一性，以保证整个系统的可维护性。</p><h2 id="微前端的局限性" tabindex="-1"><a class="header-anchor" href="#微前端的局限性"><span>微前端的局限性</span></a></h2><p>微前端的技术方案，更适合于 中大型的项目中使用，而对于小型项目而言，由于本身体量不大，没有必要对整个系统进行进一步的细化， 细化反而增加了项目的复杂度。</p><p>而对于中大型项目而言，如果是老系统迁移到微前端的方案，那么不可避免的，还需考虑新旧方案之间的迁移过渡的方案以及规划。 如果老系统中存在应用了多种不同的技术框架，或者同框架的不同版本，由于主应用、所有子应用均运行在同一个浏览器环境中， 不可避免的存在环境污染问题，如全局环境污染，polyfill 对于原生对象的多次污染等，还包括 CSS 的命名污染等问题。 所以如何保证子应用的正确渲染，如何避免环境污染问题，也是亟需解决的问题。</p><h2 id="微前端的未来" tabindex="-1"><a class="header-anchor" href="#微前端的未来"><span>微前端的未来</span></a></h2><p>目前来看，微前端主要分为 主应用 和 子应用，在 <strong>微</strong> 上，也仅细化到页面级别，然而，对于微前端而已，还可以进一步的细化， 如，细化到页面的某一个区块，细化到某一个逻辑功能，均可以通过微前端的技术方案，共享到主应用以及子应用中使用。 整个系统愈加化整为零，将复杂度进一步的拆解，细化，令每一块功能、逻辑等都能使用通过某个项目提供，甚至独立的项目进行维护和部署。</p><p>微前端是一个与框架无关的概念，但在实现微前端时，如果允许多技术框架共存，所带来的问题的，反而比不使用微前端时所存在的问题，要更难以预料，难以解决。在实际的场景中，最好还是限定在统一的技术框架范畴中，避免由于共存不同的技术框架，而引入更为复杂的问题，</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>微前端是一个相对新兴的技术概念，适用于一些前端场景，但最好是你已经考虑清楚了，微前端是解决你的场景问题的最好方案，否则，除非必要， 无需选择微前端方案。</p>`,92)]))}const r=i(n,[["render",p],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/article/vpqgx0t7/","title":"谈谈微前端","lang":"zh-CN","frontmatter":{"title":"谈谈微前端","createTime":"2019/08/31 05:13:33","author":"李嘉明","tags":["FE"],"permalink":"/article/vpqgx0t7/","description":"微前端 是最近比较新兴的一个话题，它不具体指某个库某个框架，而是一个思想，一种概念，运用这种思想， 根据自身的需求，从而实现适用于自身的 微前端 。 本文根据最近我在公司内部举行的 微前端技术解决方案 分享而写。 提供的 微前端方案 也应用于公司内部的项目，并取得了良好的反馈，获得广泛好评。 本文不具体谈如何实现微前端，仅讲述微前端的概念，期望能够通过...","head":[["meta",{"property":"og:url","content":"http://garmin21.github.io/jm-blog/article/vpqgx0t7/"}],["meta",{"property":"og:site_name","content":"Garming"}],["meta",{"property":"og:title","content":"谈谈微前端"}],["meta",{"property":"og:description","content":"微前端 是最近比较新兴的一个话题，它不具体指某个库某个框架，而是一个思想，一种概念，运用这种思想， 根据自身的需求，从而实现适用于自身的 微前端 。 本文根据最近我在公司内部举行的 微前端技术解决方案 分享而写。 提供的 微前端方案 也应用于公司内部的项目，并取得了良好的反馈，获得广泛好评。 本文不具体谈如何实现微前端，仅讲述微前端的概念，期望能够通过..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://garmin21.github.io/jm-blog//assets.processon.com/chart_image/630f92445653bb0c5d1040ab.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T11:44:38.000Z"}],["meta",{"property":"article:author","content":"李嘉明"}],["meta",{"property":"article:tag","content":"FE"}],["meta",{"property":"article:modified_time","content":"2024-12-12T11:44:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"谈谈微前端\\",\\"image\\":[\\"http://garmin21.github.io/jm-blog//assets.processon.com/chart_image/630f92445653bb0c5d1040ab.png\\",\\"http://garmin21.github.io/jm-blog//assets.processon.com/chart_image/6311781d079129320755bec5.png\\",\\"http://garmin21.github.io/jm-blog//assets.processon.com/chart_image/631301e65653bb40f833b613.png\\",\\"http://garmin21.github.io/jm-blog//assets.processon.com/chart_image/6314ea9cf346fb55d89d4e77.png\\",\\"http://garmin21.github.io/jm-blog//assets.processon.com/chart_image/6318b7297d9c0833ec81b2cd.png\\"],\\"dateModified\\":\\"2024-12-12T11:44:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李嘉明\\"}]}"]]},"headers":[],"readingTime":{"minutes":13.55,"words":4065},"git":{"updatedTime":1734003878000},"autoDesc":true,"filePathRelative":"1.前端/10.开发/微前端.md","categoryList":[{"id":"72e6d5","sort":1,"name":"前端"},{"id":"90af2f","sort":10,"name":"开发"}],"bulletin":false}');export{r as comp,o as data};