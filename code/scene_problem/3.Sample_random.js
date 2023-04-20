// // 给你个random 函数 生成一个sample 使得从长度为n的pool中随机抽出k个元素 k <= n

// function random() {
//   return Math.random()
// }

// function sample(pool, k) {
//   const n = pool.length
//   if (k > n) {
//     throw new Error('k should be less than or equal to the length of pool')
//   }

//   const selected = []
//   for (let i = 0; i < k; i++) {
//     const index = Math.floor(random() * (n - i))
//     selected.push(pool[index])
//     ;[pool[index], pool[n - i - 1]] = [pool[n - i - 1], pool[index]]
//   }

//   return selected
// }

// // Example usage:
// const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const k = 8
// const result = sample(pool, k)
// console.log(result)

// console.log(Math.random())

// 洗牌算法

function getRandom() {
  return Math.random()
}

function sample(pool, k) {
  let n = pool.length
  if (k > n) {
    throw new Error('k参数错误')
  }
  let selected = []
  for (let i = 0; i < k; i++) {
    let index = Math.floor(getRandom() * (n - i))
    selected.push(pool[index]);
    [pool[index], pool[n - 1 - i]] = [pool[n - 1 - i], pool[index]]
  }
  return selected
}
const pool = [1, 2]
const k = 2
const result = sample(pool, k)
console.log(result)