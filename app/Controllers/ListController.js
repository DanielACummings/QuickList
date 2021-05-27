import ListService from "../Services/ListService.js";
import _store from "../store.js"

//private
function _drawLists() {
  let template = ''
  let lists = _store.Lists
  lists.forEach(lists => template += lists.template)
  document.querySelector("#lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }
  addList(event) {
    event.preventDefault()
    let formData = event.target
    let newList = {
      name: formData.listName.value,
      items: []
    }
    formData.reset()
    ListService.addList(newList)
    _drawLists()
  }
  delList(id) {
    ListService.delList(id)
    _drawLists()
  }
  addItem(event, listId) {
    event.preventDefault()
    let formData = event.target
    let userEntry = formData.item.value
    formData.reset()
    let newItemList = userEntry.split(',')
    for (let i = 0; i < newItemList.length; i++) {
      let newItem = {
        name: newItemList[i].trim(),
        listId: listId
      }
      ListService.addItem(newItem)
      _drawLists()
    }
  }

  delItem(listId, itemId) {
    ListService.delItem(listId, itemId)
    _drawLists()
  }
}
