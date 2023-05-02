function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left
  this.right = right
}
// 使用了两个栈 一个栈用于深度优先遍历 一个用于记录该节点的路径是否符合要求  即还需要多少路径 与该节点的权值是否相等
function hasPathSum(root, targetSum) {
  if (!root) {
    return false
  }
  const stack1 = [root]
  const stack2 = [targetSum]
  while (stack1.length > 0) {
    const node = stack1.pop()
    const currSum = stack2.pop()
    if (!node.left && !node.right && node.val === currSum) {
      return true
    }
    if (node.right) {
      stack1.push(node.right)
      stack2.push(currSum - node.val)
    }
    if (node.left) {
      stack1.push(node.left)
      stack2.push(currSum - node.val)
    }
  }
  return false
}
const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
hasPathSum(root,22)
