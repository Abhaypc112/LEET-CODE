/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result=init;
    for(let i=0;i<nums.length;i++){
        result=fn(result,nums[i])
    }
    return result
};
const nums = [1,2,3,4],fn = function sum(accum, curr) { return accum + curr; },init = 0;
const nums1 = [1,2,3,4],fn1 = function sum(accum, curr) { return accum + curr * curr; },init1 = 100;
const nums2 = [],fn2 = function sum(accum, curr) { return 0; },init2 = 25;
console.log(reduce(nums,fn,init));
console.log(reduce(nums1,fn1,init1));
console.log(reduce(nums2,fn2,init2));


