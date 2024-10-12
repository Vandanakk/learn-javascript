//Two scopes - Global scope and local scope
//Outside {} is global scope and inside {} is local scope 

let a = 10       //let and const follow scope
const b = 20  
var c = 30       //var does not follow scope

if(true){
    let a = 44
    const b = 38
    var c = 34
    console.log("Scope a is " + a)
}

console.log(c)
console.log(a);

function one(){
    const username = "Vandana"
    function two(){
        const website = "Netflix"
        console.log(username)
    }
    // console.log(website)             //Can't access website since its in the inner scope.
    two()                            //After one error, remaining part doesn't get executed.
}

one()

if(true){
    const username = "Vandana"
    if(username == "Vandana"){
        const website = "Netflix"
        console.log(username + website)
    }
    // console.log(website)                    //Won't get executed bcz its in inner scope
}
// console.log(username)                      // Won't get executed


function addTwo(num){
    return num+1
}

addTwo(4)

const res = function add(num){
    return num+1
}

res(6)