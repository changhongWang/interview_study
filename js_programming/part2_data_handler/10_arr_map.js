// 实现数组的map方法
Array.prototype._map = function(fn) {
    if (typeof fn !== 'function') {
        throw Error('fn参数必须是一个函数')
    }
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(fn(this[i], i));
    }
    return res;
}

const a = [1,2,3,4,5];
const arr2 = a._map((item, index) => {
    item = item+5;
    return item;
})
console.log(arr2)