function SingleOne(arr){
    let result=[];
    let notsingle=[];
    let result1=[];
    for(let x of arr){
        if(result.indexOf(x)===-1){
            result.push(x)
        }else{
            notsingle.push(x)
        }
    }
    for(let y of arr){
        if(notsingle.indexOf(y)===-1){
            result1.push(y)
        }
    }
    if(result1.length==0){
        return null
    }else{
        return Math.max(...result1)
    }
   
    
}
console.log(SingleOne([1,2,3,2,3,4,5,6,6,7,8]));
console.log(SingleOne([1,1,2,2]));
