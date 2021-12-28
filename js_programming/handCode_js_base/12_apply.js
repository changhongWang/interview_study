
// 手写apply 函数实现 - 核心关键点：转移this指向

/**
 * 
 */
Function.prototype.myApply = function(context, args) {
    // 判断调用对象是否为函数
    if (typeof this !== 'function') {
        throw new TypeError('调用者不是函数')
    }
    let result = null;
    if (!context) {
        context = window;
    }
    // 目的 转移调用myApply的函数内的this指向
    context.fn = this;
    if (args) {
        result = context.fn(args);
    } else {
        result = context.fn();
    }

    // 删除属性
    delete context.fn;
    return result;
}

function sum(arr) {
    let total = 0;
    if (!arr.length) {
        console.log('数组长度为0 退出');
        return total;
    }
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const resA = sum.myApply(null, [1,2,3]);

const obj = {
    name: 'wang'
}
function sayName() {
    return this.name;
}
const resB = sayName.myApply(obj);

console.log(resA, 'resA');
console.log(resB, 'resB');