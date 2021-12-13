// 手写instanceof
// instanceof用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
function insOf(left, right) {
    // 先判断入参
    if (!left || !right) {
        console.log('未传入比较值异常');
        return;
    }
    // 获取类型的原型
    let proto = Object.getPrototypeOf(left);
    // 获取对象的原型
    const rightProto = right.prototype;
    // 循环遍历 判断类型的原型是否等于对象的原型，直到对象的原型=null
    while(true) {
        if (!proto) return false;
        if (proto === rightProto) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    
    // 自己写的不太舒服的写法，不够清晰
    // while(proto != undefined) {
    //     if (proto === rightProto) {
    //         console.log('trueweq')
    //         return true;
    //     } else {
    //         proto = Object.getPrototypeOf(proto);

    //     }
    // }
    // return false;
}

function F() {};
function FB(){};
FB.prototype = new F();
const a = new FB();
const b = {};
console.log(insOf(a, F), 'a');
console.log(insOf(b, Object), 'b');