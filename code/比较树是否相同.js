function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function isSameTree(p, q) {
  let stack = []
  stack.push(p)
  stack.push(q)
  while (stack.length > 0) {
    let n1 = stack.pop()
    let n2 = stack.pop()
    if (n1 === null && n2 === null) {
      continue
    } else if (n1 === null || n2 === null) {
      return false
    } else if (n1.val !== n2.val) {
      return false
    } else {
      stack.push(n1.left)
      stack.push(n2.left)
      stack.push(n1.right)
      stack.push(n2.right)
    }
  }
  return true
}

let p = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null))
let q = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null))
isSameTree(p, q)
