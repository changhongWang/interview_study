// 手写一个new函数 模拟new操作符

/**
 * 理解new操作符
 * 1. 创建一个新的空对象
 * 2. 设置原型，将对象的原型指向构造函数的prototype
 * 3. 让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
 * 4. 判断函数的返回值类型，如果是值类型，返回创建的对象；如果是引用类型，就返回这个引用类型的对象。
 */

function handNew(constructorFn, ...args) {
    const obj = {};
    const res = constructorFn.call(obj, ...args);
    return !res ? res : obj;

}

function F() {
    this.name = 'wang';
    return {
        name: 'le'
    }
}

// const a = new F();
const a = handNew(F)
console.log(a.name);