// let a = Number(prompt("Enter a number:"));
// let a = String(prompt("Enter a number:"));
// console.log("You entered: " + a);
// console.log("Type of a: " + typeof a);

// alert("Hello, World!");

// console.log(window)
// console.log(document)

//! DOM Selection Methods
//? getElementById()
// const heading = document.getElementById("heading")
// console.log(heading);

//? getElementsByClassName()
// const headings = document.getElementsByClassName("head")
// console.log(headings);

//? getElementsByTagName()
// const elements = document.getElementsByTagName("h1")
// console.log(elements);

//? getElementsByName()
// const emails = document.getElementsByName("email")
// console.log(emails);

//? querySelector()
// const heading1 = document.querySelector(".head")
// console.log(heading1);

//? querySelectorAll()
// const heading2 = document.querySelectorAll(".head")
// console.log(heading2);

//! Attribute manipulation
const image = document.getElementById("image");
const height = image.getAttribute('height')
console.log(height);

console.log(image.src);
console.log(image.alt);
console.log(image.height);
console.log(image.width);

image.setAttribute('src', "https://cdn.pixabay.com/photo/2026/06/26/20/14/betidraws-wolf-10351433_1280.jpg")
image.height = '700'
image.width = '400'

image.setAttribute('class', 'img1 img2 img3')
console.log(image);


//! Text/Content Manipulation
const paragraph = document.querySelector('.para')
paragraph.innerHTML = "Hello, this is updated paragraph"
paragraph.innerText = "Hello, this is also updated paragraph"
paragraph.textContent = "Hello, this is also updated paragraph"

const box = document.querySelector('.box')
// box.innerHTML = "<h3>This is a new Heading</h3>"



box.style.backgroundColor = 'red'
box.style.color = 'white'
box.style.height = '200px'