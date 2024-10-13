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

function one(){
    console.log(this)
}

one()