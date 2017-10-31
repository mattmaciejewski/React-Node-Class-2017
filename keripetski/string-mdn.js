/*
Instructions: 
1. Go through mdn to get an understandig of what is available, no need to re-invent the wheel
2. Use a built in String method

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/


var firstName = 'Keri'
var lastName = 'Petski'

//Properties
console.log('\n----- PROPERTIES -----\n')
//length
console.log('length: ' + firstName + ': ' + firstName.length) //will return 4

//Methods
console.log('\n----- METHODS -----\n')
//returns char at an index
console.log('charAt(0): ' + firstName.charAt(0)) //expect 'K'

//Returns character from unicode value of char
console.log('fromCharCode(): ' + String.fromCharCode(64)) // code for '@'

//combines two strings into a new string
console.log('concat(): ' + firstName.concat(lastName)) //KeriPetski

//determines if one string is found within another
console.log('contains: ' + lastName.includes('pet')) //false - case sensitives
console.log('toLowerCase(): ' + lastName.toLowerCase().includes('pet')) //will return true

//returs the index of
console.log('index: ' + lastName.indexOf('ski')) //will return 3 bc 'ski' is the 4th character

//Other Notes
console.log('\n----- other notes -----\n')
//Way of breaking up long string into multiple lines
//make sure there are no spaces or anything after '\'
var longString = 'dolor sit amet, consectetuer adipiscing elit. Aenean \
commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus \
et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, \
ultricies nec, pellentesque eu, pretium quis, sem.'
console.log('longString: ' + longString)


