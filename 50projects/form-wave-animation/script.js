const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
                    .map((letter, index) => `<span style="transition-delay: ${50 * (index + 1)}ms">${letter}</span>`)
                    .join('')

})