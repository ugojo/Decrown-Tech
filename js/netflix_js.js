const navBars = document.querySelectorAll('.nav')
const openNav = document.querySelector('button#open')
const closeNav = document.querySelector('button#close')

openNav.addEventListener('click', () => {
    navBars.forEach(navBar => {navBar.classList.add('visible')
    });
    })

closeNav.addEventListener('click', () => {
    navBars.forEach(navBar => { navBar.classList.remove('visible')
    });
    })
        