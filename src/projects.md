---
title: Projects
author: 李嘉明
createTime: 2023/02/15 04:07:11
permalink: /projects/
---

## 开源项目

### vite-plugin-mock-dev-server

<Stamps stamps="gs,nv,ndm,gl,g" repo="pengzhanbo/vite-plugin-mock-dev-server" />

**说明：**

`vite-plugin-mock-dev-server` 专注于在 `Vite` 开发环境下 提供 Mock 服务。
通过 vite 内置的 `http` 和 `http-proxy` 服务，以 `middleware` 的方式，对 `server.proxy` 配置的代理路径
进行二次拦截，命中规则后，返回配置的 `mock data` 。

你可以在 mock 配置文件中使用`node` 任意第三方模块。 这表示，你可以使用如 `mockjs` / `faker-js` 等库帮助生成 `mock data`。

插件支持响应多种数据类型包括 `text/json/Buffer/ReadStream`等，还支持设置 headers、cookies。

插件还支持模拟 `WebSocket`，可以轻松的实现在本地开发环境调试 `WebSocket` 服务。

[使用文档](https://vite-plugin-mock-dev-server.netlify.app/)

---

### vite-plugin-image-placeholder

<Stamps stamps="gs,nv,ndt,gl,g" repo="pengzhanbo/vite-plugin-image-placeholder" />

**说明：**

在项目开发过程中，为未准备好图片资源的内容区域，生成占位图片。

---

### vulcan

<Stamps stamps="gs,gl,g" repo="pengzhanbo/vulcan" />

**说明：**

基于 vite + vue3 的项目模板，帮助快速创建 Mobile Web 应用。

---

### vuepress-theme-plume

<Stamps :stamps="['gs', 'nv', 'ndy', 'gl', 'g']" repo="pengzhanbo/vuepress-theme-plume"  />

**说明：**

vuepress-theme-plume 是一个基于 VuePress 的主题。适用于 博客、文档 和 知识笔记 。

与 vuepress 默认主题相比：

- 大幅度优化了界面、交互，更具美观度，更好的用户体验。
- 同时，还添加了大量的丰富实用的功能，如 代码分组、提示容器、任务列表、数学公式、代码演示、 内容搜索、文章评论、加密 等。
- 大幅度简化了配置，更易于使用，同时还保留了丰富灵活的配置项，满足个性化的需求。

plume 主题尽可能的内置你可能需要的功能，以及搭建站点所需要的一般性配置，您无需关注这些细节。 目的是，让您更专注于 内容的创作，更好的表达你的想法，享受 Markdown 增强语法带来的便利。

[使用文档](https://plume.pengzhanbo.cn/guide/intro/)

---

### @any-hooks/solid

<Stamps stamps="gs,nv,ndt,gl,g" repo="any-hooks/solid-hooks" package="@any-hooks/solid" />

**说明：**

一套高质量可靠的 Solidjs Hooks 库。

[使用文档](https://solid-hooks.netlify.app/en-US)

---

### stylelint-define-config

<Stamps stamps="gs,nv,ndt,gl,g" repo="stylelint-types/stylelint-define-config" />

**说明：**

为 `stylelint` 提供 `defineConfig` 配置类型帮助，可以在 `stylelint.config.js` 中配置自定义配置。

---

### @pengzhanbo/utils

<Stamps stamps="gs,nv,ndm,gl,g" repo="pengzhanbo/utils" package="@pengzhanbo/utils" />

**说明：**

一个常用的工具类库, 无依赖， 任何运行时。

[使用文档](jsr.io/@pengzhanbo/utils)

---

### geo-pattern-ts

<Stamps stamps="gs,nv,ndt,gl,g" repo="pengzhanbo/geo-pattern-ts" />

**说明：**

生成漂亮的 SVG 图案。

[使用文档](https://github.com/garmin21/geo-pattern-ts) | [在线演示](geo-pattern.netlify.app)

---

### chinese-simple2traditional

<Stamps stamps="gs,nv,ndt,gl,g" repo="pengzhanbo/chinese-simple2traditional" />

**说明：**

中文繁简体转换。

- 内置字库，零依赖，支持任何运行环境。
- 支持 3077+ 常用简体字 和 4919+ 繁体字/异体字。
- 支持 3577+ 简体短语转繁体的特殊情况。
- 支持 117+ 繁体短语/异体短语 转简体的特殊情况。

[使用文档](https://github.com/garmin21/chinese-simple2traditional) | [在线演示](https://han-convert.netlify.app/)

---

### spearjs

<Stamps stamps="gs,gl,g" repo="pengzhanbo/spearjs" />

**说明：**

一个 低代码平台。使用 vite 构建。前端基于 vue， 后端基于 nestjs。
