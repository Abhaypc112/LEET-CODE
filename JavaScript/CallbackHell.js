function one(callback){
    callback(5)
}
function two(data,callback){
    callback(data+data)
}
function three(data,callback){
    callback(data*data)
}
function four(data,callback){
    callback(data*data)
}

one((data)=>{
    two(data,(data1)=>{
        three(data1,(data2)=>{
            four(data2,(data3)=>{
                console.log(data3);
                
            })
        })
    })
})
  
