/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let w1=word1.join('');
    let w2=word2.join('');
    return w1===w2
};

const word1 = ["ab", "c"], word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1,word2));
