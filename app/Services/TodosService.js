import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { saveState } from "../Utils/Store.js";
import { api } from "./AxiosService.js"





class TodosService {
    async getTodos() {
        const res = await api.get('tyler/todos')
        console.log("get my todo", res.data);
        appState.todos = res.data.map(t => new Todo(t))
        console.log(appState.todos);

    }


    async createTodo(taskData) {
        const res = await api.post('tyler/todos', taskData)
        console.log("created tod", res.data);
        let todo = new Todo(res.data)
        appState.todos = [...appState.todos, todo]

    }


    async deleteTodo(id) {
        const res = await api.delete(`tyler/todos/${id}`)
        appState.todos = appState.todos.filter(t => t.id != id)
    }

    async editTodo(id) {
        let todo = appState.todos.find(t => t.id == id)
        todo.completed = !todo.completed
        const res = await api.put(`tyler/todos/${todo.id}`, todo)
        console.log("edit from serve", res.data);
        saveState('todos', appState.todos)
    }
}


export const todosService = new TodosService()