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
}

function resetSearch() {
    searchBar.value = ""
    searchBar.textContent = ""
}

searchBtn.addEventListener("click", () => {
    getWeatherData(searchBar.value)

    resetSearch()
})