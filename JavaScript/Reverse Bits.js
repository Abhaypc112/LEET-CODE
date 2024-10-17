/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binaryString = n.toString(2).padStart(32, '0');
    let reversedString = binaryString.split('').reverse().join('');
    return parseInt(reversedString, 2) >>> 0;
};
// const n = 00000010100101000001111010011100;
const n = 11111111111111111111111111111101;
console.log(reverseBits(n));

