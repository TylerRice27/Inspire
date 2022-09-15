import { api } from "./AxiosService.js"





class TodosService {
    async getTodos() {
        const res = await api.get('tyler/todos')
        console.log("get my todo", res.data);

    }





}


export const todosService = new TodosService()