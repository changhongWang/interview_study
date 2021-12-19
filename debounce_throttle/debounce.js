function debounce(fn, gapTime) {
    let timer;
    let baseTime = new Date().getTime();
    return function() {
        const currTime = new Date().getTime();
        if (currTime - baseTime < gapTime) {
            // 小于间隔时间 clean
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, gapTime);
    }
}

const fn = debounce(() => {
    console.log('lalala');
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