var ingredientsList = ['pepperoni', 'chicken', 'pineapple', 'anchovies', 'mushrooms', 'onions', 'sausage']
var notNeeded = ['pineapple', 'anchovies', 'mushrooms', 'onions']
var neededIngredients = ['dough', 'tomato sauce', 'cheese']

ingredientsList.filter(function(topping) {
    if(notNeeded.indexOf(topping) == -1) {
        neededIngredients.push(topping)
    }
})
var pizza = "You have the following ingredients needed to make a pizza: " + neededIngredients + "."
console.log(pizza)
if(pizza.endsWith('.')) {
    pizza = pizza.replace('.', '!!!')
}
console.log(pizza)


