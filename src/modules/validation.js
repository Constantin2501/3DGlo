const validation = () => {

    const calcInput = document.querySelectorAll('input.calc-item')
    const formNameOne = document.querySelector('#form1-name')
    const formNameThree = document.querySelector('#form3-name')
    const formNameTwo = document.querySelector('#form2-name')
    const formMess = document.querySelector('#form2-message')
    const emailInput = document.querySelectorAll('input[type=email]')
    const telInput = document.querySelectorAll('input[type=tel]')


    const textValidate = (item) => {

        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, "")
        })
    }

    calcInput.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    });

    emailInput.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*'\d]/, "")
        })
    })

    telInput.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^-()\d]/, "")
        })
    })



    textValidate(formNameOne)
    textValidate(formNameThree)
    textValidate(formNameTwo)
    textValidate(formMess)


}


export default validation