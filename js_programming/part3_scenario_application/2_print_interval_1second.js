// 每间隔一秒打印  1,2,3,4

// 1. ES6 let实现块级作用域
for (let i = 1; i <= 4; i++) {
    setTimeout(() => {
        console.log(i);
    })
}

// IIFE 闭包
for (var i = 1; i <= 4; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i)
        })
    })(i)
}