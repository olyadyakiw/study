'use strict'

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20
let highScore = 0

const scoreText = document.querySelector('.score')
const number = document.querySelector('.number')

const displayMessage = message => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        displayMessage('No number!')
    } else if (guess === secretNumber) {
        displayMessage('Correct number!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        number.style.width = '30rem'
        number.textContent = secretNumber

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    } else if (guess !== secretNumber) {
        score--
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
    }

    if (score > 0) {
        scoreText.textContent = score
    } else {
        displayMessage('You lost the game')
        score = 0
    }
})

// Reset game
document.querySelector('.again').addEventListener('click', () => {
    score = 20

    displayMessage('Start guessing...')

    scoreText.textContent = score
    secretNumber = Math.trunc(Math.random() * 20) + 1

    document.querySelector('body').style.backgroundColor = '#222'
    number.style.width = '15rem'
    number.textContent = '?'
    document.querySelector('.guess').value = ''
})
