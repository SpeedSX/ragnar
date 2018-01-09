import { TodoStore } from 'app/store/home/todo-store';

export class Store {
  private _todoStore = new TodoStore();
  
  get todoStore(): TodoStore {
    return this._todoStore;
  }
}
