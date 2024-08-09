/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let reset1=init
    let value=init
  return {
    increment:()=>{
        return ++value
    },
    decrement:()=>{
        return --value
    },
    reset:()=>{
        value=reset1
        return value
    }
  }  
};
const counter = createCounter(5)

console.log(counter.increment());// 6
console.log( counter.reset());// 5
console.log( counter.decrement());// 4
 