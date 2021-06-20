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
  <div class="col-5 col-md-3 p-1 m-1 border rounded">
    <b><p class="text-center">${this.name}</p></b>
    <form onsubmit="app.listController.addItem(event, '${this.id}')">
      <textarea type="text" class="form-control" name="item" id="item" placeholder="Item/items to add" required></textarea>
      <button type="submit" class="btn btn-info btn-sm">Submit</button>
      <button onclick="app.
      listController.delList('${this.id}')" type="delete" class="btn btn-dark btn-sm">Delete List</button>
    </form>
    <br />
    ${this.drawItems()}
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