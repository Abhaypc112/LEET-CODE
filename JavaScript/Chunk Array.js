/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result=[];
    
    for(let i=0;i<arr.length;i+=size){
        let arr1=arr.slice(i,size+i)
        result.push(arr1)
    }
    return result
};

const arr = [1,2,3,4,5], size = 1;
const arr1 = [1,9,6,3,2], size1 = 3
console.log(arr,size);
console.log(arr1,size1);

