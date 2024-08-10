/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result=[];
    for(let i=0;i<arr.length;i++){
       result.push(fn(arr[i],i))
    }return result
};
const arr = [1,2,3], fn = function plusone(n) { return n + 1; }
const arr1 = [1,2,3], fn1 = function plusI(n, i) { return n + i; }
const arr2 = [10,20,30], fn2 = function constant() { return 42; }
console.log(map(arr,fn));
console.log(map(arr1,fn1));
console.log(arr2,fn2);


