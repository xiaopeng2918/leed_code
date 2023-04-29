// eg:
function romanToInt(s) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  const specialMap = new Map([
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900]
  ])

  let result = 0
  let i = 0
  while (i < s.length) {
    const current = s[i]
    const next = s[i + 1]
    if (next && specialMap.has(current + next)) {
      result += specialMap.get(current + next)
      i += 2
    } else {
      result += romanMap.get(current)
      i++
    }
  }
  return result
}
let s = 'MCMXCIV'
romanToInt(s)
