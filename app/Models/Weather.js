
// function TemperatureConverter() {
//     // valNum = parseFloat(valNum);
//     document.getElementById(this.temp).innerHTML = ((this.temp - 273.15) * 1.8) + 32;
//     return this.temp
// }
export class Weather {

    constructor(data) {
        this.id = data.id
        this.kelvin = data.main.temp
        this.far = data.main.temp - (273.15 * 1.8 + 32) + ' F'
        this.cel = data.main.temp - 273.15 + "C"
        this.name = data.name
        this.description = data.weather[0].description
    }




    get Template() {
        return `
         <div class="col-md-2 m-1 text-center justify-content-end p-4">
          <div class="glass">

            <h3 class="selectable" id="number" onclick="app.weathersController.temperatureConverter()" >${this.kelvin.toFixed()}K</h3>
            <h5>${this.name}</h5>
                        <h6 class="home-p-main" >${this.description}</h6>

          

          </div>
        </div>
        `

    }

    get Far() {
        return this.far
    }


    // get TemperatureConverter() {
    //     // valNum = parseFloat(valNum);
    //     document.getElementById(this.temp).innerHTML = ((this.temp - 273.15) * 1.8) + 32;
    //     return this.temp
    // }

}