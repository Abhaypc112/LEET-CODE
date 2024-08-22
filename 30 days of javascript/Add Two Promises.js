/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let num1= await promise1;
    let num2= await promise2;
    return(num1+num2)
};
promise1 = Promise.resolve(2) 
promise2 = Promise.resolve(5)
addTwoPromises(promise1,promise2).then(console.log)

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4