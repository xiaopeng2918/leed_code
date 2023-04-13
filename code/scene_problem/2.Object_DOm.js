// 给一棵虚拟 DOM 树和一个节点的 name, 求从树根遍历到该节点的完整路径

const domObj = {
  name: 'div',
  children: [
    {
      name: 'p',
      children: [
        {
          name: 'span',
          children: []
        }
      ]
    },
    {
      name: 'ul',
      children: [
        {
          name: 'li',
          children: []
        }
      ]
    }
  ]
}
// 实例代码
function findNodePath(root, nodeName) {
  // 定义一个用于保存路径的数组
  let path = []

  // 定义DFS函数，用于在树中搜索目标节点
  function dfs(node, target) {
    // 如果当前节点的名称与目标节点的名称相同，则将其名称添加到路径中并返回true
    if (node.name === target) {
      path.push(node.name)
      return true
    }

    // 否则，遍历当前节点的所有子节点
    for (let i = 0; i < node.children.length; i++) {
      // 对于每个子节点，递归调用dfs函数进行搜索
      if (dfs(node.children[i], target)) {
        // 如果搜索成功，则将当前节点名称添加到路径中并返回true
        path.push(node.name)
        return true
      }
    }

    // 如果所有子节点都被搜索过并且没有找到目标节点，则返回false
    return false
  }

  // 调用DFS函数搜索目标节点，并返回路径
  dfs(root, nodeName)
  return path.reverse()
}
let path = findNodePath(domObj, 'span')
// console.log(path) // [ 'div', 'p', 'span' ]

// 递归

function findNodePath2(domObj, target) {
  let path = []
  function dfs(node, target) {
    if (node.name === target) {
      path.push(node.name)
      return true
    }

    for (let i = 0; i < node.children.length; i++) {
      if (dfs(node.children[i], target)) {
        path.push(node.name)
        return true
      }
    }
    return false
  }
  dfs(domObj, target)
  return path.reverse()
}

// console.log(findNodePath2(domObj, 'li'))

// again
function findNodePath3(domObj, target) {
  let path = []
  function dfs(node, target) {
    if (node.name === target) {
      path.push(node.name)
      return true
    }

    for (let i = 0; i < node.children.length; i++) {
      if (dfs(node.children[i], target)) {
        path.push(node.name)
        return true
      }
    }
    return false
  }
  dfs(domObj, target)
  return path.reverse()
}

console.log(findNodePath3(domObj, 'li'))