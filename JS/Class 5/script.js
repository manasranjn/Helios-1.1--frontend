//! Functions
//? Pre-Defined Functions

//? User-Defined Functions
//* Normal Function
// function funcName() {
//     // instructions
// }

function greet() {
    console.log("Hello World!");
}

// greet()

//* Arrow Function
const greetArrow = () => {
    console.log("Hello World!");
}

// greetArrow()

//* Anonymous Function
const greetAnonymous = function () {
    console.log("Hello World!");
}

// greetAnonymous()

//* Callback Function
// ()=>{

// }

// forEach(() => { })

// let arr = [1, 2, 3, 4, 5]

// arr.forEach((element) => {
//     console.log(element);
// })

//* Function without Parameter
function add() {
    return 2 + 3;
}

// console.log(add());
// console.log(add());
// console.log(add());

//* Function with Parameter
function addition(a, b) {
    return a + b;
}

// console.log(addition(2, 3));
// console.log(addition(5, 10));
// console.log(addition(1, 1));
// console.log(addition(1));

//* Function with Default Parameter
function sum(a = 0, b = 0) {
    return a + b;
}

// console.log(sum(10, 20));
// console.log(sum(10));

//! Array methods
//? map() method
let marks = [60, 65, 80, 55, 90, 75, 85, 70, 95, 100];

// const newMarks = marks.map((item, idx) => {
//     console.log(item, idx);
//     return item + 5
// })

// console.log(newMarks);

//? filter() method

// let newMarks = marks.map((mark) => {
//     // return mark >= 70
//     if (mark >= 70) {
//         return mark
//     }
// })
// console.log(newMarks);

let newMarks = marks.filter((mark) => {
    return mark >= 70
})
// console.log(newMarks);

//? reduce() method
let total = marks.reduce((item, sum) => sum += item, 0)
console.log(total);