import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodoItem } from 'app/store/home/todo-item';
import { Store } from 'app/store/store';

@Injectable()
export class ItemEditStartedAction implements IDataAction<TodoItem> {
  constructor(
    private store: Store) {}

  execute(item: TodoItem) {
    let todo = this.store.todoStore;
    item.editing = true;
    todo.editItem$.next(item.text);
  }
}
