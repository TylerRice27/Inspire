import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { saveState } from "../Utils/Store.js"
import { api } from "./AxiosService.js"


class QuotesService {
    async getQuote() {
        const res = await api.get('quotes')
        let quote = new Quote(res.data)
        console.log(quote);
        appState.quote = quote


    }







}

export const quotesService = new QuotesService()