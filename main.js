// Eventlist

const bodyIndex = document.querySelectorAll('.index')
const planetName = document.querySelector('#name')
const planetLatin = document.querySelector('#latin-name')
const infoPlanet = document.querySelector('#desc')
const circumPlanet = document.querySelector('#circumference')
const tempMax = document.querySelector('#temp-day')
const tempMin = document.querySelector('#temp-night')
const distanceSun = document.querySelector('#distance')
const nameMoons = document.querySelector('#moons')

let bodiesArray
let idPlanet

for (let i = 0; i < bodyIndex.length; i++) {
    bodiesArray = bodyIndex[i];
    bodyIndex[i].addEventListener('click', function () {
        idPlanet = this.id;

        console.log(idPlanet);
        displayPlanets(idPlanet);

    })
}

function displayPlanets() {
        
        planetName.innerHTML = bodiesArray[idPlanet].name;
        planetLatin.innerHTML = bodiesArray[idPlanet].latinName;
        infoPlanet.innerHTML = bodiesArray[idPlanet].desc;
        circumPlanet.innerHTML = bodiesArray[idPlanet].circumference;
        tempMax.innerHTML = bodiesArray[idPlanet].temp.day;
        tempMin.innerHTML = bodiesArray[idPlanet].temp.night;
        distanceSun.innerHTML = bodiesArray[idPlanet].distance;
        nameMoons.innerHTML = bodiesArray[idPlanet].moons;
}
// Function för overlay

function on() {
    document.getElementById("planets_overlay").style.display = "block";
}

function off() {
    document.getElementById("planets_overlay").style.display = "none";
}

// API 


async function getAPIKey() {
    const response = await fetch(`https://fathomless-shelf-54969.herokuapp.com/keys`, {
        method: 'POST'})
        const data = await response.json()
        console.log(data)
        getBodies(data.key)
}

async function getBodies(dataKey) {
    const response = await fetch(`https://fathomless-shelf-54969.herokuapp.com/bodies`, {
        method: 'GET',
        headers: {
            'x-zocom': dataKey
        }
    })
    const bodies = await response.json();
    bodiesArray = bodies.bodies    

    console.log(bodiesArray)
    console.log(bodies)

}

getAPIKey()

