import { quotesService } from "../Services/QuotesService.js"

function _draw() {

}

export class QuotesController {


    constructor() {

        this.getQuote()
        _draw()
    }


    async getQuote() {
        try {
            await quotesService.getQuote()

        } catch (error) {
            console.error(error)
        }

    }




}