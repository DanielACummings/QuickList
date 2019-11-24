import List from "../Models/List.js";
import _store from "../store.js"
import store from "../store.js";
import Item from "../Models/Item.js"
//Public
class ListService {
  addItem(newItem, listId) {
    let item = new Item(newItem)
    let foundList = _store.State.lists.find(lists => lists.id == listId)
    foundList.items.push(newItem)
    _store.saveState()
    console.log('additemservice');
  }
  delItem(listId, itemId) {
    let close = confirm("Are you sure you\nwant to delete this?")
    if (close == true) {
      let listToRemItemFrom = _store.State.lists.findIndex(list => list.id == listId)
      let itemIndex = listToRemItemFrom.items.findIndex(item => items.id == itemId)
      listToRemItemFrom.items.splice(itemIndex, 1)
      _store.saveState()
    }
  }
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(newList) {
    let list = new List(newList)
    _store.State.lists.push(list)
    _store.saveState()
    console.log('listservice')
  }
  delList(id) {
    let close = confirm("Are you sure you\nwant to delete this?")
    if (close == true) {
      let listToDel = _store.State.lists.findIndex(list => list.id == id)
      _store.State.lists.splice(listToDel, 1)
      _store.saveState()
    }
  }
}

const SERVICE = new ListService();
export default SERVICE;
