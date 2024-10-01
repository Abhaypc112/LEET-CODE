/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(' ').filter((value)=>value!=='').length
};

const s = "Hello, my name is John";
console.log(countSegments(s));
