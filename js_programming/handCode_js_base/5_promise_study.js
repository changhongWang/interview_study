// 跟随掘金文章手写的promise
// 参考文章url https://juejin.cn/post/6844903625769091079
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

class PromiseStudy {
    constructor(exec) {
        this.state = PENDING;
        this.value = null;
        this.reason = null;

        // then回调
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = (val) => {
            if (this.state === PENDING) {
                this.state = RESOLVED;
                this.value = val;
                // 一旦resolve 调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }

        let reject = (val) => {
            if (this.state === PENDING) {
                this.state = REJECTED;
                this.reason = val;
                // 一旦reject 调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        try {
            // 执行promise传入函数
            exec(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onResolved, onRejected) {
        if (this.state === RESOLVED) {
            onResolved(this.value);
        }
        if (this.state === REJECTED) {
            onRejected(this.reason);
        }
        if (this.state === PENDING) {
            this.onResolvedCallbacks.push(() => {
                onResolved(this.value);
            })
            this.onRejectedCallbacks.push(() => {
                onResolved(this.value);
            })
        }
    }
}