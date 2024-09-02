/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                result.push([nums[i],nums[j]])
            }
        }
    }
    return result.length
};

const nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));
