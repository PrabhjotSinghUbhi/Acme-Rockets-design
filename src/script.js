const initApp = () => {
    const barBtn = document.getElementById('hamburger-button')
    const menu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    }

    barBtn.addEventListener('click', toggleMenu)
    menu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
