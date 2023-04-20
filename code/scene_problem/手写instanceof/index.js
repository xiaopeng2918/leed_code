function customInstanceOf(obj, cons){
  if(obj === null || obj === undefined){
    return false
  }
  const protoType = Object.getPrototypeOf(obj)
  if(cons.prototype === protoType){
    return true
  }
  return customInstanceOf(protoType, cons)
}

class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(customInstanceOf(dog, Dog)); // 输出：true
console.log(customInstanceOf(dog, Animal)); // 输出：true
console.log(customInstanceOf(dog, Object)); // 输出：true
console.log(customInstanceOf(dog, Array)); // 输出：false