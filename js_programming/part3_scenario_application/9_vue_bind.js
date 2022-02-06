// 实现Vue双向数据绑定
let obj = {};
let input = document.getElementById('input');
let span = document.getElementById('span');

// 利用Object.defineProperty做数据劫持
Object.defineProperty(obj, 'text', {
    configurable: true,
    enumerable: true, // 可枚举
    get() {
        console.log('获取数据');
    },
    set(newVal) {
        console.log('数据更新了');
        input.value = newVal;
        span.innerHTML = newVal;
    }
})

input.addEventListener('keyup', function(e) {
    obj.text = e.target.value;
})