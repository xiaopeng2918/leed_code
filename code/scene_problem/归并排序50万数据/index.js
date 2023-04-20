// eg
// function merge(left, right) {
//   let result = []
//   let leftIndex = 0
//   let rightIndex = 0

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex])
//       leftIndex++
//     } else {
//       result.push(right[rightIndex])
//       rightIndex++
//     }
//   }

//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }

//   const middle = Math.floor(arr.length / 2)
//   const left = arr.slice(0, middle)
//   const right = arr.slice(middle)

//   return merge(mergeSort(left), mergeSort(right))
// }



function merge(leftArr, rightArr) {
  let result = []
  let left = 0
  let right = 0
  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] <= rightArr[right]) {
      result.push(leftArr[left])
      left++
    } else {
      result.push(rightArr[right])
      right++
    }
  }
  return result.concat(leftArr.slice(left).concat(rightArr.slice(right)))
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let middle = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, middle)
  let rightArr = arr.slice(middle)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}
// 生成一个包含50个随机整数的数组
const randomNumbers = Array.from({ length: 500000 }, () => Math.floor(Math.random() * 100))

// 使用归并排序对数组进行排序
const sortedNumbers = mergeSort(randomNumbers)

console.log(JSON.stringify(sortedNumbers))