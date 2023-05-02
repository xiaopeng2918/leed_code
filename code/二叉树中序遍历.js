function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 迭代

// function inorderTraversal(root) {
//   const stack = []
//   const result = []
//   while ((root && root.val !== undefined) || stack.length > 0) {
//     while (root && root.val !== undefined) {
//       stack.push(root)
//       root = root.left
//     }
//     root = stack.pop()
//     result.push(root.val)
//     root = root.right
//   }
//   return result
// }
// const root = new TreeNode(1, undefined, new TreeNode(undefined, new TreeNode(3, undefined, undefined), undefined))
// inorderTraversal(root)

// 递归
// function inorderTraversal(root) {
//   if (!root) {
//     return []
//   }
//   let result = []
//   result = result.concat(inorderTraversal(root.left))
//   result.push(root.val)
//   result = result.concat(inorderTraversal(root.right))
//   return result
// }

// 迭代

function inorderTraversal(root) {
  let stack = []
  let result = []
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
  return result
}
