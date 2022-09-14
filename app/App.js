import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";



class App {
  // valuesController = new ValuesController();

  todosController = new TodosController()
  quotesController = new QuotesController()
  weathersController = new WeathersController()




}

window["app"] = new App();
