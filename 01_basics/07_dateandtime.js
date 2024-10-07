let mydate = new Date();
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate) //Date is an object//

let myCreatedDate = new Date(2024, 23, 03, 23, 45, 11)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let anotherDate = new Date("10-03-2024")
console.log(anotherDate.toDateString())

//Timestamp in date//
let myTimeStamp = Date.now();
console.log(myTimeStamp)              //This time is given in milliseconds
console.log(myCreatedDate.getTime())

// To convert it into seconds, divide by 1000
console.log(Date.now()/1000) //This gives the time in decimals but in seconds

// To get integer value of the time in seconds:-
console.log(Math.floor(Date.now()/1000))

