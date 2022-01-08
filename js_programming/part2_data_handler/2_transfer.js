// 交换a,b的值，不能使用临时变量
function transfer(a, b) {
    // 巧妙利用两个数的和、差
    a = a + b;
    b = a - b;
    a = a - b;
}