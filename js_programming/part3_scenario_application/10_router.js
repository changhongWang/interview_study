// 实现简单路由
class Router {
    constructor() {
        this.routes = {};
        // 当前hash
        this.currentHash = '';
        // 绑定this
        this.freshRoute = this.freshRoute.bind(this);

        // 监听
        window.addEventListener('load', this.freshRoute, false);
        window.addEventListener('hashChange', this.freshRoute, false);
    }
    // 存储
    storeRoute(path, cb) {
        this.routes[path] = cb || function() {}
    }
    // 刷新
    freshRoute() {
        this.currentHash = location.hash.slice(1) || '/';
        this.routes[this.currentHash]();
    }
}

new Router();