// 防抖
//! 防抖不需要比对时间
/**
 * 使用场景：一般用在连续的事件只需要触发一次回调的场景，如：
 * 1. 搜索框搜索输入。只需用户最后一次输入完，发送请求
 * 2. 用户名、手机号、邮箱输入验证
 * 3. 浏览器窗口大小改变后，只需装口调整完后，再执行resize中的代码，防止重复渲染
 */

// 最简单的防抖函数：设置一个定时器，每当重复调用的时候，就清除定时器，重新定时，直到在设定的时间内没有重复调用函数
function debounce(fn, delay, e) {
    let timer;
    let baseTime = new Date().getTime();
    return function() {
        const currTime = new Date().getTime();
        if (currTime - baseTime < delay) {
            // 小于间隔时间 clean
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(e);
        }, delay);
    }
}

// 掘金文章写法
function deboucne2(fn, delay) {
    // timer是一个定时器
    let timer = null;
    // 返回一个闭包函数, 用闭包保存timer确保其不被销毁，重复触发会清除上一次的定时器
    return function() {
        // 调用一次就清除上次的定时器
        clearTimeout(timer);
        // 设置新的定时器
        timer = setTimeout(function() {
            fn();
        }, delay)
    }

}

// 存在问题：1. 无法传递事件参数 2. 调用fn函数的对象 this指向
// 优化版本
function debounceAdvance(fn, delay) {
    // timer是一个定时器
    let timer = null;
    // 返回一个闭包函数，用闭包保存timer确保其不会被销毁，重复触发会清除上一次的定时器
    return function() {
        // 保存事件参数
        let arg = arguments;
        // 清除上一次的定时器
        clearTimeout(timer);
        // 设置新的定时器
        timer = setTimeout(() => {
            // 如果不改变this指向，则会指向fn定义环境
            fn.apply(this, arg);
        }, delay)
    }
}

const fn = debounceAdvance((e) => {
    console.log('lalala', e, this);
}, 1000);

console.log(1, fn())
console.log(2, fn())
console.log(3, fn())

setTimeout(() => {
    console.log(4, fn())
}, 2000)


setTimeout(() => {
    console.log(5, fn())
}, 5000)