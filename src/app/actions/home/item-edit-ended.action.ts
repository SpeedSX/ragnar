import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodoItem } from 'app/store/home/todo-item';
import { Store } from 'app/store/store';

@Injectable()
export class ItemEditEndedAction implements IDataAction<TodoItem> {
  constructor(
    private store: Store) {}

  execute(item: TodoItem) {
    if (item.editing) {
      let todo = this.store.todoStore;
      item.editing = false;
      item.text = todo.editItem$.getValue();
      //todo.todos$.next(todo.todos$.getValue());
    }
  }
}
