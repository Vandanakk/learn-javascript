// console.log(2 > 1) // compares the values and gives boolean value
// console.log(2 < 1)
// console.log(2 == 2)

// we should compare 2 values of same datatype but string and number can also be compared but its not a good practice.

console.log("2" > 1)
console.log(2 < "1")

console.log(null > 0) // While comparing, null is given the value 0 
console.log(null == 0) // Working of comparision operation and equality check operator is different, thus it gives different values//
console.log(null >= 0)

console.log(undefined == 0) // gives false in all cases of undefined
console.log(undefined > 0)
console.log(undefined < 0)

// "==" equality check doesn't take datatype in account
// "===" strict check takes datatype in account

console.log("2" == 2)
console.log("2" === 2) // gives false