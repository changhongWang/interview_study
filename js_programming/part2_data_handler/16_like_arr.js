// 类数组转化为数组

const arrayLike = [];
// 1. 通过call调用数组的slice方法来实现
Array.prototype.slice.call(arrayLike)

// 2. 通过call调用数组的splice方法
Array.prototype.splice.call(arrayLike, 0);

// 3. 通过apply调用数组的concat方法
Array.prototype.concat.apply([], arrayLike);

// 4. Array.from
Array.from(arrayLike)