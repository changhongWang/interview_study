// 实现字符串的repeat方法

// 输入字符串s，以及其重复的次数，输出重复的结果，例如输入 (abc, 2) 输出 abcabc
function repeatStr(str, num) {
    let res = '';
    for (let i = 0; i < num; i++) {
        res += str;
    }
    return res;
}

// 教程的方法（简洁） - 利用数组
function repeat(str, num) {
    return new Array(num + 1).join(str);
}

// 利用递归
function repeat2(str, num) {
    return num > 0 ? str.concat(repeat2(str, --num)) : '';
}

const a = repeat2('abc', 2);
console.log(a);