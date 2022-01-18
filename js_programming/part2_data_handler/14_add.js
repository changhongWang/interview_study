// 实现非负大整数相加
function bigNumSum(a, b) {
    let res = '';
    let temp = 0;

    a = String(a).split('');
    b = String(b).split('');

    while (a.length || b.length || temp) {
        // 1. pop 从数组的后面取出。 2. ~~ 按位非运算符
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9;
    }

    return res.replace(/^0+/, '');
}

console.log(bigNumSum(134, 5));