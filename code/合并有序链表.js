function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function mergeTwoList(list1, list2) {
  const newList = new ListNode(null)
  let tail = newList
  let p = list1,
    q = list2
  while (p && q) {
    if (p.val <= q.val) {
      tail.next = p
      p = p.next
    } else {
      tail.next = q
      q = q.next
    }
    tail = tail.next
  }
  tail.next = p ? p : q
  return newList.next
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

mergeTwoList(list1, list2)
