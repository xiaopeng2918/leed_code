function sortFun(a, b) {
  let aArr = a.split('.').map((item) => {
    parseInt(item, 10)
  })
  let bArr = b.split('.').map((item) => {
    parseInt(item, 10)
  })
  console.log(aArr.length);
  console.log(bArr.length);
  if (aArr.length < bArr.length) {
    return -1
  }
  // if (aArr.length > bArr.length) {  // 为什么这种方法不行
  //   return 1
  // }
  const maxLength = aArr.length > bArr.length ? aArr.length : bArr.length
  for (let i = 0; i < maxLength; i++) {
    let x = aArr[i] ? aArr[i] : 0
    let y = bArr[i] ? bArr[i] : 0
    if (x > y) {
      return 1
    } else if (x < y) {
      return -1
    } else {
      return 0
    }
  }
}
const versionNumbers = ['1.0.0.9', '1.0.1', '1.1.0', '1.1.1', '2.0.0', '2.0.1', '2.1.0', '2.1.1']

versionNumbers.sort(sortFun)
console.log(versionNumbers)
