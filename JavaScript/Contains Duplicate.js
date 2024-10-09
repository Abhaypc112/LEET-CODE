/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr= new Set(nums)
    return arr.size!== nums.length
};
const  nums = [1,2,3,1]
console.log(containsDuplicate(nums));
