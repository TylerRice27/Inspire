import { generateId } from "../Utils/generateId.js"

export class Quote {

    constructor(data) {
        this.id = data.id || generateId()
        this.content = data.content
        this.author = data.author
    }



    get Template() {
        return /*html*/`

        <div class="row glass">
        <h2 class="quote">${this.content}</h2>
        <h4 class="author"> ${this.author}</h4>
            
        </div>
`

    }

}