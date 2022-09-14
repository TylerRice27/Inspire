
import { appState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"
import { setHTML } from "../Utils/Writer.js"

function _draw() {
    let template = appState.quote.Template
    setHTML('quote', template)
}

export class QuotesController {


    constructor() {

        appState.on('quote', _draw)
        this.getQuote()

    }


    async getQuote() {
        try {
            await quotesService.getQuote()

        } catch (error) {
            console.error(error)
        }

    }




}