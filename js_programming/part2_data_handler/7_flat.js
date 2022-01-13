function flat(arr, depth) {
    // 先判断异常场景
    if (!Array.isArray(arr) || depth <= 0) {
        return arr;
    }

    // 1. 第一种方式
    // if (depth === Infinity) {
    //     // 无限
    //     while(arr.some(item => Array.isArray(item))) {
    //         arr = [].concat(...arr);
    //     }
    // } else {
    //     for (let i = 0; i < depth; i++) {
    //         arr = [].concat(...arr);
    //     }
    // }
    // return arr;

    // 2. 教程给的方式 用reduce
    return arr.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
            return prev.concat(flat(cur, depth - 1));
        } else {
            return prev.concat(cur);
        }
    }, [])
}

const arr1 = [1, 2, [3, [4, 5]]];
const res = flat(arr1, Infinity);
console.log(res);