

export class Todo {



    constructor(data) {

        this.id = data.id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description

    }


    get Template() {
        return /*html*/ `
        <div class="mb-3 form-check">
            <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todosController.editTodo('${this.id}')"  class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">${this.description}</label>
                          <i onclick="app.todosController.deleteTodo('${this.id}')" class="mdi mdi-delete text-danger fs-5"></i>

          </div>



        `
    }


    // get Todos() {
    //     todos = appState.todos
    //     return todos
    // }

}