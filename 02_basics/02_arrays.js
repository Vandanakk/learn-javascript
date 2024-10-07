const num1 = [1, 2, 3, 4]
const num2 = [22, 44, 56]

const newnum = num1.concat(num2)
console.log(newnum)

const students = ["van", "Kush", "Singh"]
const teacher = ["KP", "Gayatri", "Kalps"]

// students.push(teacher)         // Push function pushes the whole array as a single unit
// console.log(students)

const both = students.concat(teacher)   // Concat concatenates both the arrays together
console.log(both)

const another_method = [...students, ...teacher] //Another method to concatenate
console.log(another_method)

const numbers = [1, 2, 3, [4, 5, 92], 34, [33, 13, 67, [21, 3, 8]], 24]
console.log(numbers)
console.log(numbers.flat(Infinity))  //Removes all the internal arrays and gives a single array

console.log(Array.isArray("Hitesh")) //Checks if the array contains the given name or not
console.log(Array.from("Hitesh"))    //Creates an array from the name given

let score1 = 100
let score2 = 399
let score3 = 299

console.log(Array.of(score1, score2, score3))
