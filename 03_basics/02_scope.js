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
