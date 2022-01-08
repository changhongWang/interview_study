// 实现日期格式化函数
function dateFormat(dateInput, format) {
    const year = dateInput.getFullYear();
    const month = fixZero(dateInput.getMonth() + 1);
    const date = fixZero(dateInput.getDate());

    return format.replace('yyyy', year).replace('MM', month).replace('dd', date);
}

function fixZero(num) {
    if (num.toString().length !== 2) {
        return '0' + num;
    }
    return num.toString();
}

const a = dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
const b = dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
const c = dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日

console.log(a);
console.log(b);
console.log(c);