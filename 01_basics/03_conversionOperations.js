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

//************************Operations******************************//

let value = 34
let negvalue = -value
console.log(negvalue)

// console.log(2+2) // gives respective outcomes
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%3)

// Concatenation
let str1 = "Vandana"
let str2 = " Kushwaha"
let str3 = str1 + str2 // concatenates 2 strings
console.log(str3) 

console.log("1" + "2") // follow ECMA script guidelines
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(true)
console.log(+true)

// Prefix and postfix increment 

let counter = 100 // read about prefix and postfix increment from js mdn
counter++
console.log(counter)

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/