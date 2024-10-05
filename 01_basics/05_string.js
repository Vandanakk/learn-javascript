const name = "Vandana"
const repoCount = 34

console.log("My name is " + name + " and my repcount is " + repoCount);
console.log(`My name is ${name} and my repo count is ${repoCount}.`) // better way to write string and variables together

//There is another way to write a string in the form of an object//

const gameName = new String("Vandana-K") // Here, gameName is an object
console.log(gameName[0]) // Gives the character at index 0

//Length of a string(counts the spaces)
console.log(gameName.length)
console.log(gameName.toUpperCase()) //The original string is not changed//
console.log(gameName.charAt(3))
console.log(gameName.indexOf('d'))

//Only difference between slicing and substring is that substring cannot take negative values//

const newString = gameName.substring(0, 4) //ignores the negative values//
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

//Trim removes the empty spaces from starting and ending but not from between the string//
const trimString = "   Kushwaha   "
console.log(trimString.trim())

//Replace characters in a string//
console.log(name.replace('V', 'K'))

//Check if it includes a substring//
console.log(name.includes('dna'))

//Convert a string to an array//
const arrayString = gameName.split('-')
console.log(arrayString)