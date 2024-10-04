/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[]
    for(let i = 0; i<nums.length ; i++ ){
        let arr1=nums.slice(0,i+1).reduce((total,value)=>total+value)
        arr.push(arr1)
    }
    return arr
};
const nums = [1,2,3,4];
console.log(runningSum(nums));
