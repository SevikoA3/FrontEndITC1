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
        if (form.value.trim() == '') {
            inputLabel[index].style.top = '50%'
            inputLabel[index].style.fontSize = '1.5rem'
            form.value = ''
        }
        else {
            inputLabel[index].style.top = '25%'
            inputLabel[index].style.fontSize = '1rem'
        }
    })
})

eyeButton.addEventListener('click', () => {
    eyeButton.innerHTML = check ? 'visibility_off' : 'visibility'
    inputForm[1].type = inputForm[1].type == 'password' ? 'text' : 'password'
    check = !check
})