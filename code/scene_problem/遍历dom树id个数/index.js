// 递归
function countId(element){
  let count = 0;
  if(element.id){
    count++
  }
  for(const child of element.children){
    count +=countId(child)
  }
  return count
}