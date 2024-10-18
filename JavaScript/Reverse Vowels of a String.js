// Input: s = "IceCreAm"

// Output: "AceCreIm"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let result = s.split('');
    const vovels="aeiouAEIOU"
    let index=[]
    for(let i=0 ; i<s.length ; i++){
        if(vovels.indexOf(s[i]) !== -1){
            index.push(i)
        }
    }
    for(let j=0; j<index.length; j++){
        result[index[j]] = s[index[index.length-(j+1)]]
    }
    return result.join('')
};
const s = "IceCreAm"
console.log(reverseVowels(s));
