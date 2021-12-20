// 节流函数

/**
 * 形象化比喻：水龙头，当水龙头的水一直往下流，十分的浪费水，这时候可以把水龙头关小一点，让水一滴一滴往下流，每隔一段时间掉下来一滴水
 * 节流：限制一个函数在一段时间内只能执行一次，过了这段时间，在下一段时间又可以执行一次
 * 应用场景：
 * 1. 输入框的联想：可以在限定用户在输入时，每隔两秒响应一次联想，防止多次触发联想接口
 * 2. 输入框搜索查询：如果用户一致在输入，没有必要不断的调用服务端接口，等用户停止输入时再调用，
 * 设置一个合理的时间间隔，有效减轻服务端压力。
 * 3. 表单验证
 * 4. 按钮提交事件多次点击 一段时间内只响应一次
 */

// 时间戳法
function throttle(fn, delay = 1000) {
    let lastTime = 0;
    return function(...args) {
        const currentTime = Date.now();
        // 如果间隔大于设置的时间
        if (currentTime - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = currentTime;
        }
    }
}

const fn = throttle2((param, name) => {
    console.log('执行了，参数:', param, name);
}, 1000)

fn(1, '第一次');
setTimeout(() => {
    fn(500, '第二次');
}, 500)

setTimeout(() => {
    fn(900, '第3次')
}, 900)
setTimeout(() => {
    fn(1000, '第4次')
}, 1000)

// 定时器版 - 第一次触发不会执行，而是过delay时间之后执行
function throttle2(fn, delay) {
    // 重置定时器
    let timer = null;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}

// 定时器+时间戳
function throttle3(fn, delay) {
    // 初始化定时器
    let timer = null;
    // 上一次调用时间
    let prev = null;
    return function(...args) {
        // 当前触发事件时间
        const now = Date.now();
        // 触发时间是否大于delay
        const remaining = delay - (now - prev);

        // 清除定时器
        clearTimeout(timer);

        // 如果间隔时间满足delay
        if (remaining <= 0) {
            fn.apply(this, args);
            prev = Date.now();
        } else {
            // 否则，过了剩余时间执行最后一次fn
            setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        }
    }
}
