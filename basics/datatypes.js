"use strict";
//alert("hi")  we are using node js not browser so it will throw an error


// primitive :  String,number,undefined,null,boolean, BigInt,Symbol

//typeof(null) is object

const bigNumber=2243422342333431n  //putting n makes it bigInt

console.log(typeof bigNumber)

const id1=Symbol('123')
const id2=Symbol('123')
console.log(id1===id2)   // two symbols having same value is also different.

//Non primitive : Array,objects,functions

//typeof array and objects is objects

const arr=["abc","def",123]
let myObj={
    name:"Ayush",
    branch:"IT"
}

function add1(a,b){
    return a+b;
}
let add2=(a,b)=>{
    return a+b;
}
console.log(add1(2,4))
console.log(add2(2,4))