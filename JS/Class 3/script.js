//! Conditional Statements
//? Simple If Statement
// let a = -10
// if (a > 0) {
//     console.log('Number is positive');
// }

//? If Else Statement
// let a = -10
// if (a > 0) {
//     console.log('Number is positive');
// } else {
//     console.log('Number is negative');
// }

//? Else If Statement
// let n = 0
// if (n > 0) {
//     console.log('Number is positive');
// } else if (n < 0) {
//     console.log('Number is negative');
// } else {
//     console.log('Number is zero');
// }

//? Switch Statement
// let day = 30
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Invalid day');
// break;
// }

let age = 10
// if (age > 0) {
//     if (age < 18) {
//         console.log('You are a minor');
//     }
// } else if (age >= 18) {
//     if (age < 60) {
//         console.log('You are an adult');
//     }
// }

// if (age > 0 && age < 18) {
//     console.log('You are a minor');
// } else if (age >= 18 && age < 60) {
//     console.log('You are an adult');
// }



//! Loops
//? For Loop
// for (initialization; condition; increment / decrement) {
//     // code to be executed
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//? While Loop
// initialization
// while(condition){
//     instruction

//     update
// }

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

//? Do While Loop
// initialization
// do {
//     instruction
//     update
// } while (condition);

// let i = 0
// do {
//     console.log(i);
//     i++
// } while (i > 10)

//? for of Loop
let arr = [1, 20, true, 3, 'Hello', 4]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i of arr) {
//     console.log(i);
// }

// let str = 'Hello World'
// for (let s of str) {
//     console.log(s);
// }

//? for in Loop
let obj = {
    name: 'Smith',
    age: 25,
    address: "NY",
    mobile: 1234567890
}

for (let k in obj) {
    console.log(k)
    console.log(obj[k])
}