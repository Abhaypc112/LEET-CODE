/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let result=0;
    for(let x of hours){
        if(x>=target){
            result+=1;
        }
    }
    return result;
};

const hours = [0,1,2,3,4], target = 2;
console.log(numberOfEmployeesWhoMetTarget(hours,target));
