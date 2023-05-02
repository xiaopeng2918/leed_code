function findMode(root) {
  let stack = []
  let result = []
  let map = new Map()
  let max = 0
  if (!root) {
    return []
  }
  while (root !== null || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    let node = stack.pop()
    if (map.has(node.val)) {
      map.set(node.val, map.get(node.val) + 1)
    } else {
      map.set(node.val, 1)
    }
    max = Math.max(max, map.get(node.val))
    root = node.right
  }
  for (const [key, value] of map) {
    if (value === max) {
      result.push(key)
    }
  }
  return result
}
