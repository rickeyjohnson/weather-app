import { API_KEY } from './API.js'

let currentWeather

async function getWeatherData(location) {
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=" + API_KEY
    const response = await fetch(url, { mode: 'cors' })
    const weather = await response.json()

    const {address, currentConditions} = weather
    const {conditions, temp} = currentConditions

    
}

getWeatherData("london")