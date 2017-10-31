var animalArray = ["fish", "cow", "chicken"];
var foodArray = ["pizza", "taco", "hamburger"];

var combinedArray = animalArray.concat(foodArray);
console.log(combinedArray);

animalArray.push("pig");
console.log(animalArray);

foodArray.unshift("bacon", "chips");
console.log(foodArray);