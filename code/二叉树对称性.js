function isSymmetric(root){
  if(!root){
    return true
  }
  let queue = []
  queue.push(root.left, root.right)
  while(queue.length > 0){
    const left = queue.shift()
    const right = queue.shift()
    if(!left&&!right){
      continue
    }
    if(!left || !right){
      return false
    }
    if(left.val !== right.val){
      return false
    }
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true
}