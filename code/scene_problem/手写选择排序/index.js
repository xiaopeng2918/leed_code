function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

const arr = [5, 3, 8, 4, 2]

console.log(selectSort(arr)) // 输出 [2, 3, 4, 5, 8]
