import { quotesService } from "../Services/QuotesService.js"



export class QuotesController {


    constructor() {


    }


    async getQuote() {
        try {
            await quotesService.getQuote()

        } catch (error) {
            console.error(error)
        }

    }




}