// promise 实现Ajax
function getJSON() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        // 设置状态的监听函数
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) {
                return;
            }
            // 当请求成功或失败时 改变promise的状态
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
        xhr.onerror = function() {
            reject(new Error(this.statusText));
        }
        // 设置响应的数据类型
        xhr.responseType = 'json';
        // 设置请求头信息
        xhr.setRequestHeader('Accept', 'application/json');
        // 发送http请求
        xhr.send(null);
    })
}

// 使用promise实现 其实就是在XHR对象外层包裹了一个promise 并且返回