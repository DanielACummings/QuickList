import { generateId } from "../utils.js";
export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name;
    console.log('ItemModel');
  }
  get Template() {
    return /*html*/ `
    <p>${this.name}</p>
    `
  }
}