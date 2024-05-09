import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

const getWeather = (capital,apiKey) => {
    return axios.get(`${baseUrl}${capital}&appid=${apiKey}`)
}


export default { getWeather };