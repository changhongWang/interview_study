
// 手写apply 函数实现 - 核心关键点：转移this指向

/**
 * 1. 判断调用对象是否是函数，即使我们是定义在函数的原型上的，但是可能出现call等方式调用的情况
 * 2. 判断上下文是否存在，不存在给window(浏览器环境)
 * 3. 将函数作为上下文对象的一个属性
 * 4. 判断参数值是否传入，
 * 5. 使用上下文对象来调用这个方法，并保存返回结果
 * 6. 删除刚才新增的属性
 * 7. 返回结果
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