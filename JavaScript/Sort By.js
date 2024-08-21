/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>{
        return fn(a) - fn(b)
    })
};

arr = [5, 4, 1, 2, 3], fn = (x) => x;
arr1 = [{"x": 1}, {"x": 0}, {"x": -1}], fn1 = (d) => d.x
arr2 = [[3, 4], [5, 2], [10, 1]], fn2 = (x) => x[1]
console.log(sortBy(arr,fn));
console.log(sortBy(arr1,fn1));
console.log(sortBy(arr2,fn2));


