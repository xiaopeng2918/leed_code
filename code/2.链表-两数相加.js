class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}
/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let dumMyHead = new ListNode(0)
  let p = l1,
    q = l2,
    curr = dumMyHead
  let carry = 0
  while (p != null || q != null) {
    let x = p != null ? p.val : 0
    let y = q != null ? q.val : 0
    let sum = carry + x + y
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if (p != null) p = p.next
    if (q != null) q = q.next
  }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return dumMyHead.next
}
const l1 = new ListNode(2, new ListNode(4, new ListNode(6)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
console.log(addTwoNumbers(l1, l2))


// 第二遍
function addTwoNumberList (l1, l2){
  let p = l1, q = l2, newListHead = new ListNode(0)
  let curr = newListHead //
  // 进位
  let carr = 0
  while(p != null || q != null){
    let x = (p != null)? p.val:0
    let y = (q != null)? q.val:0
    let sum = x + y + carr
    carr = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if(p != null) p = p.next
    if(q != null) q = q.next
  }
  // 处理最后一位
  if(carr > 0){
    curr.next = new ListNode(1)
  }
  return newListHead.next
}
/**
 * 用到三个指针  一个进位标志
 * 指针p 指向输入链表一
 * 指针q 指向输入链表二
 * 指针curr 指向输出链表
 * 进位标志carr 初始为0，声明在循环外部（由于从最低为开始相加）
 * 
 * 注意事项：
 * 每次得出当前 位 结果后，要把 curr先前移动 处理下一次结果
 * 高位进位 条件判断处理
 */