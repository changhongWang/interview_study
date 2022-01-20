// 利用ES5和ES6求函数参数的和
function sum() {
    const args = Array.prototype.slice.call(arguments);
    let res = 0;
    for (let i = 0; i < args.length; i++) {
        // 这里 * 1，主要是做类型转换 防止传入的arguments中包含字符串类型
        res += args[i] * 1;
    }
    return res
}
console.log(sum_ES6(true,2,3,'4',5,6,7,8,9))

function sum_ES6(...args) {
    return args.reduce((prev, curr) => prev + curr * 1, 0);
}

// 注意 这里主要区别在于取arguments的方式