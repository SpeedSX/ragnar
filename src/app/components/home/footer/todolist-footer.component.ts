import { Component } from '@angular/core';
import { ClearCompletedClickedAction } from 'app/actions/home/clear-completed-clicked.action';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'todo-list-footer-component',
  templateUrl: 'todolist-footer.component.html'
})
export class TodoListFooterComponent {
  todoCount$: Observable<number>;

  constructor(
    store: Store,
    private clearCompletedClickedAction: ClearCompletedClickedAction
  ) {
    const todoStore = store.todoStore;

    this.todoCount$ = todoStore.allTodos$.map(t => t.length);
  }

  handleClearCompleted() {
    this.clearCompletedClickedAction.execute();
  }
}
