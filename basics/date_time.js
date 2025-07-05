// Typeof Date is object

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

let myCreatedDate1=new Date(2025,5,31)  // month index starts from 0 and repeats after 11
//and if date is beyond that months date limit date of next month will be displayed

console.log(myCreatedDate1.toDateString())

let myCreatedDate2=new Date("05-07-2025") //mmddyyyy// in this format index starts from 1
console.log(myCreatedDate2.toDateString())

console.log(myCreatedDate1.getTime()) //in miliseconds

let timestamp=Date.now()
console.log(timestamp)

//Customised date
console.log(myDate.toLocaleString('default',{
    weekday:'long',
    month:'2-digit',
    year:'numeric',
    day:'2-digit'
}))