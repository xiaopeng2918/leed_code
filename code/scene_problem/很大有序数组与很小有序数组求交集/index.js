function findInterSectionFromTowArr(bigArr, smallArr) {
  const interSection = []
  let i = 0
  let j = 0
  while (i < bigArr.length && j < smallArr.length) {
    if (bigArr[i] < smallArr[j]) {
      i++
    } else if (bigArr[i] > smallArr[j]) {
      j++
    } else {
      interSection.push(bigArr[i])
      i++
      j++
    }
  }
  return interSection
}
// 示例用法
const bigArray = [1, 2,3, 4, 6, 7, 9, 11, 14, 15, 20, 22];
const smallArray = [2, 4, 9, 14, 15, 20, 21];

console.log(findInterSectionFromTowArr(bigArray, smallArray)) // [ 2, 4, 9, 14, 15, 20 ]