const name = "jassi"
const age = 26
const city = "SK"

 // console.log ("name" + "age" + "city"); This concat method is old and not to be used
// *****console.log(`Hello my  name is ${name} and my age is ${age} and I live in ${city}`); *** USE THIS CONACT METHOD

const MyGameName = new String('UniverseThors')
//console.log(MyGameName.length);


console.log(MyGameName.toLowerCase());
console.log(MyGameName.charAt(3)); // To check what number is plaved for charactor
console.log(MyGameName.indexOf('s'));  // To check the sequence numner of strick char

console.log(MyGameName.substring(1,4)); // to print specific char only..wont include the last charconst name = "    jassi     "
console.log(MyGameName.substring(3)); // to print the rest of char only..wont include the last char

console.log(MyGameName.slice(1,3)) // to slice the char, wont include the last char

const name2 = "    jassi     "
console.log(name2.trim()) // to trim extra spaces which are not required

const url  = "helloworld.com"
console.log(url.replace('hello', 'travel')) // to replace values which are to be changed


///11 topics done//

