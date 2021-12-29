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
        // Javascript中，通过Object.prototype.toString方法，判断某个对象值属于哪种内置类型

        /**
         * 还可以通过instanceof和constructor进行判断，不过他们都各有一些缺点
         * instanceof 只能判断引用类型，不可以判断原始类型 / null / undefined
         * constructor判断类型看起来是完美的，但如果创建一个对象，更改他的原型，这种方式就变的不可靠了。
         * 最终结论 Object.prototype.toString完美
         */
        let valueClass = Object.prototype.toString.call(value);
        let type = valueClass.split(' ')[1].split('');
        type.pop();
        return type.join('').toLowerCase();
    } else {
        return typeof value;
    }
}