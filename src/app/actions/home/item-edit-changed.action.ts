import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { Store } from 'app/store/store';

@Injectable()
export class ItemEditChangedAction implements IDataAction<string> {
  constructor(
    private store: Store) {}

  execute(text: string) {
    let todo = this.store.todoStore;
    todo.editItem$.next(text);
  }
}
