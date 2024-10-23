// const d=new Date();
// console.log(d.getDay());

const person={name:"abhay1"}
const person1={name:"abhay",
    fun:function(a,b){
        console.log(this.name,a,b);
        
    }
}


// person1.fun()
const a = person1.fun
a.apply(person,[10,20])

