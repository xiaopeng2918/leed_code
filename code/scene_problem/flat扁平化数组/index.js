function flatCustom(arr){
  const result = []

  for(const item of arr){
    if(Array.isArray(item)){
      result.push(...flatCustom(item))
    }else{
      result.push(item)
    }
  }
  return result
}

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flatCustom(nestedArray)
console.log(flattenedArray); // 输出: [1, 2, 3, 4, 5, 6, 7, 8]