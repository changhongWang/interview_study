// 循环亮灯
// 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function execType(type) {
    switch(type) {
        case 'red': red();break;
        case 'green': green();break;
        case 'yellow': yellow();break;
    }
}

// 递归方式 调用自身 实现
const task = (timer, light, callback) => {
    setTimeout(() => {
        switch(light) {
            case 'red': red();break;
            case 'green': green();break;
            case 'yellow': yellow();break;
        };
        callback();
    }, timer);
}

const step = () => {
    task(3000, 'red', () => {
        task(2000, 'green', () => {
            task(1000, 'yellow', step)
        })
    })
};
// step();

// 递归+promise方式实现
const task1 = (time, light) => new Promise((resolve, reject) => {
    setTimeout(() => {
        switch(light) {
            case 'red': red();break;
            case 'green': green();break;
            case 'yellow': yellow();break;
        };
        resolve();
    }, time)
})

const step1 = () => {
    task1(3000, 'red').then(() => {
        task1(2000, 'green').then(() => {
            task1(1000, 'yellow').then(() => {
                step1();
            })
        })
    })
}

// step1();

// async await实现
async function loop3() {
    await task1(3000, 'red');
    await task1(2000, 'green');
    await task1(1000, 'yellow');
    await loop3();
}

loop3();