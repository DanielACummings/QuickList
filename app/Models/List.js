import { generateId } from "../utils.js";
import Item from "./Item.js"

export default class List {
  constructor({ id = generateId(), name, items }) {
    this.id = id;
    this.name = name;
    this.items = items.map(i => new Item(i));
  }
  get template() {
    return /*html*/ `
    <div class="col-12 col-md-4">
    <br />
    <b><p>${this.name}</p></b>
    ${this.drawItems()}
    <p>Add Task</p>
    <form onsubmit="app.listController.addItem(event, '${this.id}')">
    <input type="text" class="form-control" name="item" id="item" placeholder="Item name..." required>
    <span id="items"></span>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button onclick="app.
    listController.delList('${this.id}')" type="delete" class="btn btn-danger">Delete</button>
    </form>
  </div>
    `
  }
  drawItems() {
    let template = ''
    this.items.forEach(item => {
      template += item.Template
    })
    return template
  }
}