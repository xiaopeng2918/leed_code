function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 迭代

// function prevTraversal(root) {
//   const stack = []
//   const result = []
//   if (root !== null) {
//     stack.push(root)
//   }
//   while (stack.length > 0) {
//     let node = stack.pop()
//     result.push(node.val)
//     if (node.right !== null) {
//       stack.push(node.right)
//     }
//     if (node.left !== null) {
//       stack.push(node.left)
//     }
//   }
//   return result
// }

// 递归
// function preorderTraversal(root) {
//   if (!root) {
//     return []
//   }
//   let result = []
//   result.push(root.val)
//   result = result.concat(preorderTraversal(root.left))
//   result = result.concat(preorderTraversal(root.right))
//   return result
// }

// 跌代

function inorderTraversal(root) {
  let stack = []
  let res = []

  if (root) {
    stack.push(root)
  }
  while (stack.length > 0) {
    let node = stack.pop()
    res.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return res
}

