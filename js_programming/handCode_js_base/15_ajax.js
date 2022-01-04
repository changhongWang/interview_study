// 实现Ajax请求
const SERVER_URL = '/server';
const xhr = new XMLHttpRequest();

// 创建http请求
xhr.open('GET', SERVER_URL, true);
// 设置状态监听函数
xhr.onreadystatechange = function() {
    if (this.readyState !== 4) {
        return;
    }
    // 请求成功时
    if (this.status === 200) {
        handle(this.response);
    } else {
        console.error(this.statusText);
    }
}
// 设置请求失败时的监听函数
xhr.onerror = function() {
    console.error(this.statusText);
}
// 设置请求头信息
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');
// 发送http请求
xhr.send(null);