import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodoItem } from 'app/store/home/todo-item';
import { Store } from 'app/store/store';

@Injectable()
export class ItemAddedAction implements IDataAction<string> {
  constructor(
    private store: Store) {}

  execute(itemText: string) {
    let todo = this.store.todoStore;
    let newItem = <TodoItem>{
      done: false,
      text: itemText
    };
    todo.allTodos$.next([...todo.allTodos$.getValue(), newItem]);
    todo.newItem$.next(null);
  }
}
