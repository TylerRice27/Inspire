import { api } from "./AxiosService.js"


class QuotesService {
    getQuote() {
        const res = api.get('quotes')
        console.log("get my quote", res.data)
    }







}

export const quotesService = new QuotesService()