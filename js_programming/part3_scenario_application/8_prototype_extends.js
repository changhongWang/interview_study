// 手写实现prototype继承
function Animal() {
    this.type = 'animal';
    this.sayType = function() {
        console.log(this.type);
    }
}

function Cat(name) {
    this.type = 'cat';
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    }
}

Cat.prototype = new Animal();

const mimi = new Cat('mimi');
mimi.sayType();
mimi.sayName();


// 延伸 使用ES5代码 用多种方式实现继承，并说明其优缺点