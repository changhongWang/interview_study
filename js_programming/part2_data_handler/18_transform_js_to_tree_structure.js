// 将js对象转换为树形结构

/**
// 转换前：
source = [{
        id: 1,
        pid: 0,
        name: 'body'
    }, {
        id: 2,
        pid: 1,
        name: 'title'
    }, {
        id: 3,
        pid: 2,
        name: 'div'
}]
// 转换为: 
tree = [{
    id: 1,
    pid: 0,
    name: 'body',
    children: [{
        id: 2,
        pid: 1,
        name: 'title',
        children: [{
            id: 3,
            pid: 1,
            name: 'div'
        }]
    }
}]
 */

const source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}, {
    id: 4,
    pid: 3,
    name: 'span'
}]

function getDeepChildren(obj) {
    if (!obj.children) {
        return obj;
    }
    return getDeepChildren(obj.children);
}

function transformToTree(arr) {
    let resultObj;
    for (let i = 0; i < arr.length; i++) {
        // 如果是空对象
        if (!resultObj) {
            resultObj = arr[i];
        } else {
            // 非空 递归判断是否有children
            const deepChildrenObj = getDeepChildren(resultObj);
            deepChildrenObj.children = arr[i];
        }
    }
    return resultObj;
}

const result = jsonToTree(source)
console.log(result);

// 教程解法 利用到了pid去做绑定关系 自己写的解法中没有考虑这点 所以用了递归
function jsonToTree(data) {
    // 初始化结果数组，并判断输入数据的格式
    let result = [];
    if (!Array.isArray(data)) {
        return result;
    }

    // 使用map，将当前对象的id与当前对象对应存储起来
    let map = {};
    data.forEach(item => {
        map[item.id] = item;
    })

    data.forEach(item => {
        let parent = map[item.pid];
        if (parent) {
            (parent.children || (parent.children = [])) && parent.children.push(item);
            // children.push(item);
        } else {
            console.log(item, 88);
            result.push(item);
        }
    })

    return result
}