// 利用promise来实现图片的异步加载
const imgAsync = async (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
        console.log('图片请求成功')
        resolve(img);
    };
    img.onerror = (err) => {
        console.log('图片请求失败');
        reject(err);
    }
})

imgAsync('https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png').then((res) => {
    const cls = document.getElementsByClassName('dark')[0];
    cls.innerHTML = '';
    cls.appendChild(res)
}).catch(err => {
    console.log(err);
})