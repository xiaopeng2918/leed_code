/**
 * 
输入数据包括多组。
每组数据一行,每行的第一个整数为整数的个数n(1 <= n <= 100), n为0的时候结束输入。
接下来n个正整数,即需要求和的每个正整数
 * 
 */
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.on('line', (input) => {
//   const inputArray = input.split(' ').map(Number)
//   const n = inputArray[0]

//   if (n === 0) {
//     rl.close()
//     return
//   }

//   const integers = inputArray.slice(1)
//   const totalSum = integers.reduce((a, b) => a + b, 0)
//   console.log(totalSum)
// })

// 

const readline = require('readline')
/**
 * 
输入的第一行包括一个正整数t(1 <= t <= 100), 表示数据组数。
接下来t行, 每行一组数据。
每行的第一个整数为整数的个数n(1 <= n <= 100)。
接下来n个正整数, 即需要求和的每个正整数。
 * 
 * 
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputLines = []
let lineCount = 0

rl.on('line', (input) => {
  inputLines.push(input)
  lineCount++

  if (lineCount === parseInt(inputLines[0]) + 1) {
    processInput(inputLines)
    rl.close()
  }
})

function processInput(inputLines) {
  const t = parseInt(inputLines[0])

  for (let i = 1; i <= t; i++) {
    const inputArray = inputLines[i].split(' ').map(Number)
    const n = inputArray[0]

    const integers = inputArray.slice(1)
    const totalSum = integers.reduce((a, b) => a + b, 0)
    console.log(totalSum)
  }
}
