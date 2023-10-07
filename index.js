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
            let animation = setInterval(frame, 1)
            function frame() {
                if (inputLabel[index].style.top == '50%') {
                    clearInterval(animation)
                }
                else {
                    inputLabel[index].style.top = parseFloat(inputLabel[index].style.top) + 0.5 + '%'
                    inputLabel[index].style.fontSize = parseFloat(inputLabel[index].style.fontSize) + 0.01 + 'rem'
                }
            }
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