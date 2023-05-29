// Register Section JavaScript

const body_overlay = document.getElementById("body-overlay")
const register_sidebar = document.getElementById("register_sidebar")
const register_btn = document.getElementById("register_btn")
const cross_btn = document.getElementById("cross_btn")

register_btn.addEventListener("click", ()=>{
    body_overlay.classList.toggle("active")
    register_sidebar.classList.toggle("active")
})

cross_btn.addEventListener("click", ()=>{
    body_overlay.classList.remove("active")
    register_sidebar.classList.remove("active")
})

// Login Section JavaScript

const login_sidebar = document.getElementById("login_sidebar")
const login_btn = document.getElementById("login_btn")
const cross_btn2 = document.getElementById("cross_btn2")

login_btn.addEventListener("click", ()=>{
    body_overlay.classList.toggle("active")
    login_sidebar.classList.toggle("active")
})


cross_btn2.addEventListener("click", ()=>{
    body_overlay.classList.remove("active")
    login_sidebar.classList.remove("active")
})


// Language Switcher

const countryDropdown = document.querySelector(".country-dropdown")
const countryList = document.querySelector(".country-list")


countryDropdown.addEventListener("click", () =>{
    countryList.classList.toggle("active")
})


// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100)

})

