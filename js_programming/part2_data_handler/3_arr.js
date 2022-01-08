// 实现数组的乱序输出
function clutter(arr) {
    for (let i = 0; i < arr.length; i++) {
        // 核心：随机生成索引值
        const randomIndex = Math.round(Math.random() * (arr.length - 1 -i)) + i;
        // 巧妙利用ES6 解构赋值进行替换
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}

// 方法2: 倒序遍历
function clutter2(arr) {
    let length = arr.length;
    let randomIndex, temp;
    while(length) {
        randomIndex = Math.floor(Math.random() * length--);
        temp = arr[length];
        arr[length] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

const arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(clutter2(arr1))

function random(i) {
    const length = 10;
    const random = Math.random();
    const randomIndex = Math.round(random * (length - 1 -i)) + i;
    console.log(random);
    return randomIndex;
}

// console.log(random(9));

// 延伸 如果生成指定范围内的随机数？