/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num=x.toString().split('').reverse().join('')
    return x==num
    
};
console.log(isPalindrome(121));
