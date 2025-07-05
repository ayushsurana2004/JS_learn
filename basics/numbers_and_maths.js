const num=100
console.log(num.toFixed(2))

const num2=456.5655
console.log(num2.toPrecision(5))
console.log(num2.toPrecision(3))
console.log(num2.toPrecision(2))

const num3=754656556
console.log(num3.toLocaleString())
console.log(num3.toLocaleString('en-IN'))
  //comma separated value is printed


  /*******************************************/
  //Maths
  console.log(Math)  // it is an object
  /* Math.
  abs
  round
  ceil
  floor
  min,max
  random : value is between 0 and 1

  To limit random values to min and max
  Math.floor(Math.random()*(max-min+1))+min
  */