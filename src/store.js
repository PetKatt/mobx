import { observable } from "mobx";

class Store {
    @observable name = "Piotr"
}

let store = window.store = new Store;

export default store;