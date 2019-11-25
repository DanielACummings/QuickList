import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

class Store {
  constructor() {
    this.loadState();
  }
  get State() {
    return _state;
  }

  get Lists() {
    return _state.lists.map(list => new List(list));
  }
  saveState() {
    localStorage.setItem("state", JSON.stringify(_state));
  }
  loadState() {
    let saved = JSON.parse(localStorage.getItem("state"));
    if (saved) {
      _state = saved;
    }
  }
}

const store = new Store();
export default store;
