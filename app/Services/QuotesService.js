import { appState } from "../AppState.js"
import { api } from "./AxiosService.js"


class QuotesService {
    async getQuote() {
        const res = await api.get('quotes')
        console.log("get my quote", res.data)
        appState.quote = res.data
    }







}

export const quotesService = new QuotesService()