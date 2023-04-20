class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) return null

  return buildBST(nums, 0, nums.length - 1)
}

function buildBST(nums, left, right) {
  if (left > right) return null
  const mid = Math.floor((left + right) / 2)
  const node = new TreeNode(nums[mid])

  node.left = buildBST(nums, left, mid - 1)
  node.right = buildBST(nums, mid + 1, right)
  return node
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7]
const bst = sortedArrayToBST(sortedArray)
console.log(JSON.stringify(bst, null, 2))