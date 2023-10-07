const inputForm = document.querySelectorAll('.inputForm')
const inputLabel = document.querySelectorAll('.inputLabel')
const eyeButton = document.querySelector('.eyeButton')
let check = false

inputForm.forEach((form, index) => {
    form.addEventListener('focus', () => {
        inputLabel[index].style.top = '25%'
        inputLabel[index].style.fontSize = '1rem'
    })
    
    form.addEventListener('blur', () => {
        inputLabel[index].style.top = form.value == '' ? '50%' : '25%'
        inputLabel[index].style.fontSize = form.value == '' ? '1.5rem' : '1rem'
    })
})

eyeButton.addEventListener('click', () => {
    eyeButton.innerHTML = check ? 'visibility_off' : 'visibility'
    inputForm[1].type = inputForm[1].type == 'password' ? 'text' : 'password'
    check = !check
})