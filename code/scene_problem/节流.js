function throttle(fn, interval) {
  let lastExecutionTime
  let timeoutID

  return function (...args) {
    const currentTime = Date.now()

    if (!lastExecutionTime) {
      // 如果函数尚未执行过，则立即执行
      lastExecutionTime = currentTime
      fn.apply(this, args)
    } else if (currentTime - lastExecutionTime >= interval) {
      // 如果已经超过了指定的时间间隔，则立即执行并更新上次执行的时间
      clearTimeout(timeoutID)
      lastExecutionTime = currentTime
      fn.apply(this, args)
    } else {
      // 否则，设置一个定时器，在时间间隔结束时执行
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        lastExecutionTime = Date.now()
        fn.apply(this, args)
      }, interval - (currentTime - lastExecutionTime))
    }
  }
}


// 简化版
function throttle(fn, interval) {
  let lastExeTime = 0

  return function (...args) {
    let currentTime = Date.now()
    if (currentTime - lastExeTime >= interval) {
      lastExeTime = currentTime
      fn.apply(this, args)
    }
  }
}