/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : n * 2 ;
};

console.log(smallestEvenMultiple(6));
console.log(smallestEvenMultiple(6));
