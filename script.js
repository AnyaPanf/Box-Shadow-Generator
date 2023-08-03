let vert = document.querySelector('.vert')
let color = document.querySelector('#color')
let box = document.querySelector('.box')
let hor = document.querySelector('#horizontal')
let blur = document.querySelector('#blur')
let spread = document.querySelector('#spread')
let inp = Array.from(document.querySelectorAll('input'))
let bcg__color = document.querySelector('#bcg__color')
let box__color = document.querySelector('#box__color')
let generator = document.querySelector('.generator')
let code = document.querySelector('.generator__code')
let radius = document.querySelector('#radius')

inp.forEach((el) => {
    el.addEventListener('input', () => {
        box.style.boxShadow = `${horizontal.value}px ${vert.value}px ${blur.value}px ${spread.value}px ${color.value}`
        generator.style.backgroundColor = `${bcg__color.value}`
        box.style.backgroundColor = `${box__color.value}`
        code.innerText = `box-shadow: ${horizontal.value}px ${vert.value}px ${blur.value}px ${spread.value}px ${color.value}`
        box.style.borderBottomLeftRadius = `${radius.value}px`
        box.style.borderBottomRightRadius = `${radius.value}px`
        box.style.borderTopLeftRadius = `${radius.value}px`
        box.style.borderTopRightRadius = `${radius.value}px`

    })
})
console.dir(box);
