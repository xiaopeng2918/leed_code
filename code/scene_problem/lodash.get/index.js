function _get(obj, path, defaultValue) {
  if (obj === null || typeof obj !== 'object' || obj === undefined) {
    return defaultValue
  }
  const pathArr = Array.isArray(path) ? path : path.split('.')
  let current = obj
  for (let i = 0; i < pathArr.length; i++) {
    if (current[pathArr[i]] === undefined || current[pathArr[i]] === null) {
      return defaultValue
    }
    current = current[pathArr[i]]
  }
  return current
}

let obj = {
  a: {
    b: {
      c: 5
    }
  }
}

console.log(_get(obj, 'a.b.c.d', '哈哈哈'))
