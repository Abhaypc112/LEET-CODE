/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let arr=Math.max(...nums)
    let result=arr;
    for(let i=1;i<k;i++){
        result+=(arr+i)
    }
    return result;

};
const nums = [1,2,3,4,5], k = 3;
console.log(maximizeSum(nums,k));
