import { appState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"




export class WeathersController {

    constructor() {
        this.getWeather()
        this.getImage()
        document.body.style.backgroundImage = `url('${appState.image}')`

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