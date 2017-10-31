var a = 'a'
var b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

var s_primative = 'Walt'
var s_object = new String(s_primative);

console.log(typeof s_primative)
console.log(typeof s_object)

var sum1 = '53 * 42'
var sum2 = new String(sum1)  //string object
console.log(eval(sum1))      //eval a primative will result in a numeric value
console.log(eval(sum2))
console.log(eval(sum2.valueOf()))
