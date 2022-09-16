import { appState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"
import { setHTML } from "../Utils/Writer.js"


function _drawWeather() {
    let template = appState.weather.Template
    setHTML('weather', template)
}

function _drawImage() {
    document.body.style.backgroundImage = `url('${appState.image}')`

}



export class WeathersController {

    constructor() {
        appState.on('weather', _drawWeather)
        appState.on('image', _drawImage)
        this.getWeather()
        this.getImage()

    }



    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    async getImage() {

        try {
            await weathersService.getImage()

        } catch (error) {
            console.error(error)
        }
    }

    // temperatureConverter(valNum) {
    //     valNum = parseFloat(valNum);
    //     document.getElementById(`${this.temp}`).innerHTML = ((valNum - 273.15) * 1.8) + 32;
    // }

    temperatureConverter() {
        // valNum = parseFloat(valNum);
        // let kel = appState.weather.kelvin
        // let far = appState.weather.far
        // let cel = appState.weather.cel


        if (appState.weather.kelvin = appState.weather.far) {
            document.getElementById('number').innerHTML = appState.weather.far

        }
        if (appState.weather.far = appState.weather.cel) {

            document.getElementById('number').innerHTML = appState.weather.cel

        }

        if (appState.weather.cel = appState.weather.kelvin) {

            document.getElementById('number').innerHTML = appState.weather.kelvin
        }



    }

    // get Temp() {
    //     let temp = appState.weather.temp
    //     return temp
    // }



}