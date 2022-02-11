// 动态的加载js文件
function addScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.body.appendChild(script);
}

addScript('http://xx.xxx.com/a.js?callback=handleRes');

function handleRes(res) {
    console.log(res);
}

// 返回的a.js
handleRes({
    a: 1
})
// -> console.log 输出 {a:1}