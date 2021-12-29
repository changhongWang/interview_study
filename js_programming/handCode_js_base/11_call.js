// 手写call函数实现 - 核心: 转移this指向

/**
 * 1. 判断调用对象是否为函数，即使我们是定义在原型上的，还是可能出现call调用等情况
 * 2. 上下文是否存在，不存在给window
 * 3. 处理传入的参数，截取第一个参数之后的所有参数
 * 4. 将函数作为上下文context的一个属性
 * 5. 使用上下文对象来调用这个方法，并保存返回结果
 * 6. 删除刚才新增的属性
 * 7. 返回结果
 */
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

function sum(...args) {
    let total = 0;
    if (![args].length) {
        console.log('数组长度为0 退出');
        return total;
    }
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

const resA = sum.myCall(null, 1,2,3);

const obj = {
    name: 'wang'
}
function sayName() {
    return this.name;
}
const resB = sayName.myCall(obj);

console.log(resA, 'resA');
console.log(resB, 'resB');