obj1={1:"a",2:"b"}
obj2={3:"c",4:"d"}

// combining objects
// obj3={obj1,obj2} // this is object consisting of objects

//Combining objects
const obj3=Object.assign({},obj1,obj2) //{} is target and others are source
const obj4={...obj1,...obj2} //spread operator
console.log(obj3,obj4)

console.log(Object.keys(obj3))
const key=Object.keys(obj3)
const objVal=Object.values(obj3)
const keyVal=Object.entries(obj3)
console.log(key)
console.log(objVal)
console.log(keyVal) //array of arrays
console.log(obj3.hasOwnProperty("name"))