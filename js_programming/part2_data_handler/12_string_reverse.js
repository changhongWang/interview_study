// 实现字符串翻转
String.prototype._reverse = function() {
    return this.split('').reverse().join('')
}

var a = '123456';
console.log(a._reverse())