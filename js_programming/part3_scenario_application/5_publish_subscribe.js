// 手写实现发布订阅模式
class EventCenter {
    constructor() {
        this.event = {};
    }
    on(key, eventCallback) {
        //  没有则创建
        if (!this.event[key]) {
            this.event[key] = [];
        }
        // 否则push事件进入
        this.event[key].push(eventCallback);
    }
    removeEvent(key, handler) {
        // 移除事件如何根据handler移除？
        this.event[key] && this.event[key] === null;
    }
    dispatchEvent(key, ...params) {
        const events = this.event[key];
        // 未注册事件场景
        if (!events) {
            return new Error('事件未注册');
        }
        // 触发事件
        for (let i in events) {
            events[i](...params);
        }
    }
    clear() {

    }
}

const event1 = new EventCenter();
event1.on('call', (...params) => {
    console.log('on call here', params);
})
event1.on('call', (...params) => {
    console.log('on call here 2', params);
})
event1.dispatchEvent('call', 123, 45, 888);