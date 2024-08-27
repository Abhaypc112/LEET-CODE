/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    console.log(Object.keys(obj).length);
        // if(obj!==null)
    return (Object.keys(obj).length===0 || obj.length===0 && obj==null)
};

const obj = {"x": 5, "y": 42}
const obj1 = {}
const obj2 = [null, false, 0]
const obj3={"length": 0}
console.log(isEmpty(obj));
console.log(isEmpty(obj1));
console.log(isEmpty(obj2));
console.log(isEmpty(obj3));



