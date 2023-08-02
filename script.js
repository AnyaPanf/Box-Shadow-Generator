let vert = document.querySelector('.vert')
let color = document.querySelector('#color')
let box = document.querySelector('.box')
let hor = document.querySelector('#horizontal')
let blur = document.querySelector('#blur')
let spread = document.querySelector('#spread')
let inp = Array.from(document.querySelectorAll('input'))
let text = document.createElement('p')
box.appendChild(text)
text.className = 'text'

inp.forEach((el) => {
    el.addEventListener('input', () => {
        box.style.boxShadow = `${horizontal.value}px ${vert.value}px ${blur.value}px ${spread.value}px ${color.value}`
        text.innerText = `box-shadow: ${horizontal.value}px ${vert.value}px ${blur.value}px ${spread.value}px ${color.value}`
    })
})
console.dir(box);
