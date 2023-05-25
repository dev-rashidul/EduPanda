// Language Switcher

const countryDropdown = document.querySelector(".country-dropdown")
const countryList = document.querySelector(".country-list")
const selectedCountry = document.querySelector(".selected")
const img = document.querySelector("img")

countryDropdown.addEventListener("click", () =>{
    countryList.classList.toggle("active")
})


// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100)

})