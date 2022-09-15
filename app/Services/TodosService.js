import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { api } from "./AxiosService.js"





class TodosService {
    async getTodos() {
        const res = await api.get('tyler/todos')
        console.log("get my todo", res.data);
        appState.todos = res.data.map(t => new Todo(t))
        console.log(appState.todos);

    }





}


export const todosService = new TodosService()