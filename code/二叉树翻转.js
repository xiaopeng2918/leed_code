function invertTree(root) {
  const stack = []
  if (!root) {
    return null
  }
  stack.push(root)
  while (stack.length > 0) {
    const node = stack.pop()
    const left = node.left
    node.left = node.right
    node.right = left
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  return root
}
