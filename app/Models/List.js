import { generateId } from "../utils.js";

export default class List {
  constructor({ id = generateId(), name, items }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.name = name;
    this.items = items
    console.log('listmodel');
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
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
      template += /*html*/`
      <p>${item}
      <button onclick="app.
      listController.delItem('${this.id}')"type="delete" class="btn btn-danger">Delete</button></p>`
    })
    return template
  }
}