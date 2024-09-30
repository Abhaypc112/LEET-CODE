/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let even=0;
    let odd=0;
    let binary=n.toString(2);
    console.log(binary)
    for(let i=0 ; i<=binary.length ; i++){
        let index = binary.length - 1 - i;
        if(binary[i]==='1'){
            if(index%2===0){
            even++
        }else{
            odd++
        }
        }
    }
    return [even,odd]
};

const  n = 50;
console.log(evenOddBit(n));
