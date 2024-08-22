/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    let result="";
    for(let i=0;i<=s.length-1;i++){
        if(result.indexOf(s[i])==-1){
            result+=s[i]
        }
    }
    return result.length
};

console.log(strangePrinter("aaabbb"));
console.log(strangePrinter("aaaa"));
