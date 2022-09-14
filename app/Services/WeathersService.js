import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { api } from "./AxiosService.js"




class WeathersService {
    async getWeather() {
        const res = await api.get('weather')
        console.log("get my weather", res.data)
        let weather = new Weather(res.data)
        // console.log("des", res.data.weather[0].description);
        console.log(weather);
        appState.weather = weather

    }



    async getImage() {
        const res = await api.get('images')
        console.log("get my image", res.data.largeImgUrl)
        appState.image = res.data.largeImgUrl
    }



}

export const weathersService = new WeathersService()