function removeDuplications(nums) {
  const numMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i]) !== false) {
      numMap.set(nums[i], numMap.get(nums[i]) + 1)
    } else {
      numMap.set(nums[i], 1)
    }
  }
  for (const [key, value] of numMap) {
    if (value < 2) {
      numMap.delete(key)
    }
  }
  for(let i = 0; i < nums.length; i++){
    if(numMap.has(nums[i])){
      nums[i] = null
    }
  }
  let result = []
  for(let i = 0; i < nums.length;i++){
    if(nums[i] !== null){
      result.push(nums[i])
    }
  }
  return result
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
removeDuplications(nums)
