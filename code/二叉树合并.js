// 合并到root1的思想
function mergeTrees(root1, root2) {
  if (!root1) {
    return root2
  }
  if(!root2){
    return root1
  }
  const stack1 = [root1]
  const stack2 = [root2]
  while (stack1.length > 0 && stack2.length > 0) {
    const node1 = stack1.pop()
    const node2 = stack2.pop()
    node1.val += node2.val
    if (node1.left && node2.left) {
      stack1.push(node1.left)
      stack2.push(node2.left)
    } else if (!node1.left) {
      node1.left = node2.left
    }
    if (node1.right && node2.right) {
      stack1.push(node1.right)
      stack2.push(node2.right)
    } else if (!node1.right) {
      node1.right = node2.right
    }
  }
  return root1
}
