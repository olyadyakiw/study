const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const decrease = document.querySelector('#decrease')
const increase = document.querySelector('#increase')
const colorInput = document.querySelector('#color')
const clear = document.querySelector('#clear')

let size = document.querySelector('.size').textContent
console.log(size)
let isPressed = false
let color = colorInput.value
console.log(color)
let x, y

decrease.addEventListener('click', () => {
    size >= 0 ? size-- : size = 0
    document.querySelector('.size').innerHTML = size
})
increase.addEventListener('click', () => {
    size <= 30 ? size++ : size = 30
    document.querySelector('.size').innerHTML = size
})

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))


colorInput.addEventListener('change', () => color = colorInput.value)



canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined

})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }

})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

