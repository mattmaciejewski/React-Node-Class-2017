var words = 'Mirror mirror on the wall. '
console.log( words.repeat(2).trim() )

var veggies = ['asparagus','carrots','corn','daggers','fishing line']

if( veggies.includes('corn') ){
    console.log('isn\'t corn good!')
} else {
    console.log('I do not like corn')
}
console.log('\nBefore:')
veggies.forEach( (theItem)=> {
    console.log(theItem)
})

veggies = veggies.fill('trash',3)

console.log('\nAfter:')
veggies.forEach( (theItem)=> {
    console.log(theItem)
})