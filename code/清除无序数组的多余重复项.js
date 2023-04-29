function removeDulplication(nums) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      nums[i] = null
    } else {
      map.set(nums[i], 1)
    }
  }

  let result = []
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== null) {
      result.push(nums[j])
    }
  }
  return result
}

const nums = [1, 1, 2]
removeDulplication(nums)
console.log(removeDulplication(nums))
