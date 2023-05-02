function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left
  this.right = right
}
// 队列
// function maxDepth(doot) {
//   if (!root) {
//     return 0
//   }
//   let queue = []
//   queue.push([root, 1])
//   let maxDepth
//   while (queue.length > 0) {
//     let [node, level] = queue.shift()
//     if (node.left) {
//       queue.push([node.left, level + 1])
//     }
//     if (node.right) {
//       queue.push([node.right, level + 1])
//     }
//     maxDepth = level
//   }
//   return maxDepth
// }

// 递归
// function maxDepth(root) {
//   if (!root) {
//     return 0
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// }


// 栈实现
function maxDepth(root){
  if(!root){
    return 0
  }
  let stack = []
  let max = 0
  stack.push([root, 1])
  while(stack.length > 0){
    let [node, level] = stack.pop()
    if(!node.left&&!node.right){
      max = Math.max(max, level)
    }
    if(node.right){
      stack.push([node.right, level + 1])
    }
    if(node.left){
      stack.push([node.left, level + 1])
    }
  }
  return max
}