// 手写扁平化函数
// 1. 递归实现
function flatten1() {
    const originArr = [1, [2, [3, 4, 5]]]
    function flat(arr) {
        let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'object') {
                resultArr.push(arr[i]);
            } else {
                const res = flat(arr[i]);
                resultArr = [...resultArr, ...res];
            }
        }
        return resultArr;
    }
    const flattedArr = flat(originArr);
    // console.log(flattedArr);
}

flatten1();

// 2. reduce （其实还是用递归，只是用reduce简化了递归）
// 从递归函数可以看出，其实就是对数组每一项进行处理，那么其实也可以用reduce来实现数组的拼接，从而简化第一版的代码。
function flatten2() {
    const originArr = [1, [2, [3, 4, 5]]];
    function flat(arr = []) {
        return arr.reduce((prev, next) => {
            return prev.concat(Array.isArray(next) ? flat(next) : next)
        }, []);
    }
    const flattedArr = flat(originArr);
    console.log(flattedArr)
}
// flatten2()

// 3. 扩展运算符
// 通过扩展运算符和Array.some方法，共同使用，达到数组扁平化的目的
function flatten3() {
    const originArr = [1, [2, [3, 4, 5]]];

    function flat(arr = []) {
        while(arr.some(item => Array.isArray(item))) {
            arr = [].concat(...arr);
        }
        return arr;
    }
    const flattedArr = flat(originArr);
    console.log(flattedArr)
}
// flatten3();

// 4. toString
// 可以通过split和toString两个方法来共同实现数组扁平化，由于数组会默认带一个toString方法，所以可以把数组直接转换成逗号分隔的字符串
function flatten4() {
    const originArr = [1, [2, [3, 4, 5]]];
    const res = originArr.toString().split(',').map(item => Number(item));
    console.log(res);
}
// flatten4();

// 5. ES6 flat函数
function flatten5() {
    const originArr = [1, [2, [3, 4, 5]]];
    // flat 方法的语法：arr.flat([depth])
    // 其中depth是flat的参数，depth代表数组的展开深度（不传入的话 默认值为1），如果层数不确定 可以穿入Infinity，代表不论多少层都要展开
    const res = originArr.flat(Infinity);
    console.log(res);
}
// flatten5();

// 6. 正则和JSON
function flatten6() {
    const originArr = [1, [2, [3, 4, 5]]];

    let str = JSON.stringify(originArr);
    str = str.replace(/(\[|\])/g, '');
    str = `[${str}]`;
    console.log(JSON.parse(str))
}
flatten6();