export class Weather {

    constructor(data) {
        this.id = data.id
        this.temp = data.main.temp
        this.name = data.name
        this.description = data.weather[0].description
    }




    get Template() {
        return `
         <div class="col-md-2 m-1 text-center justify-content-end p-4">
          <div class="glass">

            <h3>${this.temp}</h3>
            <h5>${this.name}</h5>
                        <h6 class="home-p-main" >${this.description}</h6>

          

          </div>
        </div>
        `

    }

}