// _call function.call(thisArg, arg1, arg2, ...)
// 原理：由于函数的this指向它的直接调用者，我们变更调用者即完成this指向的变更。
function foo() {
    console.log(this.name);
}

const obj = {
    name: '写代码'
}

obj.foo = foo;
obj.foo(); // 写代码
const obj2 = {
    name: 'wangle'
}

Function.prototype.myCall = function(thisArg, ...args) {
    const that = this;
    thisArg.f = this;
    // 这里实现的改变this的方式，是通过给thisArg上的任意属性赋值实现的
    // 这样调用的时候 如thisArg.fn 就会指向thiArg，赋值实际要执行的方法给thisArg下的任意属性即可

    console.log(this === obj.foo, 777)
    console.log(thisArg, that, that === thisArg.f);
    return thisArg.f(args);
}

obj.foo.myCall(obj2);