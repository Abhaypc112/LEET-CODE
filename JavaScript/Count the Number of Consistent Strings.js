/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    for (let word of words) {
        let isConsistent = true;
        for (let char of word) {
        if (!allowedSet.has(char)) {
            isConsistent = false;
            break;
        }
        }
        if (isConsistent) {
        count++;
        }
  }
  return count;
};
const  allowed = "ab", words = ["ad","bd","aaab","baa","badab"];
console.log(countConsistentStrings(allowed,words));
