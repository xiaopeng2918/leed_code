function arr(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j + 1] < nums[j]) {
        ;[nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
      }
    }
  }
}

const nums = [1, 2, 5, 3, 9, 6, 4, 8]

arr(nums)
console.log(nums)
