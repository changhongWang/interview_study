// 实现数组的push方法
// 注意push方法可以传入多个参数，按序依次传入
let arr = [];
Array.prototype.push = function() {
    for (let i = 0; i < arguments; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}