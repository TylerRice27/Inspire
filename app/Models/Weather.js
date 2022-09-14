export class Weather {

    constructor(data) {
        this.id = data.id
        this.temp = data.main.temp
        this.description = data.weather[0].description
    }




    get Template() {
        return `
         <div class="col-md-12 text-end p-4">
          <div class="glass">

            <h3>${this.temp}</h3>
            <h5>${this.description}</h5>
          

          </div>
        </div>
        `

    }

}