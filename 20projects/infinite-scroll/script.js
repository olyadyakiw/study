const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []
let ready = false
let imagesLoaded = 0
let totalImages = 0

const count = 30
const apiKey = 'YTHWlO0LicAB8ZpEH6XIr8mIlaSfRWYd_cQUAdIYvPE'
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function imageLoaded() {
    imagesLoaded++
    if(imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
    }
}

function setAttr(el, attr) {
    for(const key in attr) {
        el.setAttribute(key, attr[key])
    }
}


const displayPhotos = () => {
    imagesLoaded = 0
    totalImages = photosArray.length
    photosArray.forEach((photo) => {
        // const item = document.createElement('a')
        // setAttr(item, {
        //     href: photo.links.html,
        //     target: '_blank'
        // })

        const img = document.createElement('img')
        setAttr(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        img.addEventListener('load', imageLoaded)

        // item.appendChild(img)
        imageContainer.appendChild(img)
    })
}

const getPhotos = async function(){
    try {
        const responce = await fetch(apiURL)
        photosArray = await responce.json()
        displayPhotos()
    } catch(error) {

    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
        getPhotos()
    }
})

getPhotos()