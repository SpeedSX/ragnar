import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodoItem } from 'app/store/home/todo-item';
//import { Store } from 'app/store/store';

@Injectable()
export class ItemEditCanceledAction implements IDataAction<TodoItem> {
  constructor(
    //private store: Store
  ) {}

  execute(item: TodoItem) {
    //let todo = this.store.todoStore;
    item.editing = false;
    //todo.todos$.next(todo.todos$.getValue());
  }
}
