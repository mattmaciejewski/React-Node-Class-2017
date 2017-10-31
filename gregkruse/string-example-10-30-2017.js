var aString = "abcde";
bString = aString.padEnd(10, "fghijkl");
console.log(bString);
console.log(bString.length);

cString = bString.padStart(13, "123");
console.log(cString);

dString = cString.slice(0,3);
console.log(dString);

eString = bString.toUpperCase();
console.log(eString);