---
title: CDN
createTime: 2022/04/18 06:53:40
author: 李嘉明
permalink: /interview-question/os6hn2b8/
---

::: tip 提问
CDN 是什么？
:::

CDN 是一个内容分发网络，通过对源网站资源的缓存，利用本身多台位于不同地域，不同运营商的服务器，
向用户提供资源就近访问的功能。

用户的请求不直接发送到原网站，而是发送给 CDN 服务器，由 CDN 服务器将请求定位到最近的含有该资源的服务器上去请求。

有利于提高网站的访问速度，同时也减轻了源服务器的访问压力。
