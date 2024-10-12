// console.log("V")
// console.log("a")
// console.log("n")
// console.log("d")
// console.log("a")
// console.log("n")
// console.log("a")

//Call it 5 times
function saymyName(){
    console.log("V")
    console.log("a")
    console.log("n")
    console.log("d")
    console.log("a")
    console.log("n")
    console.log("a")
}

// saymyName();


console.log(saymyName());

function addtwoNums(num1, num2){
    console.log("Vandana")
    return(num1 + num2);
}

// console.log(addtwoNums(2, 4))
// console.log(addtwoNums());

let ans = addtwoNums(4, 8)
console.log(ans)

function mult(num1, num2 ){
    console.log(num1*num2)
}

mult(2, 9) 

function sayHello(username){
    console.log( `Hello ${username}`);
}

(sayHello("Vandana"))

function isLoggedIn(username){
    if(username == undefined){
        console.log("Please enter a username")
    }
    else{
        console.log(`${username}, you are logged in`)
    }
}

isLoggedIn()


//Taking multiple attributes
function addCartPrice(...num1){
    return num1
}

console.log(addCartPrice(200, 300 , 400, 500))

function addPrice(num1, num2, ...num3){          //num1 = 1 and num2 = 2
    return num3;
}

console.log(addPrice(1, 2, 4, 5, 7, 7, 8, 90))

//Passing an object as attribute in a function
function handleObject(anyObject){
    console.log(`Username is ${anyObject.usernames} and the price is ${anyObject.price}`)
}

let userInfo = {
    username :"Vandana",
    price : 199
}

handleObject(userInfo)

//Will return undefined if can't find the object key or value.

function getIn(anyObject){
    if(!anyObject.username){
        console.log("Please enter a usename")
        return
    }
    return `${anyObject.username} just logged in`
}

console.log(getIn(userInfo))

const myArray = [1, 3, 5, 6 , 7]
function getValueArray(getArray){
    return getArray[2]
}

console.log(getValueArray(myArray))