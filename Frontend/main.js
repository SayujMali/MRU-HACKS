function navControl(){
const navbar = document.querySelector(".navbar")

// Create the navbar menu
const navMenu = document.createElement("div")
navMenu.classList.add("navbar-menu")
navMenu.id="navbarMenu"
navbar.append(navMenu)
console.log(navbar)

//Divide menu into two parts 
const navStart = document.createElement("div")
navStart.classList.add("navbar-start")
navMenu.append(navStart)

const navEnd = document.createElement("div")
navEnd.classList.add("navbar-end")
navMenu.append(navEnd)

const home = document.createElement("a")
home.classList.add("navbar-item")
home.innerText = "Home"
navStart.append(home)
home.href = "main.html"


const addHosNClinics = document.createElement("a")
addHosNClinics.classList.add("navbar-item")
addHosNClinics.innerText = "Add Hospital & Clinics"
navStart.append(addHosNClinics)
addHosNClinics.href = "addHC.html"

const displayHC = document.createElement("a")
displayHC.classList.add("navbar-item")
displayHC.innerText = "Display Clinics"
navStart.append(displayHC)
displayHC.href = "hosp&clinic.html"
}

navControl()