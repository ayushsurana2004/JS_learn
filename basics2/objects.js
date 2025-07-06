//Singleton
// Object.create

//object literals

const sym=Symbol("mySym")
const obj={
    name : "Ayush",
    "full name" : "Ayush Surana",
    [sym] : "mySymbol",
    age : 20,
    mail : "as@gmail.com",
    isLoggedIn : true
}

//Accessing objects
console.log(obj.name)
console.log(obj["name"])
//"full name cannot be accessed with . as it's key is in strings"
// other are also strings but not predefined
console.log(obj["full name"])
//console.log(obj.full name) will give error

// console.log(typeof obj.sym)// sym is of type string and not symbol
//To use it as Symbol we need to initialise it as square brackets,it will be seen on printing object 

console.log(typeof obj[sym])

// Object.freeze(obj) // after this no change can be done but it will not show error

console.log(obj)

obj.greeting=function(){
    console.log(`Hello User ${this.name}`);
}

console.log(obj.greeting())
console.log(obj.greeting) // this returns function type as anonymous
