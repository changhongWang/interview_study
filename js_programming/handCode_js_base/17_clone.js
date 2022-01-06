// 手写实现浅拷贝
/**
 * 浅拷贝定义：一个新的对象对原始对象的属性值进行精确的拷贝，
 * 如果拷贝的是基本数据类型，拷贝的就是基本数据类型的值；如果是引用数据类型，拷贝的就是内存地址。
 * *** 如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化
 */

// 1. Object.assign实现
function shallowCopy1(obj) {
    /**
     * Object.assign 是ES6中对象的拷贝方法，接收的第一个参数是目标对象，其余参数是源对象。
     * 用法：Object.assign(target, source1, source2, ...)
     * 该方法可以实现浅拷贝，也可以实现一维对象的深拷贝
     * 
     * 注意事项：
     * 1. 如果目标对象target和源对象source有同名属性，则后面的属性会覆盖前面的属性
     * 2. 如果该函数只有一个参数，当参数为对象时，直接返回该对象；如果参数不是对象，会先将参数转换为对象再返回。如 Object.assign(5) 会返回 [Number: 5]，对其进行typeof取值返回object
     * 3. 因为null和undefined不能转换为对象，所以第一个参数不能传入null或undefined，否则会报错 TypeError: Cannot convert undefined or null to object
     */
    return Object.assign({}, obj);
}

// 2. 扩展运算符实现
function shallowCopy2() {
    const obj1 = {a:1, b: {c: 1}};
    const obj2 = {...obj1};

    obj1.a = 2;
    console.log(obj1);
    console.log(obj2);
    obj1.b.c = 2; // 改变引用类型，obj1和obj2同时改变
    console.log(obj1);
    console.log(obj2);
}
// shallowCopy2();

// 3. 数组方法实现数组浅拷贝 - slice / concat
function shallowCopy3() {
    const arr1 = [1,2,3,4,5];
    const arr2 = arr1.slice();
    // concat方法，不会改变原数组，而是返回一个新数组
    const arr3 = arr1.concat();
}

// 4. 手写实现浅拷贝
// 自己手写的 - Object.keys 实现 - 针对数组没办法处理
function shallowCopy(obj) {
    const keys = Object.keys(obj);
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
        const currentKey = keys[i]
        newObj[currentKey] = obj[currentKey];
    }
    return newObj;
}

const obj1 = {
    name: 'wang',
    gender: 'male',
    favourite: {
        fly: {
            type: 'aircraft'
        }
    }
}

const obj2 = shallowCopy1(obj1);
// 改变原始类型
obj2.name = 'chang';
// 改变引用类型
obj2.favourite.train = 'CRH';

// console.log(obj1); // favourite会发生改变
// console.log(obj2);

const arr1 = [1,2,3]
const arr2 = shallowCopyLast(arr1);
console.log(arr2);

// 教程写法：浅拷贝的实现; 注意要判断是object还是数组，分开创建不同的对象 - for...in实现
function shallowCopyN(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;

    // 根据 object 的类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};

    // 遍历 object，并且判断是 object 的属性才拷贝
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
        newObject[key] = object[key];
        }
    }

    return newObject;
}
// 延伸：1. for...in和for...of的区别。    2. 判断对象和判断数组 方便的方式

// for...in和for...of的区别
/**
 * for in遍历的是索引; for of遍历的是值
 * for in总是得到对象的key或数组、字符串的下标
 * for of总是得到对象的value或数组、字符串的值
 * for of 只能用于遍历number/数组/字符串/set/map等拥有迭代器对象的集合，但是不能遍历对象，因为Object没有迭代器对象(iterator)
 * 如果想遍历对象的属性，可以使用for in循环或者Object.keys等方法
 */