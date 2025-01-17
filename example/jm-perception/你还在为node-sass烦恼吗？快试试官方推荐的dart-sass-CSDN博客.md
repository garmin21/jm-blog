 

但解决了这个问题，也不是说就万事大吉了…

Round2：node\-sass和node版本不兼容

\==========================

一般来说，个人电脑的 NodeJS 环境安装好了后，很久都不会想着去升级。

不过我前段时间去研究 Vite 的时候，发现我的 NodeJS 版本已经不满足条件了。

> Compatibility Note

> Vite requires Node.js version >=12.0.0.

于是乎，我就升级了 NodeJS 版本。

但是，当我运行一些旧项目的时候，我发现，项目报错了。

Module build failed (from ./node\_modules/sass-loader/dist/cjs.js):

Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (83)

For more information on which environments are supported please see:

https://github.com/sass/[node-sass](https://so.csdn.net/so/search?q=node-sass&spm=1001.2101.3001.7020)/releases/tag/v4.13.0

粗略一看，报错信息说的是 NodeSass 不支持当前运行时环境，我猜这肯定是跟 NodeJS 版本不匹配了。我首先检查了下我的 NodeJS 版本。

nove -v

v14.16.0

嗯，是新版本没错了。

于是就去 github 上查了下 node-sass，发现确实还是这么一回事，node-sass@4.13.0 版本真的不支持 node@14，惨！

![](https://i-blog.csdnimg.cn/blog_migrate/fec8c0aad1ab627ef5222081e3e4f1ae.png)

其实，我只要把 NodeJS 版本降低到 13，问题也能得以解决。

但我觉得这还是有问题的。新项目要求高版本 NodeJS，而旧项目需要低版本 NodeJS，我本地只有一套 Node 环境，这样就出现了矛盾点，**看来开发环境也比较需要容器化**。

> 经大佬提醒，还有 nvm 可以管理 [node 版本](https://so.csdn.net/so/search?q=node%20%E7%89%88%E6%9C%AC&spm=1001.2101.3001.7020)。

虽然这个问题也不能完全算是 node-sass 的锅，但谁叫它不支持 node@14 呢？用着还是不爽！

Round3：node-sass: Command failed

\================================

这是我上个月在生产环境跑 CI/CD 时遇到的一个问题。

error /builds/coollu-r-d/coollu-fe/xkgj\_web/node\_modules/node-sass: Command failed.

后面还跟了一堆错误信息。

![](https://i-blog.csdnimg.cn/blog_migrate/629343cdf4eba85383c9df3be47e7861.png)

即便我已经是在 Docker 容器里执行 build 任务了，也就是说没有上面那个和 Node 版本不兼容的问题，但还是遇到了一次又一次的报错，这谁能顶得住呢？

![](https://i-blog.csdnimg.cn/blog_migrate/0c30485d3391a333dd8edd7560370e6d.jpeg)

使用Dart Sass

\===========

Dart Sass 是 Sass 官网力推的工具，它包括了基于 Dart VM 的命令行工具，以及基于 Node 的纯 Javascript 实现。前者说的 Dart VM 就是现在很火的 Flutter 选择的编程语言 Dart 的虚拟机；而后者的出现是为了能快速与 Node 环境下现有的工作流集成，比如 webpack，gulp等。Dart Sass的命令行工具是比 Javascript Library性能更好的，但是为了快速对接 webpack 等工具，我们目前一般通过`npm install --save-dev sass`直接使用 sass 的 Javascript Library。

改用 Dart Sass 后，不管是安装还是兼容高版本 Node 这块，都没有什么问题，总的来说，使用体验还是非常棒！

> Dart Sass 是我们对它的习惯称呼，最早它在 npm 上的确是以 dart-sass 的名字发布的，不过现在它已经更名为 sass 了。

![](https://i-blog.csdnimg.cn/blog_migrate/ed208ca151f250382438cb0446d12e11.png)

换Dart Sass后，我要做些什么

\==================

众所周知，在 Vue 项目中，scoped 样式是会通过一个哈希化的属性选择器进行隔离的（比如`[data-v-67c6b990]`），如果希望做样式穿透，在`Vue@2`中会用到`/deep/`深度选择器。

> 注意，`/deep/`本身是作为一个 CSS 的提案（好像是用于解决 web components 的样式穿透问题，用 Angular 的时候简单了解过），后面又被废弃了，而 Vue 的 `/deep/`跟 CSS 的`/deep/`不是同一个概念！考虑到用户容易误解 Vue 的`/deep/`和 CSS 被废弃的`/deep/`提案是一个东西，也就会误认为 `/deep/`是一个不可用的特性，Vue 也出了 RFC 针对这块做调整，后面也就有了`::v-deep`。

使用 Dart Sass 后，可能会在运行开发环境时遇到不支持`/deep/`的问题，需要改用`::v-deep`，简写就是`:deep(selector)`，比如：

#### 最后

如果你已经下定决心要转行做编程行业，在最开始的时候就要对自己的学习有一个基本的规划，还要对这个行业的技术需求有一个基本的了解。有一个已就业为目的的学习目标，然后为之努力，坚持到底。如果你有幸看到这篇文章，希望对你有所帮助，祝你转行成功。

![](https://i-blog.csdnimg.cn/blog_migrate/d9bf9d92f824435f9b6d101c60394d51.png)

本文转自 <https://blog.csdn.net/2301_82243710/article/details/139940812>，如有侵权，请联系删除。