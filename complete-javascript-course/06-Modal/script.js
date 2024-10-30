'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseBtn = document.querySelector('.close-modal')
const btnsShowModal = document.querySelectorAll('.show-modal')

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btnsShowModal.length; i++) btnsShowModal[i].addEventListener('click', openModal)

btnCloseBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', e => {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) closeModal()
})
