/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((total,value)=>{
            return value(total)
        },x)
    }
};

const fn = compose([x => x + 1, x => x * x,x =>2 * x])
const fn1 =compose([x => 10 * x, x => 10 * x, x => 10 * x])
console.log(fn(4));
console.log(fn1(1));


/**
 * fn(4) // 9
 */