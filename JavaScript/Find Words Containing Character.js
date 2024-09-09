/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result=[];
    for(let i=0;i<words.length;i++){
        if(words[i].indexOf(x)!==-1){
            result.push(i)
        }
    }
    return result;
};
const words = ["abc","bcd","aaaa","cbc"], x = "a";
console.log(findWordsContaining(words,x));
