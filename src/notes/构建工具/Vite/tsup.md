---
title: 基于 tsup 打包TypeScript
createTime: 2025/01/02 10:04:21
permalink: /learn-build/4qm59y6b/
---

## 前言

`Tsup` 可以快速打包 `typescript` 库，无需任何配置，并且基于 esbuild 进行打包，打包 ts 文件速度毫秒级，方便又高效。

## 1. 快速上手

先安装 `yarn add tsup`

```json
{
    "scripts": {
        "build": "tsup"
    }
}
```

新建 `tsup.config.ts`

```ts
import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['./src/index.ts'],
    dts: true,
    format: ['esm', 'cjs'],
    outDir: 'bin'
})

/**
 * export default defineConfig({
    // 入口文件 或者可以使用 entryPoints 底层是 esbuild
    entry: ['src/index.ts'],
    
    // 打包类型  支持以下几种 'cjs' | 'esm' | 'iife'
    format: ["cjs", "esm"],

    // 生成类型文件 xxx.d.ts
    dts: false,

    // 代码分割 默认esm模式支持 如果cjs需要代码分割的话就需要配置为 true
    splitting: false,

    // sourcemap 
    sourcemap: false,

    // 每次打包先删除dist
    clean: true,
});
 */
```

执行打包命令就会生成 dist 文件夹

## 参考文章

- https://juejin.cn/post/7178792371159564346
