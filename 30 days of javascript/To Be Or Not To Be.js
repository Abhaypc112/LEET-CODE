/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(val1)=>{
        if(val===val1){
            return true
        }else{
           throw new Error("Not Equal")
        }
    },
    notToBe :(val1)=>{
        if(val!==val1){
            return true
        }else{
            throw new Error("Equal")
        }
    }
    }
};

try{
    console.log(expect(5).toBe(5));// true
}catch(error){
    console.log({error:error.message});
}

try{
    console.log(expect(5).notToBe(5));// throws "Equal"
}catch(error){
    console.log({error:error.message});
    
}

 