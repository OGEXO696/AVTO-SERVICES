const navMenu = document.querySelector('.navbar__menu-icon')
const sidebar = document.querySelector('.sidebar')
const sidebarExit = document.querySelector('.sidebar-header__icon')

navMenu.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active')
    } else {
        sidebar.classList.add('active')
    }
})

sidebarExit.addEventListener('click', () => {
    sidebar.classList.remove('active')
})