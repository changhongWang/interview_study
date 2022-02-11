// 判断对象是否存在循环引用
const isCycleObject = (obj, parent) => {
    const parentArr = parent || [obj];
    for (let k in obj) {
        if (typeof obj[k] === 'object') {
            let flag = false;
            parentArr.forEach((pObj) => {
                if (pObj === obj[k]) {
                    // 当前对象是纯粹的对象了
                    flag = true;
                }
            })
            if (flag)
                return true;
            flag = isCycleObject(obj[k], [...parentArr, obj[k]]);
            if (flag)
                return true;
        }
    }
    return false;
}

const a = 1;
const b = {a};
const c = {b};
const o = {d:{a:3},c}
o.c.b.aa = a;
console.log(JSON.stringify(o))

console.log(isCycleObject(o));
