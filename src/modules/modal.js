import { animate } from "./helper"

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    buttons.forEach(btn => {
       btn.addEventListener('click', () => {
        modal.style.display = 'block'
        if (screen.width > 768) {
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress * 1
                }
              });
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