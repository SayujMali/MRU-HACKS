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
const displayAdmin = async function(){
const gridEl = document.querySelector("div.grid")
const res = await fetch("http://localhost:9000/hospitalsAndClinics")
const data = await res.json()


    data.forEach((h)=>{
        
        const name = h.name
        const type = h.type
        const location = h.location
        const services = h.services
        const doctorC = h.dcount
        const waittime = h['wt(min)']
        const cellEl = document.createElement("div")
        cellEl.classList.add("cell")
        
        const innerH = `<div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <div class="title">${name}</div>
                                        <div class="title">${type}</div>
                                        <div class="title">${location}</div>
                                        <div class="title">${services}</div>
                                        <div class="title">Doctors Available:${doctorC}</div>
                                        <div class="title">${waittime} min</div>

                                        



                                        <button class="button is-small is-danger has-text-white delete-button" data-id=${h._id}>Delete</button>
                                        <a target="_blank" href="updateHC.html?id=${h._id}" class="button is-small is-info has-text-white edit-button">Edit</a>
                                    </div>
                                </div>`


                                
        cellEl.innerHTML = innerH

        gridEl.append(cellEl)
    })
}
displayAdmin()