// 用setTimeout实现setInterval

/**
 * 
为什么要用setTimeout模拟setInterval？
setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，
它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。
所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，
当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。

针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，
这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。

实现思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果
 */
let timer = null;
function mySetInterval(cb, time) {
    timer = setTimeout(() => {
        cb();
        clearTimeout(timer);
        mySetInterval(cb, time);
    }, time)
}

mySetInterval(() => {
    console.log(5);
}, 1000)