let score = "34"
console.log(typeof(score))

let scoreInNumber = Number(score) // we can change the datatype of variables
console.log(typeof scoreInNumber)

let age = "23abc"
let ageInNumber = Number(age)
console.log(typeof ageInNumber)
console.log(ageInNumber) // the string age is not just a number so when we convert it to number, it's not entirely a number and thus gives NaN(Not a Number)

// "33" => 33
// null => 0
//undefined => NaN
// "33abc" => NaN
// true => 1 and false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true and 0 => false