function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function inorderTraversal(root) {
  const stack = []
  const result = []
  while ((root && root.val !== undefined) || stack.length > 0) {
    while (root && root.val !== undefined) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
  return result
}
const root = new TreeNode(1, undefined, new TreeNode(undefined, new TreeNode(3, undefined, undefined), undefined)) 
inorderTraversal(root)