// taking elements from the dom
const navBar = document.querySelector(".nav-bar")
const menuBtn = document.querySelector(".menu-btn")
const footer = document.querySelector(".year")


// menuBtn click event listener
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("show")
  menuBtn.classList.toggle("fa-times")
})
// scroll remove menu 
window.addEventListener("scroll", () => {
  navBar.classList.remove("show")
  menuBtn.classList.remove("fa-times")
}) 
// adding deynamic year to the footer 
const year = new Date().getFullYear()
footer.textContent+=" "+year
