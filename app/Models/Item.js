import { generateId } from "../utils.js";
export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name;
    console.log('ID: ' + this.id);
    console.log('LISTID: ' + listId);
    console.log('NAME: ' + name);
  }
  get Template() {
    return /*html*/ `
      <p>${this.name}
      <button onclick="app.
      listController.delItem('${this.id}')"type="delete" class="btn btn-danger">Delete</button></p>`
  }
}

// this.listId = undefined.
// look at values of html
//why does listId work in one place but not other?  