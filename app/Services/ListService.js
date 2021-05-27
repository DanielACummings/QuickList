import List from "../Models/List.js";
import _store from "../store.js"
import Item from "../Models/Item.js"
//Public
class ListService {
	addItem(newItem) {
		let item = new Item(newItem)
		let foundList = _store.State.lists.find(lists => lists.id == item.listId)
		foundList.items.push(item)
		_store.saveState()
	}
	delItem(listId, itemId) {
		let listToRemItemFrom = _store.State.lists.find(list => list.id == listId)
		let itemToRem = listToRemItemFrom.items.findIndex(item => item.id == itemId)
		listToRemItemFrom.items.splice(itemToRem, 1)
		_store.saveState()
	}
	addList(newList) {
		let list = new List(newList)
		_store.State.lists.push(list)
		_store.saveState()
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
