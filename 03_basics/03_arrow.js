//This is used to refer to current context, can access all variables within the current context//
//Area within {} is current context//

const user = {
    username: "Vandana",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)
        console.log(this)                                     //Gives values of all variables of the current context
    }
}

// user.welcomeMessage()
// user.username = "Kalpana"
// user.welcomeMessage()

// console.log(this)                       //The global context is empty

//Do not use this in function//
function one(){
    username = "Vandana"
    console.log(this.username)
}

one()

//*******************Arrow function*******************//
const two = () => {
    username = "Vandana"
    console.log(username)
}
two()

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(1, 3))

//Implicit return//
const add = (num1, num2) => (num1+num2)
console.log(add(3, 5))

//Return an object//
const returnObject = () => ({username: "Vandana"})
console.log(returnObject())