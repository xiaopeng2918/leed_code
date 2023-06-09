const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (input) => {
  const arrays = input.match(/\[(.*?)\]/g)
  const parsedArrays = arrays.map((arrayString) => JSON.parse(arrayString))

  const mergedArray = parsedArrays.flat()
  console.log('Merged array:', mergedArray)
})
