function isBalanced(root) {
  if(!root){
    return true
  }
  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left)&&isBalanced(root.right)

  function getHeight(root) {
    if (!root) {
      return 0
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
  }
}
