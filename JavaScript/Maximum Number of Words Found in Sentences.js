/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let sent = 0
    for( let x of sentences){
        let word = x.split(' ')
        if(word.length >= sent){
            sent = word.length
        }
    }
    return sent
};
const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences));
                                             