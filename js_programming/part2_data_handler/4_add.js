// 实现数组元素求和
// arr=[1,2,3,4,5,6,7,8,9,10]，求和
const arr = [1,2,3,4,5,6,7,8,9,10];
// 使用reduce
const sum = arr.reduce((total, i) => total += i, 0);
console.log(sum)

const isFullyFlatted = (arr) => {
    let isFullyFlatted = true;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            isFullyFlatted = false;
        }
    }
    return isFullyFlatted;
}
// arr=[1,2,3,[[4,5],6],7,8,9]，求和

// 利用flat函数实现
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
