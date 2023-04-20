class TreeNode {
  constructor(value){
    this.value = value
    this.left = null
    this.right = this.right
  }
}

class BinarySerchTree {
  constructor(){
    this.root = null
  }

  insert(value){
    const newNode = new TreeNode(value)

    if(!this.root){
      this.root = newNode
    }
    let current = this.root
    while(current){
      if(value <= current.value){
        if(!current.left){
          current.left = newNode
          return
        }
        current = current.left
      }else{
        if(!current.right){
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  find(value){
    let current = this.root
    while(current){
      if(current.value === value){
        return current
      }
      current = current.value > value ? current.left : current.right
    }

    return null
  }

  deleteNode(node, value){
    if(!node){
      return null
    }
    if(value < node.value){
      node.left = this.deleteNode(node.left, value)
      return node
    }else if(value > node.value){
      node.right = this.deleteNode(node.right, value)
      return node
    }else{
      if(!node.left&&!node.right){
        return null
      }else if(!node.left){
        return node.right
      }else if(!node.right){
        return node.left
      }else {
        const minValue = finMinValue(node.right)
        node.value = minValue
        node.right = this.deleteNode(node.right, minValue)
        return node
      }
    }
  }

  finMinValue(node){
    while(node&&node.left){
      node = node.left
    }
    return node.value
  }
}