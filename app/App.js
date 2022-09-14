import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";


function _drawClock() {
  var clock = new Date("2012-01-18T16:03");

  // might need a .slice here
  console.log((clock.getMinutes() < 10 ? '0' : '') + clock.getMinutes());
}

class App {
  // valuesController = new ValuesController();

  todosController = new TodosController()
  quotesController = new QuotesController()
  weathersController = new WeathersController()




}

window["app"] = new App();
