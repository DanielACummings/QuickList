import ListController from "./Controllers/ListController.js";

class App {
  constructor() {
    this.listController = new ListController();
  }
}

window["app"] = new App();
