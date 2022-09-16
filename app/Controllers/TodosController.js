import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawTodos() {
    let todo = appState.todos
    let template = ''
    let completed = 0
    let uncompleted = 0
    todo.forEach(t => {
        template += t.Template
        if (t.completed) {
            completed++
        }
        setText('completed', completed)

        if (t.id) {
            uncompleted++
        }
        setText('uncompleted', uncompleted)
        setHTML('todos', template)

    })

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


    async createTodo() {

        try {

            window.event.preventDefault()
            const form = window.event.target
            let taskData = getFormData(form)
            form.reset()

            await todosService.createTodo(taskData)

        } catch (error) {
            console.error(error)
        }

    }


    async deleteTodo(id) {
        try {
            if (await Pop.confirm("Do you want to delete a Todo", "Delete Todo", "Yes", "question")) {
                await todosService.deleteTodo(id)

            }
        } catch (error) {
            console.error(error)

        }
    }


    async editTodo(id) {
        try {
            await todosService.editTodo(id)

        } catch (error) {
            console.error(error)

        }
    }



}