var phones = ['Apple','Samsung','HTC','Google','Motorola']
console.log(phones.length)

phones.forEach(function(item,index,array){
    console.log(item,index)
})

var pluslength = phones.push('NEXUS');

console.log(phones)

