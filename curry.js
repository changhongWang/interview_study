// 柯里化
// 掘金： https://juejin.cn/post/6844903882208837645
function fn(a,b,c,d,e) {
    console.log(a,b,c,d,e);
}
// 实现柯里化函数
function curry(fn) {
    return function(...args) {
        const argsNum = [args].length;
    }
}

let _fn = curry(fn);

_fn(1,2,3,4,5);     // print: 1,2,3,4,5
_fn(1)(2)(3,4,5);   // print: 1,2,3,4,5
_fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
_fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5
