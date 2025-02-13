const resultsNav = document.getElementById('resultsNav')
const favoritesNav = document.getElementById('favoritesNav')
const imagesContainer = document.querySelector('.images-container')
const saveConfirmed = document.querySelector('.save-confirmed')
const loader = document.querySelector('.loader')

const count = 10
const apiKEY = '9xlTbt86YySZN8ivzqyr3jmawCgKa50MbxGzEJ89'
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=${count}`

let resultsArray = []
let favorites = {}

function showContent(page) {
    window.scrollTo({top: 0, behavior: 'instant'})
    if(page === 'results') {
        resultsNav.classList.remove('hidden')
        favoritesNav.classList.add('hidden')
    } else {
        resultsNav.classList.add('hidden')
        favoritesNav.classList.remove('hidden')
    }
    loader.classList.add('hidden')
}

function createDOMNodes(page) {
    const arr = page === 'results' ? resultsArray : Object.values(favorites)
    arr.forEach(result => {
        const card = document.createElement('div')
        card.classList.add('card')
        imagesContainer.appendChild(card)

        const link = document.createElement('a')
        link.href = result.hdurl
        link.title = 'View full image'
        link.target ='_blank'
        card.appendChild(link)

        const image = document.createElement('img')
        image.src = result.url
        image.alt = 'NASA Picture'
        image.loading = 'lazy'
        image.classList.add('card-img-top')
        link.append(image)

        const body = document.createElement('div')
        body.classList.add('card-body')
        card.appendChild(body)

        const title = document.createElement('h5')
        title.classList.add('card-title')
        title.textContent = result.title
        body.appendChild(title)

        const clickable = document.createElement('p')
        clickable.classList.add('clickable')
        if(page === 'results') {
            clickable.textContent = 'Add to Favorites'
            clickable.setAttribute('onclick', `saveFavorite('${result.url}')`) 
        } else {
            clickable.textContent = 'Remove to Favorites'
            clickable.setAttribute('onclick', `removeFavorite('${result.url}')`) 
        }
        body.appendChild(clickable)

        const text = document.createElement('p')
        text.classList.add('card-text')
        text.textContent = result.explanation
        body.appendChild(text)

        const muted = document.createElement('small')
        muted.classList.add('text-nuted')
        body.appendChild(muted)

        const date = document.createElement('strong')
        date.textContent = result.date
        muted.appendChild(date)

        const copyrightResult = result.copyright === undefined ? '' : result.copyright
        const copy = document.createElement('span')
        copy.textContent = ` ${copyrightResult}`
        muted.appendChild(copy)
    })
}

function updateDOM(page) {
    if(localStorage.getItem('nasaFavorites')) {
        favorites = JSON.parse(localStorage.getItem('nasaFavorites'))
    }
    imagesContainer.textContent = ''
    createDOMNodes(page)
    showContent(page)
}

async function getNASAPictures() {
    loader.classList.remove('hidden')
    try {
        const responce = await fetch(apiUrl)
        resultsArray = await responce.json()
        updateDOM('results')
    } catch (error) {
        console.log(error)
    }
}

function saveFavorite(itemURL) {
    resultsArray.forEach(item => {
        if(item.url.includes(itemURL) && !favorites[itemURL]) {
            favorites[itemURL] = item
            saveConfirmed.hidden = false
            setTimeout(() => saveConfirmed.hidden = true, 2000)
            localStorage.setItem('nasaFavorites', JSON.stringify(favorites))
        }
    })
}

function removeFavorite(itemUrl) {
    if(favorites[itemUrl]) {
        delete favorites[itemUrl]
        localStorage.setItem('nasaFavorites', JSON.stringify(favorites))
        updateDOM('favorites')
    }
}

getNASAPictures()


// `
//     <div class="card">
//         <a href="#" title="View Full Image" target="_blank">
//             <img class="card-img-top" src="https://apod.nasa.gov/apod/image/2007/msv1500crop.jpg" alt="NASA Picture">
//         </a>
//         <div class="card-body">
//             <h5 class="card-title">Title pf Image</h5>
//             <p class="clickable">Add to Favorites</p>
//             <p class="card-text">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo reprehenderit quasi fugiat, natus cumque possimus at voluptas adipisci quo, nulla nisi tempora quidem libero neque dolorum alias tenetur non? Id vero praesentium, dolores sed voluptates ipsa beatae libero minima vitae. Magnam esse accusantium delectus quidem fuga veniam inventore quis, harum debitis nihil assumenda omnis voluptas minus, alias corrupti minima? Totam culpa nemo iusto eaque, aut repellat neque quisquam ex doloribus. Libero id ullam repellendus provident quasi cum sed impedit excepturi optio at, facilis, vero explicabo dicta deleniti minima autem obcaecati. Tempora, dignissimos ipsam recusandae modi natus iusto esse soluta?
//             </p>
//             <small class="text-muted">
//                 <strong>12-12-2020</strong>
//                 <span>Copyright info</span>
//             </small>
//         </div>
//     </div> 
// `