const isLoggedIn = true;
if(isLoggedIn){
    console.log(`You have logged in.`)
}

if(2 == "2"){
    console.log(`You have both equal values.`)
}

const temp = 43;
if(temp<50){
    console.log(`Temperature is less than 50.`)
}
else{
    console.log(`Temperature is more than 50`)
}
console.log(`Executed`)

const score = 300;
if(score>100){
    let power = 200;
    console.log(`User power: ${power}`)
}
console.log(`Score is: ${score}`)

const balance = 3000
if(balance>500) console.log("tested")                   //Implicit scope


const userLoggedInGoogle = true;
const userLoggedInEmail = true;
if(userLoggedInEmail && userLoggedInGoogle && 2==2){
    console.log(`Allowed to buy course`)
}

if(userLoggedInEmail || userLoggedInGoogle){
    console.log("user logged in")
}

//Switch operator
const month = 3;
switch(month){
    case 1:
        console.log("January")
        break;
    case 2: 
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    default:
        console.log("Default response")
        break;        
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;              //Takes the first value
// val1 = null ?? 10;             //Takes the value other than null
//  val1 = undefined ?? 5           //Takes the value other than undefined
val1 = null ?? 5 ?? 10;             //Takes the value that comes first other than null
console.log(val1)

const userEmail = [];
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}

//Falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Truthy values => "0", 'false, " ", [], {}, function(){}

if(userEmail.length == 0){
    console.log("The array is empty")
}

const anObject = {};

if(Object.keys(anObject).length == 0){
    console.log("The object is empty")
}

//Terniary Operator
// condition ? true : false

const icePrice = 100;
icePrice <= 200 ? console.log(`less than 100`) : console.log(`more than 200`) 