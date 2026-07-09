//! Event Object
// const box = document.getElementById('box')
// box.onmouseenter = (e) => {
//     box.style.backgroundColor = "green"
//     box.style.height = "300px"
//     box.style.width = "300px"

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);

// }

// const input = document.getElementById('input')
// const button = document.getElementById('btn')

// input.onchange = (e) => {
//     console.log(e.target.value);
// }


// const container = document.querySelector('.container')
// container.style.backgroundColor = 'black'

// const button = document.getElementById('button')
// button.onclick = () => {
//     if (container.style.backgroundColor === 'black') {
//         container.style.backgroundColor = 'white'
//     } else {
//         container.style.backgroundColor = 'black'
//     }
// }

//! Event Listner

const container = document.querySelector('.container')

function clickButton() {

    console.log("Clicked");
}

container.addEventListener('click', clickButton)

setTimeout(() => {
    container.removeEventListener('click', clickButton)
    console.log("Event removed");
}, 4000)