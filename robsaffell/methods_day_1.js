var grumpyCat = "Marco meets Polo to discuss trains.";
var sourcey;

sourcey = grumpyCat.match(/[A,R,T]/gi);

sourcey = sourcey.filter(letter => letter == 't');

console.log(sourcey);