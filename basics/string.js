const name="Ayush"
const age =20
console.log(`My name is ${name} and I am ${age} years old.`)  //string interpolation

const myName=new String("Ayush")  // this allows several functions
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.charAt(3))
/*
More functions of strings:
indexOf('a')
substring(start,end) //end is not included,if negative start is given it will start from 0

slice(start,end) //if start is negative it starts from last

trim()  //removes empty spaces at start and end
trimStart()
trimEnd()
replace('from','to')

split(" ") // it will split string with respect to spaces and store it in an array
*/