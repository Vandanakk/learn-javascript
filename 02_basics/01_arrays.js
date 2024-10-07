//Arrays in javascript are resizable and can contain elements of different datatypes.

const myArr = [1, 2, 3, 4, 5]
console.log(myArr)

const anotherArr = new Array(2, 4, 6, 8)
console.log(anotherArr)

const myHeroes = ["Batman", "Spiderman", "Wonderwoman"]
console.log(myHeroes[2])

//Array methods

myArr.push(6)      //Adds elements to the end of the array
myArr.push(7)
console.log(myArr)

myArr.pop()         //Removes elements from the end of the array.    
console.log(myArr)

myArr.unshift(9)     //Adds element at the start of the array.
myArr.unshift(10)    //Bad method since all other elements needs to pushed back, takes time
console.log(myArr)

myArr.shift()        //Removes element from the start of the array.
console.log(myArr)

console.log(myArr.includes(7))  //Gives boolean value based onn existence in the array or not.
console.log(myArr.includes(1))

const newArr = myArr.join()     //The join function converts the array to string.
console.log(newArr)

//Slice gives part of the array (0, 1, 2 for {0,3}) without affecting the original array.
//Splice gives part of the array(0, 1, 2, 3 for {0, 3}) and removes the given part from the original array.

const myn1 = myArr.slice(1, 3)
console.log(`The sliced part is [${myn1}] and the original array is [${myArr}]`)

const myn2 = myArr.splice(1, 3)
console.log(`The spliced part is [${myn2}] and the original array is [${myArr}]`)