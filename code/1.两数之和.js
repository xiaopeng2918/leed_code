// /**
//  *
//  * @param {arr[]} nums
//  * @param {num} target
//  * @returns [num1, num2] or void
//  */
// function towSum(nums, target) {
//   const map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]
//     if (map[complement] !== undefined) {
//       return [map[complement], i]
//     }
//     map[nums[i]] = i
//   }
// }
// // easy_test
// let nums = [3, 2, 4],
//   target = 6
// const result = towSum(nums, target)
// console.log(result)







function twoSunNum(arr, target){
  const length = arr.length
  let myMap = new Map()
  for(let i = 0; i < length; i++){
    if(myMap.get(target - arr[i]) === undefined){
      // if(!myMap.get(target - arr[i]))   这句不行 因为map里面由 元素0 的情况
      myMap.set(arr[i], i)
    }else {
      return [myMap.get(target - arr[i]), i]
    }
  }
}

let nums = [2, 7, 11, 15],
  target = 9
const result = twoSunNum(nums, target)
console.log(result)
