/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result=[];
    for(let i=0;i<=arr.length-1;i++){
        if(fn(arr[i],i)){
            result.push(arr[i])
        }
    }return result
};
const arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
const arr1 = [0,10,20,30], fn1 = function greaterThan10(n) { return n > 10; }
const arr2 = [-2,-1,0,1,2], fn2 = function plusOne(n) { return n + 1 }
console.log(filter(arr1,fn1));
console.log(filter(arr,fn));
console.log(filter(arr2,fn2));

