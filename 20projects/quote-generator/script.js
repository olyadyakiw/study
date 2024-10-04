const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let quote

function loading() {
    quoteContainer.classList.add('none')
    loader.classList.remove('none')
}

function complete() {
    loader.classList.add('none')
    quoteContainer.classList.remove('none')
}

// New quote
function newQuote() {
    loading()
    quoteText.textContent = quote.quote 

    if(!quote.author) {
        quoteAuthor.textContent = 'Unknown'
    } else {
        quoteAuthor.textContent = quote.author
    }

    if(quote.quote.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    complete()
}

// Get quotes from api
async function getQuotes() {
    const apiUrl = "https://quotes-api-self.vercel.app/quote"
    try {
        const responce = await fetch(apiUrl)
        quote = await responce.json()
        newQuote()
    } catch (err) {
        // Catch error
        console.log(err)
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${ quoteText.textContent } - ${ quoteAuthor.textContent }`
    window.open(twitterUrl, '_blank')
}

// Event listeners
newQuoteBtn.addEventListener('click', () => location.reload())
twitterBtn.addEventListener('click', tweetQuote)

// On load
getQuotes()