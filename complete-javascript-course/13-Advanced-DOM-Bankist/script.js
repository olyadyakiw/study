'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
const nav = document.querySelector('.nav')

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', e => {
    const s1coords = section1.getBoundingClientRect()
    console.log(s1coords)

    console.log(e.target.getBoundingClientRect())

    console.log('Current scroll (x/y)', window.scrollX, window.scrollY)
    console.log(document.documentElement.clientHeight)
    console.log(document.documentElement.clientWidth)

    // window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset)

    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth',
    })

    section1.scrollIntoView({ behavior: 'smooth' })
})

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault()

//     const id = this.getAttribute('href')
//     console.log(id)
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault()
  if(e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href')
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab')
  if(!clicked) return
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')
  tabsContent.forEach(t => t.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

const handleHover = function(e, opacity) {
  if (e.target.classList.contains('nav__link')) {
      const link = e.target
      const siblings = link.closest('.nav').querySelectorAll('.nav__link')
      const logo = link.closest('.nav').querySelector('img')

      siblings.forEach(el => {
          if (el !== link) el.style.opacity = this
      })
      logo.style.opacity = this
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))


// const initialCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll', e => {
//   console.log(window.scrollY)

//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
//     else nav.classList.remove('sticky')
// })
// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions)
// observer.observe(section1)

const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (entries) {
  const [entry] = entries
  if(!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`
})

headerObserver.observe(header)

const allSections = document.querySelectorAll('.section')

const revealSection = function(entries, observer) {

  entries.forEach(entry => {
    if(!entry.isIntersecting) return
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
  })

}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach(section => {
  sectionObserver.observe(section)
  // section.classList.add('section--hidden')
})

// Lazy loading
const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return
  
    entry.target.src = entry.target.dataset.src
    
    entry.target.addEventListener('load', function() {
      entry.target.classList.remove('lazy-img')
    })
  
    observer.unobserve(entry.target)
  })
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

imgTargets.forEach(img => imgObserver.observe(img))

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')
  
  let curSlide = 0
  const maxSlide = slides.length
  
  const slider = document.querySelector('.slider')
  
  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    })
  }
  
  const activateDot = slide => {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
  
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }
  
  const goToSlide = slide => {
    slides.forEach((s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`))
  }
  
  const nextSlide = () => {
    if (curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }
  
  const prevSlide = () => {
    if(curSlide === 0) {
      curSlide = maxSlide - 1
    } else {
      curSlide--
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }
  
  const init = () => {
    createDots()
    goToSlide(0)
    activateDot(0)
  }
  
  init()
  
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)
  
  document.addEventListener('keydown', e => {
    e.key === 'ArrowLeft' && prevSlide()
    e.key === 'ArrowRight' && nextSlide()
  })
  
  dotContainer.addEventListener('click', e => {
    if(e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide)
      goToSlide(curSlide)
      activateDot(curSlide)
    }
  })
}

slider()

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// const header = document.querySelector('.header')
// const allSections = document.querySelectorAll('.section')
// console.log(allSections)

// document.getElementById('section--1')
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons)

// console.log(document.getElementsByClassName('btn'))

const message = document.createElement('div')
message.classList.add('cookie-message')
message.textContent = 'We use cookies for improved functionality analytics.'
message.innerHTML = 'We use cookied for improved functionality analytics. <button class="btn btn--close-cookie">Got it!</button>'
// header.prepend(message)
// header.append(message)
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)

// document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove())

// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// console.log(getComputedStyle(message).color)

// message.style.height = Number.parseInt(getComputedStyle(message).height) + 40 + 'px'

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className)

// logo.alt = 'Beautiful Logo'

// console.log(logo.getAttribute('designer'))
// logo.setAttribute('company', 'bank')

// console.log(logo.getAttribute('src'))
// console.log(logo.src)

// const link = document.querySelector('.nav__link--btn')
// console.log(link.href)
// console.log(link.getAttribute('href'))

// console.log(logo.dataset.version)

// logo.classList.add()
// logo.classList.remove()
// // logo.classList.toggle()
// // logo.classList.contains()

// logo.className = 'olha'

// const alertH1 = (e) => {
//   alert('add event')
//   // h1.removeEventListener('mouseenter', alertH1)
// }

// const h1 = document.querySelector('h1')
// h1.addEventListener('mouseenter', alertH1)

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// h1.onmouseenter = e => {
//   alert('seocnd')
// }

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) - min)
// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// }

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   e.preventDefault()
//   this.style.backgroundColor = randomColor()
//   console.log(`LINK`, e.target, e.currentTarget)
//   e.stopPropagation()
// })
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   console.log(`LINKS`, e.target, e.currentTarget)
// })
// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   console.log(`NAV`, e.target, e.currentTarget)
// })

// const h1 = document.querySelector('h1')

// console.log(h1.querySelectorAll('.highlight'))

// console.log(h1.childNodes)
// console.log(h1.children)

// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orangered'

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = 'var(--gradient-secondary)'

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(element => {
//   if(element !== h1) element.style.transform = 'scale(0.5)'
// });

document.addEventListener('DOMContentLoaded', e => {
  console.log('HTML built', e)
})

window.addEventListener('load', e => {
  console.log('Page fully loaded', e)
})

// window.addEventListener('beforeunload', e => {
//   e.preventDefault()
//   console.log(e)
//   e.returnValue = ''
// })