// 实现数组元素求和
// arr=[1,2,3,4,5,6,7,8,9,10]，求和
const arr = [1,2,3,4,5,6,7,8,9,10];
// 使用reduce
const sum = arr.reduce((total, i) => total += i, 0);
console.log(sum)

// arr=[1,2,3,[[4,5],6],7,8,9]，求和
// 利用flat函数实现
const isFullyFlatted = (arr) => {
    let isFullyFlatted = true;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            isFullyFlatted = false;
        }
    }
    return isFullyFlatted;
}

const arr2 = [1,2,3,[[4,5],6],7,8,9];
function flatSum(arr) {
    let flattedArr = arr.flat();
    while(!isFullyFlatted(flattedArr)) {
        flattedArr = flattedArr.flat();
    }
    const sum = flattedArr.reduce((total, i) => total += i, 0);
    return sum;
}
const sum2 = flatSum(arr2);
console.log(sum2)

// toString实现
function arrSumByToString(arr) {
    const arrString = Array.prototype.toString.call(arr);
    const newArr = arrString.split(',');
    const res = newArr.reduce((total, i) => total += Number(i), 0);
    return res;
}
const sum3 = arrSumByToString(arr2);
console.log(sum3, 'sum3')

// 递归实现
function recurrenceArrSum(arr, total = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            total += arr[i];
        } else {
            total = recurrenceArrSum.call(this, arr[i], total);
        }
    }
    return total;
}

const sum4 = recurrenceArrSum(arr2);
console.log(sum4, 'sum4')

// 高级递归写法
const arr5 = [1,2,3,4,5,6];
function add(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + add(arr.slice(1));
}
console.log(add(arr5))