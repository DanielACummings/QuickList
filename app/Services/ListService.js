import List from "../Models/List.js";
import _store from "../store.js"
import Item from "../Models/Item.js"
//Public
class ListService {
  addItem(newItem) { //why is listId never called? It's used below
    let item = new Item(newItem)
    let foundList = _store.State.lists.find(lists => lists.id == item.listId)
    debugger
    foundList.items.push(item) //push(item.newItem) ?
    _store.saveState()
    console.log('additemservice');
  }
  delItem(listId, itemId) { //listID never gets defined in item model constructor
    let close = confirm("Are you sure you\nwant to delete this?")
    if (close == true) {
      //listToRemItemsFrom is undefined according to debugger in Chrome
      let listToRemItemFrom = _store.State.lists.find(list => list.id == listId) //use find() or findIndex()? After switching to find(), listToRemItemFrom is no longer 'number' type--that got rid of an intellisense error.
      // use []?
      let itemToRem = listToRemItemFrom.items.findIndex(item => item.id == itemId)
      listToRemItemFrom.items.splice(itemToRem, 1)
      _store.saveState()
    }
  }
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
