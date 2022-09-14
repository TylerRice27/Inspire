import { appState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"
import { setHTML } from "../Utils/Writer.js"


function _drawWeather() {
    let template = appState.weather.Template
    setHTML('weather', template)
}

export class WeathersController {

    constructor() {
        appState.on('weather', _drawWeather)
        this.getWeather()
        this.getImage()
        // document.body.style.backgroundImage = `url('${appState.image}')`

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