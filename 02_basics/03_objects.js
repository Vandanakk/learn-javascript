//There are two ways to declare an object:
// {1} Object literals:-

//To add symbol in object use []
const mySym = Symbol("key1")  

const JsUser = {
    name: "Vandana",                        //The keys are taken as string//
    age: 19,
    [mySym]: "mykey1",
    location: "Delhi",
    email: "vandanakk112@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser)
// console.log(JsUser["age"])
// console.log(JsUser.age)
// console.log(JsUser[mySym])

// JsUser.email = "kalpanak" //Change a key value of object
// Object.freeze(JsUser)    // Freeze: you cannot change values anymore
// JsUser.email = "vandanakk112@gmail.com"
// console.log(JsUser)

Greet = function(){
    console.log("Hello")
}
console.log(Greet())

JsUser.greeting = function(){
    console.log(`Hello Js user, ${JsUser.name}`)
}
console.log(JsUser.greeting())

JsUser.anotherGreet = function(){
    console.log(`Hello user whose age is ${this.age}`)
}
console.log(JsUser.anotherGreet())