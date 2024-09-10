import { API_KEY } from './API.js'

async function getWeather(location) {
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?key=" + API_KEY
    const response = await fetch(url, { mode: 'cors' })
    const weatherData = await response.json()

    return {
        location: location,
        currentTemp: weatherData.currentConditions.temp,
        conditions: weatherData.currentConditions.conditions,
        icon: weatherData.currentConditions.icon
    }

}