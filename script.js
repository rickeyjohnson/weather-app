import { API_KEY } from './API.js'

const searchBar = document.querySelector("#searchbar")
const searchBtn = document.querySelector("#searchbtn")

async function getWeatherData(location) {
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=" + API_KEY
    const response = await fetch(url, { mode: 'cors' })
    const weather = await response.json()

    const {address, currentConditions} = weather
    const {conditions, temp} = currentConditions
    const currentWeather = { address, conditions, temp}

    console.log(currentWeather)
    clearWeather()
    displayWeather(currentWeather)
}

function resetSearch() {
    searchBar.value = ""
    searchBar.textContent = ""
}

function displayWeather(weather) {
    const content = document.querySelector("#content")

    const addressDiv = document.createElement("div")
    addressDiv.textContent = weather.address
    addressDiv.setAttribute("class", "title")
    content.appendChild(addressDiv)

    const conditionsDiv = document.createElement("div")
    conditionsDiv.textContent = weather.conditions
    content.appendChild(conditionsDiv)

    const tempDiv = document.createElement("div")
    tempDiv.textContent = weather.temp + " F"
    content.appendChild(tempDiv)
}

function clearWeather() {
    let e = document.querySelector("#content");

    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

searchBtn.addEventListener("click", () => {
    getWeatherData(searchBar.value.toLowerCase())

    resetSearch()
})