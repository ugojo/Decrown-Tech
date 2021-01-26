const btn = document.querySelector("button#btn")
const nav_act = document.querySelector("nav")
btn.addEventListener("click", () => {
    nav_act.classList.toggle("active")
    })