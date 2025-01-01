---
title: mediaSource
createTime: 2025/01/01 16:35:14
permalink: /article/mqky2byw/
tags:
  - BOM
---

MediaSource 是一个 Web API，用于在浏览器中动态生成媒体流，从而实现实时音频和视频流的播放。它允许您通过 JavaScript 代码来控制媒体数据的生成和传输，从而创建自定义的流媒体播放体验。

主要用途之一是实现流媒体的逐段加载，这对于大型视频、直播等场景非常有用。通过 MediaSource，您可以控制媒体片段的加载、缓冲和播放，从而实现更灵活的流媒体处理。

## 前端代码实现

```js
const rangeVideo = () => {
  const totalSize = 9350042;
  const chunkSize = 1000000;
  const numChunks = Math.ceil(totalSize / chunkSize);
  let index = 0;

  const assetURL = 'url';
  var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

  if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
    // 使用MediaSource
    var mediaSource = new MediaSource();
    video.src = URL.createObjectURL(mediaSource);
    // 监听事件
    mediaSource.addEventListener('sourceopen', sourceOpen);
  } else {
    console.error('Unsupported MIME type or codec: ', mimeCodec);
  }

  function sourceOpen(e) {
    var mediaSource = e.target;
    // 拿到 数据流
    var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

    const send = () => {
      if (index >= numChunks) {
        sourceBuffer.addEventListener('updateend', function (_) {
          mediaSource.endOfStream();
        });
      } else {
        const start = index * chunkSize;
        const end = Math.min(start + chunkSize - 1, totalSize - 1);
        fetch(assetURL, {
          headers: {
            Range: `bytes=${start}-${end}`,
            responseType: 'arraybuffer',
          },
        }).then(async (response) => {
          response = await response.arrayBuffer();
          index++;
          sourceBuffer.appendBuffer(response);
          send();
          video.play();
        });
      }
    };

    send();
  }
};
```

## 分析
这里主要是对mediaSource的分析。

1. 我们首先创建了一个 MediaSource 对象，并将其 URL 赋给了` <video> `元素的 src 属性
2. 在 sourceopen 事件中，我们添加了一个 SourceBuffer 对象，用于加载视频片段数据
3. 最后，我们通过 fetch 获取视频片段数据，将其添加到 SourceBuffer 中，然后开始播放视频

MediaSource的readyState属性表示了其状态，分别有closed,open,ended三种

1. closed：MS没有和媒体元素如video相关联。MS刚创建时就是该状态。
2. open：source打开，并且准备接受通过sourceBuffer.appendBuffer添加的数据。
3. ended：当endOfStream()执行完成，会变为该状态。

## 不足

不是什么mp4都支持这样玩的，得是 fragment mp4，简称fmp4，普通的不行。 我用的例子就是从网上找到的fmp4资源，[可用的视频链](https://link.juejin.cn/?target=https%3A%2F%2Fraw.githubusercontent.com%2Fnickdesaulniers%2Fnetfix%2Fgh-pages%2Fdemo%2Ffrag_bunny.mp4)接，需要的可以自行下载。


[ffmpeg 转 mp4](https://link.juejin.cn/?target=https%3A%2F%2Fwww.ffmpeg.org%2F)

