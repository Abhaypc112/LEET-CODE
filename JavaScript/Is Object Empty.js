/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return (Object.values(obj).length===0 || obj.length===0)
};

const obj = {"x": 5, "y": 42}
const obj1 = {}
const obj2 = [null, false, 0]
console.log(isEmpty(obj));
console.log(isEmpty(obj1));
console.log(isEmpty(obj2));


