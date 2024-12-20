 

#

### 处理加载报错[​](https://vitejs.cn/vite5-cn/guide/build.html#load-error-handling "​")

当 [Vite](https://so.csdn.net/so/search?q=Vite&spm=1001.2101.3001.7020) 加载动态导入失败时，会触发 `vite:preloadError` 事件。`event.payload` 包含原始的导入错误信息。如果调用 `event.preventDefault()`，则不会抛出错误。

![](https://i-blog.csdnimg.cn/direct/29bad421fc0a4a1fa68f92b9855af263.png)

当重新部署时，托管服务可能会删除之前部署的资源。因此，之前访问过您站点的用户可能会遇到导入错误。这种错误发生的原因是用户设备上运行的资源过时，并尝试导入相应的旧[代码块](https://so.csdn.net/so/search?q=%E4%BB%A3%E7%A0%81%E5%9D%97&spm=1001.2101.3001.7020)，而这些代码块已经被删除。这个事件对于解决这种情况会很有帮助。

采用来源[构建生产版本 | Vite 官方中文文档 (vitejs.cn)](https://vitejs.cn/vite5-cn/guide/build.html "构建生产版本 | Vite 官方中文文档 (vitejs.cn)")

本文转自 <https://blog.csdn.net/csdn_yuchao/article/details/142454253>，如有侵权，请联系删除。