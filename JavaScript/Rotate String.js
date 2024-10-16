/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let arr=s.split('')
    for(let i = 0; i<s.length;i++){
        if(arr.join('')===goal){
            return true
        }else{
            arr.push(arr[0])
            arr.shift()
        }
    }
    return false
};
const s = "abcde", goal = "cdeab";
console.log(rotateString(s,goal));
