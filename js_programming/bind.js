Function.prototype.callBind = function(thisArg, [...args]) {
    thisArg.fn = this;
    return function() {
        thisArg.fn(...args);
    };
}

function testClick() {
    console.log('you have clicked number', this.number);
}

const obj1 = {
    name: 'wang',
    number: 5
}

const fn = testClick.bind(obj1);
fn();