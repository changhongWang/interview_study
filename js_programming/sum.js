// 实现函数sum, sum(1)(2)(3)()  【柯里化】
function sum(num) {
    // let res = 0;

    // if (!num) {
    //     return res;
    // }
    // const addFn = num => {
    //     res += num;
    //     // return addFn;
    // }
    // return addFn;

    let total = 0;
    const _sum = (num) => {
        if (!num) {
            return total;
        }
        total += num;
        return _sum;
    }

    return _sum(num);
}

const result = sum(1)(2)(3)();

console.log(result);