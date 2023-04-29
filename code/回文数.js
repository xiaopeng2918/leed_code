// eg1
function isPalindrome(num){
  let result = num.toString().split('').reverse().join()
  return result == num.toString()
}

// eg2  比eg1 要好
function isPalindrome2(x){
  if(x <0) return false
  let temp = x
  let reverse = 0
  while(temp > 0){
    reverse = reverse * 10 + temp % 10
    temp = Math.floor(temp / 10)
  }
  return x === reverse
}

let x = 121
isPalindrome2(x)