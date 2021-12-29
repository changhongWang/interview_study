// 手写typeof
/**
 * 核心原理:
 * 1. typeof 无法判断具体的引用类型，这里利用toString实现 注意要使用原型链上的toString
 * 2. typeof 无法判断null
 */
function getType(value) {
    // 判断是null
    if (value === null) {
        // typeof null === 'object'; typeof无法判断null!
        // 隐式类型转换 输出结果
        return value + '';
    }
    // 判断引用类型
    if (typeof value === 'object') {
        let valueClass = Object.prototype.toString.call(value);
        let type = valueClass.split(' ')[1].split('');
        type.pop();
        return type.join('').toLowerCase();
    } else {
        return typeof value;
    }
}