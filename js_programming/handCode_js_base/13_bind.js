// 手写bind函数
Function.prototype.myBind = function(context = window) {
    if (typeof this !== 'function') {
        console.log('Error: 调用者必须是函数');
        return;
    }
    context.fn = this;
    return function() {
        const res = context.fn();
        delete context.fn;
        return res;
    };
}

function callName() {
    console.log(`I am ${this.name}`)
}

const obj = {
    name: 'wang'
}

const bindFn = callName.myBind(obj);
const res = bindFn();
console.log(res);