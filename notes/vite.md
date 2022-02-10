## Vite解决了什么问题
vite底层使用的打包工具依旧是webpack

##### 存在问题/痛点
开发过程缓慢，当你改变了一小部分内容时，依旧需要对所有代码进行打包，然后刷新页面
##### Vite解决方案
解决方案：开发阶段直接先启动一个服务器，**不打包**，因为现代浏览器已经支持原生JS模块化方案(ESModule语法)了
```
<script type="module" src="/src/main.js"></script>
```

##### .vue 或者 .jsx/tsx文件是怎么加载的呢？
这些文件浏览器并不能够识别，还是通过loader的形式(createHotContext)进行加载的

##### vite怎么启服务器的
vite启服务依赖于connect，是类似于express或者koa的服务器；最终打包使用的是rollup