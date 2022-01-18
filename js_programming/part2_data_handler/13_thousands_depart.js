// 将数字每千分位用逗号隔开，区分数字有小数和没有小数

// 要处理小数
function format(num) {
    let tempArr = String(num).split('.');
    const normalPart = tempArr[0];
    const decimalPart = tempArr[1];
    return `${formatNomal(normalPart)}${decimalPart ? `.${decimalPart}` : ''}`
}

// 无小数
function formatNomal(num) {
    // 转换成数组 取反
    const numArr = String(num).split('').reverse();
    const resArr = [];
    for (let i = 0; i < numArr.length;) {
        if (!!numArr[i+2]) {
            // 有值的情况下 拼接并push
            resArr.push('' + numArr[i] + numArr[i+1] + numArr[i+2]);
            i += 3;
        } else {
            // 没有值 到终点了
            resArr.push('' + strFormat(numArr[i]) + strFormat(numArr[i+1]) + strFormat(numArr[i+2]));
            break;
        }
    }
    const resStr = resArr.join(',');
    return resStr.split('').reverse().join('')

    // 优化：可以利用字符串match方法
}

console.log(formatNomal(123456789))
console.log(format(123456789.))

function strFormat(str) {
    return !!str ? str : '';
}