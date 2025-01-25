const password = document.getElementById('password')
const bg = document.getElementById('bg')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blur = 20 - length * 2
    bg.style.filter = `blur(${blur}px)`
})
