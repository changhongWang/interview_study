### 前端为什么需要打包工具
1. ESM的浏览器兼容性问题
2. 模块文件过多导致频繁发送网络请求问题
3. 资源文件模块化的问题

## Webpack核心工作原理
bundle your assets

从打包入口出发
loader处理特殊资源（图片、字体）
plugin处理自动化构建任务（自动压缩等）
##### 插件机制
Webpack提供的一个强大的扩展能力，为整个工作过程的每一个环节都预设了一些钩子，不影响整个webpack核心的工作过程。
所以我们可以通过插件从任意的环节上定义任务，从而拓展webpack打包之外的一些功能。

##### loader的工作原理
