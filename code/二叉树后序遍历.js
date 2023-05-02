// 递归
// function postorderTraversal(root) {
//   if (!root) {
//     return []
//   }
//   let res = []
//   res = res.concat(postorderTraversal(root.left))
//   res = res.concat(postorderTraversal(root.right))
//   res.push(root.val)
//   return res
// }

// 迭代
// function postorderTraversal(root) {
//   let result = []
//   let stack = []
//   currentNode = root
//   prevNode = null
//   while (currentNode !== null || stack.length > 0) {
//     while (currentNode !== null) {
//       stack.push(currentNode)
//       currentNode = currentNode.left
//     }
//     currentNode = stack[stack.length - 1]
//     if (currentNode.right === null || currentNode.right === prevNode) {
//       result.push(stack.pop().val)
//       prevNode = currentNode
//       currentNode = null
//     } else {
//       currentNode = currentNode.right
//     }
//   }
//   return result
// }

// 迭代
function postorderTraversal(root) {
  if (!root) {
    return []
  }
  let stack = []
  let result = []
  let currentNode = root
  let prevNode = null
  stack.push(currentNode)
  while (stack.length > 0) {
    while (currentNode) {
      stack.push(currentNode)
      currentNode = currentNode.left
    }
    currentNode = stack[stack.length - 1]
    if (currentNode.right === null || currentNode.right === prevNode) {
      result.push(stack.pop().val)
      prevNode = currentNode
      currentNode = null
    } else {
      currentNode = currentNode.right
    }
  }
  return result
}
