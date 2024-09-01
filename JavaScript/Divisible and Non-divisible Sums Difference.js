/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let nondiv = 0;
    let div=0;
    for(let i=1;i<=n;i++){
        if(i%m!==0){
            nondiv+=i
        }else{
            div+=i
        }
    }
    return nondiv-div
};
const n = 10, m = 3;
console.log(differenceOfSums(n,m));
