import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"





export class TodosController {

    constructor() {

        // appState.on('todos'_draw)
        this.getTodos()
    }


    async getTodos() {
        try {
            await todosService.getTodos()

        } catch (error) {
            console.error(error)
        }

    }



}