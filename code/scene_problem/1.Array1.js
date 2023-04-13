// Delete an element in the array that is repeated twice
// 1.使用slice
// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++
//       }
//       if (count == 2) {
//         arr.splice(j, 1)
//         arr.splice(i, 1)
//         i--
//         break
//       }
//     }
//   }
//   return arr
// }
let arrNum = [1, 2, 2, 5, 6, 7, 6, 9]

// let result = removeDuplicates(arrNum) // 1579
// console.log(result)

// 2.不适用slice 使用map 实例代码
/**
 *
 * @param {number[]} arr
 * @returns number[]
 */
function removeDuplicates2(arr) {
  const map = new Map()
  // 获取出现次数
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  // 找出出现两次元素的 index 查两次索引 索引处置为null
  for (const [key, value] of map) {
    if (value === 2) {
      let index = arr.indexOf(key)
      while (index !== -1) {
        arr[index] = null
        index = arr.indexOf(key, index + 1)
      }
    }
  }
  // 去掉空值
  let i = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== null) {
      arr[i] = arr[j]
      i++
    }
  }
  arr.length = i
  return arr
}
// console.log(removeDuplicates2(arrNum)) // 1579

function removeDuplications3(num) {
  let myMap = new Map()
  // map 保存各个元素出现的次数
  for (let i = 0; i < num.length; i++) {
    const key = num[i]
    if (myMap.has(key)) {
      myMap.set(key, myMap.get(key) + 1)
    } else {
      myMap.set(key, 1)
    }
  }
  // 将出现两次的元素位置设置为空值
  for ([key, value] of myMap) {
    if (value == 2) {
      let index = num.indexOf(key)
      while (index != -1) {
        num[index] = null
        index = num.indexOf(key, index + 1)
      }
    }
  }
  // 去除null值
  let i = 0
  for (let j = 0; j < num.length; j++) {
    if (num[j] !== null) {
      num[i] = num[j]
      i++
    }
  }
  num.length = i
  return num
}

console.log(removeDuplications3(arrNum))
