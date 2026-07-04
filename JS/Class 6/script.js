// function showDetails(name, age, job) {
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("Job: " + job);
// }

// const Details = (name, age, job) => {
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("Job: " + job);
// };

//! String and it's inbuilt methods
let name = "John Doe";
let age = 30;
let job = "Software Engineer";

console.log("Hi, my name is " + name + ". I am " + age + " years old and I work as a " + job + ".");
// console.log("Hi, my name is name I am  age  ears old and I work as a  job ");
// ${ varibale }

// console.log(`Hi, my name is ${name}. I am ${age} years old and I work as a ${job}.`)

//* Inbuilt methods
let str = "Lorem ipsum dolor ipsum sit amet consectetur adipisicing ipsum elit. Asperiores, ullam ad id veritatis inventore nesciunt sapiente incidunt eligendi nobis in cumque quod iure soluta esse, laboriosam accusamus nisi quos ab!"

//? toUpperCase()
// console.log(str.toUpperCase());

//? toLowerCase()
// console.log(str.toLowerCase());

//? indexOf()
// console.log(str.indexOf('sit'));

//? lastIndexOf()
// console.log(str.lastIndexOf('ipsum'));

//? charAt()
// console.log(str.charAt(6));

//? slice()
let str2 = str.slice(0, 20);
// console.log(str2);

//? length
// console.log(str.length);

//? replace()
let str3 = str.replace('ipsum', 'Hello');
// console.log(str3);

//? replaceAll()
let str4 = str.replaceAll('ipsum', 'Hello');
// console.log(str4);

//? split()
let arr = str.split('a')
console.log(arr);
