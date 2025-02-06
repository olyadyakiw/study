const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const navs = document.querySelectorAll('li')

function navAnimation(start, finish) {
    navs.forEach((nav, index) => {
        nav.classList.remove(`slide-${start}-${index + 1}`)
        nav.classList.add(`slide-${finish}-${index + 1}`)
    })
}

function toggleNav() {
    menuBars.classList.toggle('change')
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        navAnimation('out', 'in')
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        navAnimation('in', 'out')
    }
}

menuBars.addEventListener('click', toggleNav)
navs.forEach(nav => {
    nav.addEventListener('click', toggleNav)
})