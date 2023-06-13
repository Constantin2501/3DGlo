const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

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

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })

}

export default modal