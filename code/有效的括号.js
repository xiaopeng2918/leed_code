function isValid(s) {
  const stack = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (map.has(char)) {
      stack.push(char)
    } else {
      if (map.get(stack.pop()) !== char) {
        return false
      }
    }
  }
  return stack.length === 0
}

const s = '()'
isValid(s)
