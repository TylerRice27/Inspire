import { generateId } from "../Utils/generateId.js"

export class Quote {

    constructor(data) {
        this.id = data.id || generateId()
        this.content = data.content
        this.author = data.author
    }



    get Template() {
        return /*html*/`

        <div class="row justify-content-center">
                <div class="col-md-6 glass">

        <h2 class="quote">${this.content}</h2>
        <h4 class="on-hover"> ${this.author}</h4>
        </div>

        </div>
`

    }

}