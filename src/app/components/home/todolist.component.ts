import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllToggledAction } from 'app/actions/home/all-toggled.action';
import { InitAction } from 'app/actions/home/init-action';
import { ItemDestroyClickedAction } from 'app/actions/home/item-destroy-clicked.action';
import { ItemEditCanceledAction } from 'app/actions/home/item-edit-canceled.action';
import { ItemEditChangedAction } from 'app/actions/home/item-edit-changed.action';
import { ItemEditEndedAction } from 'app/actions/home/item-edit-ended.action';
import { ItemEditStartedAction } from 'app/actions/home/item-edit-started.action';
import { ItemToggledAction } from 'app/actions/home/item-toggled.action';
import { TodoItem } from 'app/store/home/todo-item';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'todo-list-component',
  templateUrl: 'todolist.component.html',
  styleUrls: ['todolist.component.scss']
})
export class TodoListComponent {
  activeTodoCount$: Observable<number>;
  todoCount$: Observable<number>;
  todos$: Observable<TodoItem[]>;
  editItem$: Observable<string>;

  constructor(
    store: Store,
    route: ActivatedRoute,
    private itemToggledAction: ItemToggledAction,
    private allToggledAction: AllToggledAction,
    private itemDestroyClickedAction: ItemDestroyClickedAction,
    private itemEditStartedAction: ItemEditStartedAction,
    private itemEditEndedAction: ItemEditEndedAction,
    private itemEditCanceledAction: ItemEditCanceledAction,
    private itemEditChangedAction: ItemEditChangedAction,
    private initAction: InitAction
  ) {
    this.initAction.execute(route.paramMap);
    const todoStore = store.todoStore;

    this.todos$ = todoStore.todos$;
    this.todoCount$ = todoStore.allTodos$.map(t => t.length);
    this.activeTodoCount$ = todoStore.allTodos$.map(t => t.filter(i => !i.done).length);

    this.editItem$ = todoStore.editItem$;
  }

  getClasses(todo: TodoItem) {
    let classes = [];
    if (todo.done) {
      classes.push('completed');
    }
    if (todo.editing) {
      classes.push('editing');
    }
    return classes;
  }

  toggle(todo: TodoItem) {
    this.itemToggledAction.execute(todo);
  }

  toggleAll() {
    this.allToggledAction.execute();
  }

  edit(todo: TodoItem) {
    this.itemEditStartedAction.execute(todo);
  }

  endEdit(todo: TodoItem) {
    this.itemEditEndedAction.execute(todo);
  }

  cancelEdit(todo: TodoItem) {
    this.itemEditCanceledAction.execute(todo);
  }

  editChange(text: string) {
    this.itemEditChangedAction.execute(text);
  }

  handleDestroyClick(todo: TodoItem) {
    this.itemDestroyClickedAction.execute(todo);
  }
}
