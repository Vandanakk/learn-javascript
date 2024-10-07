//Object constructor or Singleton

// const tinderUser = new Object()  //Creates an object which is empty
// console.log(tinderUser)

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {             //Object inside object
    email: "some@gamil.com",
    fullName: {
        userfullname:{
            firstname: "Vandana",
            lastname: "Kushwaha"
        }
    }
}
//console.log(regularUser.fullName.userfullname.firstname)

//Add two arrays
const obj1 = {
    1: "a", 
    2: "b",
}
const obj2 = {
    3: "a", 
    4: "b"
}

const obj3 = Object.assign({}, obj1, obj2)  
console.log(obj3)

//Spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    }
]

console.log(users[0].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))