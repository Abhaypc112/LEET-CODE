/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return (haystack.indexOf(needle))
};

const  haystack = "sadbutsad", needle = "sad";
console.log(strStr(haystack,needle))