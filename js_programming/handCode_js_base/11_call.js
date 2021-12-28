// 手写call函数实现 - 与apply一样 转移this指向
Function.prototype.myCall = function(context, ...args) {
    // 先判断调用对象
    if (typeof this !== 'function') {
        console.log('type error');
    }
    let res = null;
    if (!context) {
        context = window;
    }

    context.fn = this;
    res = context.fn(...args);
    // 删除属性
    delete context.fn;
    return res;
}