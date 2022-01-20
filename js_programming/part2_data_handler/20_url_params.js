// 解析url params为对象

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
const params = parseParam(url)
console.log(params)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
function handleVal(val) {
    if (!val) {
        return true;
    }
    if (!isNaN(Number(val))) {
        return Number(val);
    }
    const reg = /\%/;
    if (reg.test(val)) {
        return decodeURIComponent(val);
    }
    return val;
}
function parseParam(url = '') {
    const res = {};
    // 异常场景剥离
    if (typeof url !== 'string' || !url) {
        return res;
    }
    
    const paramsStr = url.split('?')[1];
    const paramsArr = paramsStr.split('&');
    for (let param of paramsArr) {
        let [key, val] = param.split('=');
        // 数据清洗
        val = handleVal(val);
        if (res.hasOwnProperty(key)) {
            res[key] = [].concat(res[key], val)
        } else {
            res[key] = val;
        }
    }
    return res;
}