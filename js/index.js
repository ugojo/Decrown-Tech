const openNav = document.querySelector('button#open')
const closeNav = document.querySelector('button#close')
const con  = document.getElementById('container')

openNav.addEventListener('click', () => {
    con.classList.add('showNav')
    })
closeNav.addEventListener('click', () => {
     con.classList.remove('showNav')
    })