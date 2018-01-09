import { Component } from '@angular/core';
import { ItemAddedAction } from 'app/actions/home/item-added.action';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'todo-list-header-component',
  templateUrl: 'todolist-header.component.html'
})
export class TodoListHeaderComponent {
  newItem$: Observable<string | null>;
  newItem: string | null;

  constructor(
    store: Store,
    private itemAddedAction: ItemAddedAction,
  ) {
    const todoStore = store.todoStore;

    this.newItem$ = todoStore.newItem$;
    this.newItem$.subscribe(x => {
      this.newItem = x;
    });
  }

  add() {
    if (this.newItem) {
      this.itemAddedAction.execute(this.newItem);
    } 
  }
}
