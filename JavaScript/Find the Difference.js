/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of t) {
        if (!charCount[char] || charCount[char] === 0) {
            return char; 
        } else {
            charCount[char]--;
        }
    }
}
const s = "abcd", t = "abcde";
console.log(findTheDifference(s,t))