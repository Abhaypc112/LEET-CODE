/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let word1 = strs[0];
    for(let i = 1; i<strs.length;i++){
        while(strs[i].indexOf(word1)!==0){
            word1 = word1.substr(0,word1.length-1)
            if(word1 === " ") return 
        }
    }
    return word1
};
const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));
