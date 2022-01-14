// 实现数组的filter方法
Array.prototype._filter = function(fn) {
    // 先判断异常
    if (typeof fn !== 'function') {
        throw Error('参数必须是一个函数')
    }
    const resArr = [];
    // this指向当前数组
    for (let i = 0; i < this.length; i++) {
        const res = fn(this[i]);
        res && resArr.push(this[i]);
    }
    return resArr;
}
const arr = [1,2];
const res = arr._filter((item) => {
    return item > 1
})
console.log(res);