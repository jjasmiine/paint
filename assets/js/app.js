//open and close navmenu when clicking on menu

const menu = document.querySelector('.icon-menu')
const navMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', mobileMenu)

function mobileMenu() {
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}


//close navmenu when clicking on navlink


const navLink = document.querySelectorAll('.nav-link')

function menuOut() {
    const header = document.querySelector('.header')
    header.classList.remove('nav-menu')

}

navLink.forEach(l => l.addEventListener('click', menuOut))
