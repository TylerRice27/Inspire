export class Weather {

    constructor(data) {
        this.id = data.id
        this.temp = data.temp
        this.description = data.weather[0].description
    }

}