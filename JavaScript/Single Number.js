/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result=[];
    let result1=[];
    for(let x of nums){
        if(result.indexOf(x)===-1){
            result.push(x)
        }else{
            result1.push(x)
        }
    }
    console.log(result)
    for(let y of nums){
        if(result1.indexOf(y)===-1){
            return y
        }
    }
};
const nums = [4,1,2,1,2];
console.log(singleNumber(nums))