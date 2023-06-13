const menu = () => {
    const menu = document.querySelector('menu')
    const body = document.querySelector('body')



    body.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.closest('.menu') || !e.target.classList.contains('active-menu')) {
            menu.classList.toggle('active-menu')
        }
    })

}

export default menu