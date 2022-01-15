// 数组去重

// 给定某无序数组，要求去除数组中的重复数字并返回新的无重复数组
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// ES6方法：使用数据结构集合(Set)
function removeRepeat1(arr) {
    const set = new Set(arr);
    console.log([...set]);
    return [...set];
}
// removeRepeat1(array);

// ES5方法：利用indexOf ---这里如果ES6的话还可以用includes
function removeRepeat2(arr = []) {
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (resArr.indexOf(arr[i]) === -1) {
            resArr.push(arr[i]);
        }
    }
    console.log(resArr);
    return resArr;
}
removeRepeat2(array);

// ES5方法：使用map存储不重复的数字
function removeRepeat3(arr = []) {
    const map = {};
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = arr[i];
        }
    }
    for (let i in map) {
        resArr.push(i);
    }
    console.log(resArr, '3');
    return resArr
}
removeRepeat3(array);