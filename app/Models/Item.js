import { generateId } from "../utils.js";
export default class Item {
  constructor({ id = generateId(), listId /* =...?*/, name }) {//generateId for listId? Wouldn't that conflict with existing ID of the list this item gets added to?
    this.id = id;
    this.listId = listId; //never gets defined
    this.name = name;
  }
  get Template() { //listID doesn't get defined when template is drawn even tho this.id does
    return /*html*/ `
      <p>${this.name}
      <button onclick="app.
      listController.delItem('${this.listId}', '${this.id}')"type="delete" class="btn btn-danger">Delete</button></p>`
  }
}