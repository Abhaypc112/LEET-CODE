/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0 , product = 1;
    while(n>0){
        const digit = n%10;
        sum+=digit;
        product*=digit;
        n =Math.floor(n/10);
    }
    return product - sum
};