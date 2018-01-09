import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { Store } from 'app/store/store';

@Injectable()
export class AllToggledAction implements IAction {
  constructor(
    private store: Store) {}

  execute() {
    let todo = this.store.todoStore;
    let items = todo.todos$.getValue();
    items.forEach(item => {
      item.done = !item.done;
    });
    todo.allTodos$.next(todo.allTodos$.getValue());
  }
}
