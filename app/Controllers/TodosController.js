import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawTodos() {
    let template = ''
    appState.todos.forEach(t => template += t.Template)
    setHTML('todos', template)

}



export class TodosController {

    constructor() {

        appState.on('todos', _drawTodos)
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