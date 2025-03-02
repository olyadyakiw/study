// const allContainer = gsap.utils.toArray('.container-item')
// const venueImageWrap = document.querySelector('.container-img-wrap')
// const venueImage = document.querySelector('.container-img')

// function initContainer() {
//     allContainer.forEach(link => {
//         link.addEventListener('mouseenter', venueHover)
//         link.addEventListener('mouseleave', venueHover)
//         link.addEventListener('mousemove', moveVenueImage)
//     })
// }

// function moveVenueImage(e) {
//     let xpos = e.clientX
//     let ypos = e.clientY
//     const tl = gsap.timeline()
//     tl.to(venueImageWrap, {
//         x: xpos,
//         y: ypos,
//     })
// }

// function venueHover(e) {
//     if (e.type === 'mouseenter') {
//         const targetImage = e.target.dataset.img

//         const tl = gsap.timeline()
//         tl.set(venueImage, {
//             backgroundImage: `url(${targetImage})`,
//         }).to(venueImageWrap, {
//             duration: 0.5,
//             autoAlpha: 1,
//         })
//     } else if (e.type === 'mouseleave') {
//         const tl = gsap.timeline()
//         tl.to(venueImageWrap, {
//             duration: 0.5,
//             autoAlpha: 0,
//         })
//     }
// }

// function init() {
//     initContainer()
// }

// window.addEventListener('load', init)

const items = document.querySelectorAll('.container-item')
const imgWrap = document.querySelector('.container-img-wrap')
const img = document.querySelector('.container-img')

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const image = item.dataset.img
        const timeline = gsap.timeline()
        timeline
            .set(imgWrap, {
                backgroundImage: `url(${image})`,
            })
            .to(imgWrap, {
                duration: 0.5,
                autoAlpha: 1,
            })
    })
    item.addEventListener('mousemove', e => {
        let xpos = e.clientX
        let ypos = e.clientY
        const tl = gsap.timeline()
        tl.to(imgWrap, {
            x: xpos,
            y: ypos,
        })
    })
    item.addEventListener('mouseleave', () => {
        const tl = gsap.timeline()
        tl.to(imgWrap, {
            duration: 0.5,
            autoAlpha: 0,
        })
    })
})
