class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new ListNode(value)

    if (!this.head) {
      this.head = newNode
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }
}

function reverseLinkList(linkedList) {
  let prev = null
  let current = linkedList.head

  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  linkedList.head = prev
}

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)

reverseLinkList(linkedList)

let current = linkedList.head
while (current) {
  console.log(current.value)
  current = current.next
}
