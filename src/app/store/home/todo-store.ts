import { TodoItem } from 'app/store/home/todo-item';
import { BehaviorSubject } from 'rxjs';
 
export class TodoStore {
  private _newItem$ = new BehaviorSubject<string | null>(null);
  get newItem$() {
    return this._newItem$;
  } 

  private _editItem$ = new BehaviorSubject<string>('');
  get editItem$() {
    return this._editItem$;
  } 

  private _allTodos$ = new BehaviorSubject<TodoItem[]>([]);
  get allTodos$() {
    return this._allTodos$;
  }

  private _todos$ = new BehaviorSubject<TodoItem[]>([]);
  get todos$() {
    return this._todos$;
  }
}
