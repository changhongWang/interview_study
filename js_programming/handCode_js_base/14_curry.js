function curry(fn) {
    const fnArgsLength = fn.length;

    return curryFactory.call(this, fn, fnArgsLength);
}

// 真正实现柯里化函数的方法
function curryFactory(fn, length, ...args) {
    return function(...params) {
        const argsArr = [...args, ...params];
        if (argsArr.length >= length) {
            return fn.apply(this, argsArr);
        } else {
            return curryFactory.call(this, fn, length, ...argsArr);
        }
    }
}

const add = curry(function(a,b,c) {
    return a+b+c;
})

// es6实现
function es6_curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

console.log(add(1)(2)(3));
console.log(add(1,2)(3));
console.log(add(1)(2,3));
console.log(add(1,2,3));