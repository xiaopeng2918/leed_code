function findIndex(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
const arr = [1, 3, 4, 6, 8]
console.log(findIndex(arr, 4)) // 输出: 2
console.log(findIndex(arr, 7)) // 输出: 4
console.log(findIndex(arr, 0)) // 输出: 0
console.log(findIndex(arr, 9)) // 输出: 5
