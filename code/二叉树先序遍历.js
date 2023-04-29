function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function prevTraversal(root) {
  const stack = []
  const result = []
  if (root !== null) {
    stack.push(root)
  }
  while (stack.length > 0) {
    let node = stack.pop()
    result.push(node.val)
    if (node.right !== null) {
      stack.push(node.right)
    }
    if (node.left !== null) {
      stack.push(node.left)
    }
  }
  return result
}
