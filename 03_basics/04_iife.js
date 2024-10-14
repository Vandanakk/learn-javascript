//Immediately Invoked Function Expressions(IIFE)//
//Its used because global scope gets poisoned, thus we use IIFE to implement it immediately 

(function one(){
    console.log("DB Connected")
})();

( (name) => {
    console.log(`DB Connected two ${name}`)
})("Vandana");

