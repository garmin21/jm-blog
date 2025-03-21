---
title: Git问题
createTime: 2025/03/21 14:57:23
permalink: /article/p9on0h4b/
author: 李嘉明
tags:
  - Git
---


## 1. Git: send-pack: unexpected disconnect while reading sideband packet


有很大改动，推送大文件的时候，需要手动设置增加 Git 的缓冲区大小 `git config http.postBuffer 524288000` 在进行 push 