import { generateId } from "../Utils/generateId.js"

export class Quote {

    constructor(data) {
        this.id = data.id || generateId()
        this.content = data.content
        this.author = data.author
    }



    get Template() {
        return `
      <h2>${this.content}</h2>
      <h4 class="quote"> ${this.author}</h4>
`

    }

}