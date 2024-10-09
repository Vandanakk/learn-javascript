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