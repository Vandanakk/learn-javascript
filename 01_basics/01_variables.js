const accountNumber = 4532;
let accountName = "Vandana";
var accountEmail = "vandanakk112@gmail.com";
accountCity = "Delhi";
accountEmail = " fsfre" // var does not follow block scope, is universal. Therefore, not much used.

//accountNumber = 3432; // because accountNumber is const, has a constant value, cannot be changed throughout the code.
accountName = "Kushwaha"; // variable defined using let can be reassigned a new value within same block scope. Outside this block scope, it is not valid.

console.table([accountNumber, accountName, accountEmail, accountCity]);