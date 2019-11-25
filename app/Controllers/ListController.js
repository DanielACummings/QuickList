import ListService from "../Services/ListService.js";
import _store from "../store.js"


//TODO Don't forget to render to the screen after every data change.

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
    console.log('listcontroller');
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
    let newItem = {
      name: formData.item.value,
      listId: listId
    }
    formData.reset()
    console.log('additemcontroller')
    ListService.addItem(newItem)
    _drawLists()
  }
  delItem(listId, itemId) {//listId undefined. Why?
    console.log('delItemController')
    ListService.delItem(listId, itemId)
    _drawLists()
  }
}
