// 实现佩波那契数列: 1、1、2、3、5、8、13、21、34

// 普通版
function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const cacheObj = {};
// 优化版 - 利用缓存对象
function fibonacci2(n) {
    if (cacheObj[n]) {
        return cacheObj[n];
    }
    if (n === 0 || n === 1) {
        const res = 1;
        cacheObj[n] = res;
        return res;
    }
    const res = fibonacci(n - 1) + fibonacci(n - 2);
    cacheObj[n] = res;
    return res;
}

// 优化版 - 利用数组
function fibonacci3(n) {
    const arr = [1,1,2];
    const arrLength = cacheArr.length;

    if (n < arrLength) {
        return arr[n];
    }

    for (let i = 0; i < n; i++) {
        arr.push(arr[n - 1] + arr[n - 2]);
    }

    return arr[n.length - 1];
}

// 不用递归实现
function fn(n) {
    let pre1 = 1;
    let pre2 = 1;
    let current = 2;

    if (n < 2) {
        return 1;
    }
    if (n === 2) {
        return current;
    }
    for (let i = 2; i < n; i++) {
        pre1 = pre2;
        pre2 = current;
        current = pre1 + pre2;
    }

    return current;
}
console.log(fn(0));
console.log(fn(1));
console.log(fn(2));
console.log(fn(3));
console.log(fn(4));
