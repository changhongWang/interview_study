Function.prototype.callApply = function(thisArg, [...args]) {
    thisArg.fn = this;
    return thisArg.fn(...args);
}

var obj1 = {
    name: 'wang'
}

function sayName() {
    console.log(this.name, 'My Name, args:', arguments);
}

var obj2 = {
    name: 'obj2'
};

obj1.sayName = sayName;

obj1.sayName.callApply(obj2, [1,2,3])