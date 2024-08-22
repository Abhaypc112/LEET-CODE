function Complemet(num){
    let binary=num.toString(2).split('')
   let result= binary.map((value)=>{
        if(value=="1"){
            return "0"
        }else{
            return "1"
        }
    }).join('')
    return parseInt(result,2)
}
console.log(Complemet(5));
