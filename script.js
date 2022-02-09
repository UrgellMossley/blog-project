//Dom element declarations

const navbar = document.querySelector(`.navbar-container`)
const imageLink1 = document.querySelector(`.entry-img-1`)
const entry1 = document.querySelector(`.entry-title-1`)

//Functions for the document

//This function will keep the Navbar fixed in place and visible while user scrolls down
//Once user scrolls up again the class will be removed

const stickyNav=()=> scrollY > 0 ? navbar.classList.add("nav-sticky") : navbar.classList.remove("nav-sticky")

//create an event listener for the navbar. On scroll the Navbar will be applied with a new class "sticky"

document.addEventListener(`scroll`, ()=>{
    stickyNav()
})

//create an event listner that opens  new URL in same parent frame #entry_1
imageLink1.addEventListener(`click`, ()=>{
    window.open(`entry_1.html`,`_self`)
})

entry1.addEventListener(`click`, () => {
    window.open(`entry_1.html`, `_self`)
})


