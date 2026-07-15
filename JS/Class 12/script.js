const menuBtn = document.querySelector('.fa-bars')
const menu = document.querySelector('.navMenu')
const close = document.querySelector('.fa-xmark')

menuBtn.onclick = () => {
    menu.style.transform = 'translateX(0%)'
}

function closeMenu() {
    menu.style.transform = 'translateX(-100%)'
}