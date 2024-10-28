/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const numsStr = nums.map(num => num.toString());
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));
    const largestNum = numsStr.join('');
    return largestNum[0] === '0' ? '0' : largestNum;
};
const nums = [3,30,34,5,9];
console.log(largestNumber(nums));
