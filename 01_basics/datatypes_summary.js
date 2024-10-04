// On the basis of how variables are stored in memory and how they are accessed

// Primitive => Number, BigInt, String, Boolean, Null, Undefined, Symbol

let password = Symbol("1234")
let anotherPassword = Symbol("1234")
console.log(password === anotherPassword) // because symbol creates unique values.

const BigNum = 2437263971862n

// Reference (Non-primitive) => Arrays, Objects, Functions

//Arrays
const friends = ["Aryan", "Aashi", "Suhani"]
console.log(friends)

//Objects
let myObj = {                   // Objects are in the form of key and value and can consist of variables of different datatypes.
    name : "Vandana",
    age : 19
}

//Function
const sayHi = function(){
    console.log("Hello World");
}

console.log(typeof sayHi)

// Javascript is dynamically typed language => you don't have to predfine variable datatype