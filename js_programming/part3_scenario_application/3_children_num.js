// 小孩报数问题

// 问题: 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?

// 先产生数组
const arr = [];
for (let i = 1; i <= 30; i++) {
    arr.push(i);
}
// i % 3 === 0 ? 3 : i % 3

const length = arr.length;
const resArr = [];
for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 3 === 0) {
        continue;
    } else {
        resArr.push(arr[i])
    }
}

console.log(`结果是${resArr[resArr.length - 1]}`)

/**
 * 
 * @param {*} num 总数
 * @param {*} count 需要退出的计数
 */
function childNum(num, count) {
    const resArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % count === 0) {
            continue;
        } else {
            resArr.push(i);
        }
    }
    return resArr[resArr.length - 1];
}

console.log(childNum(31, 3))