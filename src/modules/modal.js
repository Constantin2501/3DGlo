const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    buttons.forEach(btn => {
       btn.addEventListener('click', () => {
        modal.style.display = 'block'
        if (screen.width > 768) {
            modal.animate([
                {opacity: 0},
                {opacity: 1},
            ], 1000)
        }
        
       })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })



}

export default modal