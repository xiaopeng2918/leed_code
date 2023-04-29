// eg1
// function climbStairs(n){
//   if(n === 1){
//     return 1
//   }
//   if(n === 2){
//     return 2
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

// eg2

function climbStairs(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let prev1 = 1
  let prev2 = 2
  let current
  for (i = 3; i <= n; i++) {
    current = prev1 + prev2
    prev1 = prev2
    prev2 = current
  }
  return current
}
/*
先爬 1 级楼梯，然后爬剩余的 n-1 级楼梯；
先爬 2 级楼梯，然后爬剩余的 n-2 级楼梯。
*/
