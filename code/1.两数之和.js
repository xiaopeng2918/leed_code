/**
 *
 * @param {arr[]} nums
 * @param {num} target
 * @returns [num1, num2] or void
 */
function towSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map[complement] !== undefined) {
      return [map[complement], i]
    }
    map[nums[i]] = i
  }
}
// easy_test
let nums = [3, 2, 4],
  target = 6
const result = towSum(nums, target)
console.log(result)
