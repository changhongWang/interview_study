function throttle(fn, delay = 1000) {
    let curTime = Date.now();

    return function(...args) {
        let nowDate = Date.now();
        let context = this;

        // 如果两次时间间隔超过了指定时间，则执行函数
        if (nowDate - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(context, args);
        }
    }
}