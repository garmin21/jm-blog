---
title: 认识 unbuild 打包工具
createTime: 2025/01/02 10:05:02
permalink: /learn-build/s08h8jlt/
---

## 前言

如果说 tsup 是 typescript 的一个最小的打包工具，那么 unbuild 则是一个更通用的，可自定义的，但功能强大，unbuild 被用来打包 Nuxt3 及其子包。要使用他，我们需要在根目录下创建 build.config.ts 文件

## 1. 快速上手

```json
{
    "name": "unbuild-example",
    "version": "1.0.0",
    "description": "",
    "exports": {
        ".": {
            "types": "./dist/index.d.ts",
            "default": "./dist/index.mjs"
        }
    },
    "types": "./dist/index.d.ts",
    "scripts": {
        "build": "unbuild",
        "dev": "pnpm run stub",
        "stub": "unbuild --stub"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "typescript": "^5.0.4",
        "unbuild": "^1.2.0"
    }
}
```

```ts
// build.config.ts
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: ['./src/index.ts'],
    declaration: true, // generate .d.ts files
})
//执行命令 默认会生成ESM和CJS两种格式
```

在 next3 代码库中发现 unbuild 引入了一个叫 stub 的新概念，每次修改源代码启动一个监视程序重新触发打包不同，stubbing 在 unbuild 中的根本不需要您有另一个程序处理它。只需要调用命令

```shell
unbuild --stub

```

生成的文件内容

```js
// dist/index.mjs
import jiti from 'jiti'
export default jiti(null, { interopDefault: true })(
    '/Users/antfu/unbuild-test/src/index'
)

// dist/index.cjs
module.exports = require('jiti')(null, { interopDefault: true })(
    '/Users/antfu/unbuild-test/src/index'
)
```

现在 dist 文件不在发布你的代码包，而是通过 jit 重定向到你的源代码。jiti 通过动态编译模块，为 typescript 和 esm 提供了运行时支持，因为它直接指向你的源文件，所以在你的源代码和 bundle dist 之间不会有错位。因此不需要观察者进程！

## 参考文章

-   [github](https://github.com/unjs/unbuild)

-   [unbuild 的基本使用](https://juejin.cn/post/7211053184730562618)
