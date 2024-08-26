
function Integer(x){
    let result=0;
    for(let i=0;i<x;i++){
       if(i*i<=x){
        result=i
       }
    }
    return result
}
console.log(Integer(3));

