/*
Instructions: 
1. Go through mdn to get an understandig of what is available, no need to re-invent the wheel
2. Use a built in Array method

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
var myFavSoda = 'Dr. Pepper'
var sodas = [myFavSoda, 'Coke', 'Diet Coke', 'Root Beer', 'Sprite']

//returns if variable is an array
console.log('is myFavSoda an array: ' + Array.isArray(myFavSoda)) //false
console.log('is sodas an array: ' + Array.isArray(sodas)) //true

//returns length
console.log(sodas.length) //5
console.log([1,2,3].length)

//removes the last element of the array
var removedSoda = sodas.pop()
console.log('Don\'t really like ' + removedSoda + ' removing it from the refrigerator...')

//adds another element to end of array
sodas.push('Cherry Coke')
console.log(sodas) 

//sort the array
sodas.sort()
console.log(sodas)

//returns inex
console.log(sodas.indexOf(myFavSoda))  //3
console.log(sodas.indexOf('Pepsi')) //-1 as not in array

//loop through the array
sodas.forEach(function(soda, index)
{
    //putting first three soda's in the refrigorator 
    if(index < 3)
    {
        console.log('Putting the ' + soda + ' into the refrigerator.  It\'s best cold')
    }
    else
    {
        console.log('There is no more room in the refrigerator for the ' + soda)
    }
    
})

