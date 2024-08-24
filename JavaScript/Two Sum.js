/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result=[];
   for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<=nums.length;j++){
        if(nums[i]+nums[j]===target){
        result.push(i,j)
        return result
    }
    }
   }
  
};
const nums = [2,7,11,15], target = 9
console.log(twoSum(nums,target));
