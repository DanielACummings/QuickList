import { generateId } from "../utils.js";
export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name;
  }
  get Template() {
    return /*html*/ `
      <p><button onclick="app.
      listController.delItem('${this.listId}', '${this.id}')"type="delete" class="btn btn-dark btn-sm">  X  </button> ${this.name}</p>`
  }
}