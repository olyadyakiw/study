const imgs = document.querySelectorAll('.content')
const buttons = document.querySelectorAll('nav li')

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
        imgs.forEach(img => img.classList.remove('show'))
        imgs[index].classList.add('show')
    })
})