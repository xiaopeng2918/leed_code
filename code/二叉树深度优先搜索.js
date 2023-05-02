function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left
  this.right = right
}

function dfs() {
  let stack = []
  let result = []
  if (!root) {
    return []
  }
  stack.push(root)

  while (stack.length > 0) {
    let node = stack.pop()
    result.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return result
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, new TreeNode(8), null), new TreeNode(5, null, new TreeNode(9))),
  new TreeNode(
    3,
    new TreeNode(6, new TreeNode(10), new TreeNode(11)),
    new TreeNode(
      7,
      new TreeNode(12),
      new TreeNode(
        13,
        new TreeNode(14, null, new TreeNode(16)),
        new TreeNode(15, new TreeNode(17), new TreeNode(18, new TreeNode(19), new TreeNode(20)))
      )
    )
  )
)

dfs(root)
