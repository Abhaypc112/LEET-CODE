/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    let arr = s.split(' ');
    for(let x of arr){
        result.push(x.split('').reverse().join(''));
    }
    return result.join(' ');
};
const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
