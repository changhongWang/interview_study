// 使用reduce求和

// arr = [1,2,3,4,5,6,7,8,9,10]，求和
const arr = [1,2,3,4,5,6,7,8,9,10];
const sum = arr.reduce((prev, current) => prev + current, 0);
console.log(sum);

// arr = [1,2,3,[[4,5],6],7,8,9]，求和
const arr2 = [1,2,3,[[4,5],6],7,8,9]
const sum2 = arr2.flat(2).reduce((prev, current) => prev + current, 0);
console.log(sum2)

// arr = [{a:1, b:3}, {a:2, b:3, c:4}, {a:3}]，求和
const arr3 = [{a:1, b:3}, {a:2, b:3, c:4}, {a:3}]
const sum3 = arr3.reduce((prev, curr) => prev + curr['a'], 0);
console.log(sum3);