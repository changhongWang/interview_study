// 实现深拷贝
// 3. 手写deepClone

/**
 * 深拷贝定义：深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给他，因此对象获得的一个新的引用类型而不是一个原有类型的引用。
 * 深拷贝对于一些对象可以用JSON.parse/stringify来实现，
 * 但是由于JSON的对象格式比js的对象格式更加严格，所以如果属性值里出现 undefined、函数或者Symbol类型 的值时，会转换失败（会丢失 不会报错）。
 */

// 方案1. JSON.stringify / JSON.parse组合
const a = {
    b: 0,
    c: {
        d: {
            e: 5
        }
    },
    sayName() {
        console.log('name')
    }
}
const clonedA = JSON.parse(JSON.stringify(a));
clonedA.c.d = 6
// console.log(a);
// console.log(clonedA);

// 方案2. lodash deepClone

// 方案3 手写深拷贝 递归？
function deepClone(obj) {
    if (!obj || typeof obj !== "object") return;

    const res = Array.isArray(obj) ? [] : {};

    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            res[k] = typeof obj[k] === 'object' ? deepClone(obj[k]) : obj[k];
        }
    }
    return res;
}

const obj1 = {
    a: 1,
    b: {
        sayC: function() {
            return this.c;
        },
        c: {
            d: 5
        }
    }
}
const obj2 = deepClone(obj1);
obj2.b.c = 5;
console.log(obj1, obj2)

// 延伸：手写的深拷贝有没有算法优化空间？