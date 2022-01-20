// 函数柯里化概念：函数柯里化是把接受多个参数的函数转变为接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数的新技术

// 假设要实现 add(a)(b)(c)

// 1. 暴力解法
function add1(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}
// console.log(add1(1)(2)(3))

// 2. 柯里化解决方案 - 分为参数不固定和参数固定两个场景

// 参数长度固定 - 只有一个参数
function add2(num) {
    let sum = num;
    const _add = function(num) {
        // 注意这里 返回的函数内部返回add2
        return add2(sum+num)
    };
    _add.toString = function() {
        return sum;
    }
    return _add;
}
// console.log(add2(1)(2)(3) == '6')

// 参数长度不固定
function add3(...args) {
    return args.reduce((a, b) => a + b, 0);
}
// 将传入的函数变成柯里化函数的工具函数
function currify(fn) {
    let args = [];
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp;
        } else {
            let val = fn.apply(this, args);
            args = [];
            return val;
        }
    }
}

let addCurry = currify(add3);
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
