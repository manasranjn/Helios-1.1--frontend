// const box = document.querySelector('.box')

//!Create Element
// const newParagraph = document.createElement('p')
// console.log(newParagraph);
// newParagraph.textContent = 'This is a new Paragraph'
// console.log(newParagraph);

//! Insert element
// box.append(newParagraph)

// box.prepend(newParagraph)

// box.before(newParagraph)

// box.after(newParagraph)

//! Delete element
// const container = document.querySelector('.container')

// container.remove()

//! Event Handling
const button = document.getElementById('btn')
const box = document.querySelector('.box')

// button.onclick = () => {
//     box.style.backgroundColor = 'purple'
// }

// button.onmouseenter = () => {
//     button.style.color = 'red'
// }

function handleClick() {
    box.style.backgroundColor = 'purple'
    button.style.color = 'red'
    button.innerText = 'Button Clicked'
}