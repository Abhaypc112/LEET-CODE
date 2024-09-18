/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j]===target){
                return[ i+1,j+1]
            }
        }
    } 
};

const numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers,target));
