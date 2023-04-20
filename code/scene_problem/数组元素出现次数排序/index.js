function sortByFrequency(nums) {
  const frequencyMap = new Map()
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  }

  nums.sort((a, b) => {
    const frequencyA = frequencyMap.get(a)
    const frequencyB = frequencyMap.get(b)

    if (frequencyA === frequencyB) {
      return a - b
    }

    return frequencyA - frequencyB
  })
  return nums
}

const arr = [4, 2, 2, 8, 3, 3, 1]
console.log(sortByFrequency(arr)) // 输出: [1, 4, 8, 2, 2, 3, 3]

const arr2 = [1, 2, 3, 5, 7, 2, 2, 4, 5, 4, 1, 1, 2, 3, 0]
console.log(sortByFrequency(arr2))
