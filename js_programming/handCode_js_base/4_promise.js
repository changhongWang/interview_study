// 手写promise

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise(fn) {
  // 保存初始化状态
  const that = this;

  // init
  this.state = PENDING;
  // 用于保存resolve或者reject函数传入的值
  this.value = null;

  // 用于保存resolve的回调函数
  this.resolveCallbacks = [];
  // 用于保存reject的回调函数
  this.rejectCallbacks = [];

  // 状态转变为resolved方法
  function resolve(value) {
    // 先判断传入的值是否为Promise，如果不是，则状态改变必须等待前一个状态改变之后再进行改变
    if (value instanceof myPromise) {
      return value.then(resolve, reject);
    }

    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      if (that.state === PENDING) {
        // 只有pending才修改状态
        that.state = RESOLVED;
        that.value = value;
        that.resolveCallbacks.forEach(callback => {
          callback(value);
        })
      }
    }, 0)
  }

  // 状态转变为rejected方法
  function reject(value) {
    // 先判断传入的值是否为Promise，如果不是，则状态改变必须等待前一个状态改变之后再进行改变
    if (value instanceof myPromise) {
      return value.then(resolve, reject);
    }

    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      if (that.state === PENDING) {
        // 只有pending才修改状态
        that.state = REJECTED;
        that.value = value;
        that.rejectCallbacks.forEach(callback => {
          callback(value);
        })
      }
    }, 0)
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function(onResolved, onRejected) {
  // 首先判断两个参数是不是函数类型，因为是可选参数
  onResolved = typeof onResolved === 'function' ? onResolved : function(value) {
    return value;
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function(err) {
    throw err
  }

  if (this.state === PENDING) {
    this.resolveCallbacks.push(onResolved);
    this.rejectCallbacks.push(onRejected);
  }

  // 如果已经fulfilled 直接执行对应的函数
  if (this.state === RESOLVED) {
    onResolved(this.value);
  }
  if (this.state === REJECTED) {
    onRejected(this.value);
  }
}
