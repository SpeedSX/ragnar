import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router/src/shared';
import { IDataAction } from 'app/actions/i-data-action';
import { TodoItem } from 'app/store/home/todo-item';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InitAction implements IDataAction<Observable<ParamMap>> {
  constructor(
    private store: Store
  ) {}

  execute(params: Observable<ParamMap>) {
    let todo = this.store.todoStore;
    todo.allTodos$.combineLatest(params, 
      (items: TodoItem[], p: ParamMap) => {
        let status = p.get('status');
        let newTodos = items.filter(i => status === 'completed' ? i.done : (status === 'active' ? !i.done : true));
        return newTodos;
      }).subscribe(items => {
        todo.todos$.next(items);
      });
  }
}
