import List from "../Models/List.js";
import _store from "../store.js"
import store from "../store.js";
//Public
class ListService {
  addItem(newItem, listId) {
    let foundList = _store.State.lists.find(lists => lists.id == listId)
    foundList.items.push(newItem)
    _store.saveState()
    console.log('additemservice');
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(newList) {
    let list = new List(newList)
    _store.State.lists.push(list)
    _store.saveState()
    console.log('listservice')
  }
  delList(id) {
    let listToDel = _store.State.lists.findIndex(list => list.id == id)
    _store.State.lists.splice(listToDel, 1)
    _store.saveState()
  }
}

const SERVICE = new ListService();
export default SERVICE;
