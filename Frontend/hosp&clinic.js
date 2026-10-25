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

async function getData(){
    const res = await fetch("http://localhost:9000/hospitalsAndClinics")
    const data = await res.json();
    console.log(data)
    const hTable = document.querySelector(".listCapture")
    const tbod = document.createElement("tbody")
    hTable.append(tbod)
    data.forEach((hospital) => {
        const tableRow = document.createElement('tr')
        tbod.append(tableRow)
        
        const name = document.createElement('td')
        name.innerText = hospital.name
        tableRow.append(name)
        
        const type = document.createElement('td')
        type.innerText = hospital.type
        tableRow.append(type)
        
        const location = document.createElement('td')
        location.innerText = hospital.location
        tableRow.append(location)

        const service = document.createElement('td')
        service.innerText = hospital.services
        tableRow.append(service)

        const dcount = document.createElement('td')
        dcount.innerText = hospital.dcount
        tableRow.append(dcount)
        
        const wt = document.createElement('td')
        wt.innerText = hospital['wt(min)']
        tableRow.append(wt)

    });
}

navControl()
getData()