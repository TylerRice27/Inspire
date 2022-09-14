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



}