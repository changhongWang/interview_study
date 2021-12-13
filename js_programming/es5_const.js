// es5实现const

// 核心在于 Object.defineProperty
function _const(key, val) {
    const desc = {
        value: val,
        writable: false
    };
    Object.defineProperty(global, key, desc)
}

_const('a', {a: 1});
_const('b', 5);

b = 6
console.log(a);
console.log(b);
