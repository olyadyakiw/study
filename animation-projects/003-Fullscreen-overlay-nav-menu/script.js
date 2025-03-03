let t1 = gsap.timeline({ paused: true })

t1.to('.nav-container', {
    duration: 1,
    left: 0,
    ease: 'expo.inOut',
})

t1.from(
    '.menu > div',
    {
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: 'expo.out',
        stagger: 0.1,
    },
    '-=0.4'
)

t1.from(
    '.socials',
    {
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: 'expo.out',
        stagger: 0.4,
    },
    '-=0.6'
)

t1.reverse()

document.querySelector('.menu-open').addEventListener('click', () => {
    t1.reversed(!t1.reversed())
})

document.querySelector('.menu-close').addEventListener('click', () => {
    t1.reversed(!t1.reversed())
})
