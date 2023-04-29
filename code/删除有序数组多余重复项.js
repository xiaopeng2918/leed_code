function removeDulplication(nums) {
  if (nums.length === 0) {
    return 0, []
  }
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  nums.length = i + 1
  console.log(nums)
  return i + 1
}

const nums = [1, 1, 2]
removeDulplication(nums)
