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
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
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
      name: formData.listName
    }
    formData.reset()
    console.log('additemcontroller')
    ListService.addItem(newItem, listId)
    _drawLists()
  }
  delItem(listId, itemId) {
    console.log('delItemController')
    ListService.delItem(listId, itemId)
    _drawLists()
  }
}
