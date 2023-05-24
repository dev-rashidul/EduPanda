// Language Switcher

const countryDropdown = document.querySelector(".country-dropdown")
const countryList = document.querySelector(".country-list")
const selectedCountry = document.querySelector(".selected")
const img = document.querySelector("img")

countryDropdown.addEventListener("click", () =>{
    countryList.classList.toggle("active")
})
