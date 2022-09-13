import { quotesService } from "../Services/QuotesService.js"



export class QuotesController {


    constructor() {

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