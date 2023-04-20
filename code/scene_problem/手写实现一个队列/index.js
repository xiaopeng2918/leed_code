class Queue {
  // 构造
  constructor(){
    this.items = []
  }

  //入队
  enqueue(item){
    this.items.push(item)
  }
  // 出队
  dequeue(){
    if(this.items.length === 0){
      throw Error("队列为空")
    }
    return this.items.shift()
  }
  // 判空
  isEmpty(){
    return this.items.length === 0
  }
  // 获取大小
  getSize(){
    return this.items.length
  }
  // 获取头部元素
  getFront(){
    return this.items[0]
  }
  // 清空队列
  clear(){
    this.items = []
  }
}
// 示例用法
const queue = new Queue();
queue.enqueue('Alice');
queue.enqueue('Bob');
queue.enqueue('Carol');

console.log(queue.dequeue()); // 输出：'Alice'
console.log(queue.getFront()) // 输出：'Bob'
console.log(queue.getSize()) // 输出：2
