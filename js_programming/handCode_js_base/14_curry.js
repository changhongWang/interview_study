// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
function curry(fn, args) {
    let length = fn.length;
    args = args || [];

    return function() {
        let subArgs = Array.prototype.slice.call(args);
        // 拼接得到现在的所有参数
        for (let i = 0; i < arguments.length; i++) {
            subArgs.push(arguments[i]);
        }

        // 判断参数的长度是否已经符合函数所需参数的长度
        if (subArgs.length >= length) {
            // 满足需求 执行函数
            return fn.apply(this, subArgs);
        } else {
            // 如果不满足 递归返回柯里化函数，等待参数的传入
            return curry.call(this, fn, subArgs);
        }
    }
}

const fn = curry(function(a,b,c) {
    return a+b+c;
})

console.log(fn(1)(2)(3));
console.log(fn(1,2)(3));
console.log(fn(1)(2,3));
console.log(fn(1,2,3));