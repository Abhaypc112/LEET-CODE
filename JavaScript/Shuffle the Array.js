/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr1=nums.slice(0,n);
    let arr2=nums.slice(n);
    let result=[];
    for(let i=0;i<n;i++){
        result.push(arr1[i],arr2[i]);
    }
    return result;
};
const nums = [2,5,1,3,4,7], n = 3;
const nums1 = [1,2,3,4,4,3,2,1], n1 = 4;
console.log(shuffle(nums,n));
console.log(shuffle(num2,n2));

