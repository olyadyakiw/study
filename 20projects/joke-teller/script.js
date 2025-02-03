const button = document.getElementById('button')
const audioElement = document.getElementById('audio')

// Disable / Enable Button
function toggleButton() {
    button.disabled = !button.disabled
}

// Passing Joke to VoiceRss API
function tellMe(joke) {
    VoiceRSS.speech({
        key: '1af9e8878f934af7ab979825077c64ad',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get jokes from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,racist,sexist,explicit'
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        if(data.setup) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = data.joke
        }
        tellMe(joke)
        toggleButton()
    } catch(error) {
        // Catch errors
        console.log('whoops', error)
    }
}

button.addEventListener('click', getJokes)
audioElement.addEventListener('ended', toggleButton)