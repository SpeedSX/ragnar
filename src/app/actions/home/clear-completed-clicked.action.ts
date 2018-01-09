import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { Store } from 'app/store/store';

@Injectable()
export class ClearCompletedClickedAction implements IAction {
  constructor(
    private store: Store) {}

  execute() {
    let todo = this.store.todoStore;
    let items = todo.allTodos$.getValue();
    todo.allTodos$.next(items.filter(i => !i.done));
  }
}
