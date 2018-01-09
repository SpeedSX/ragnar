import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TodoListFooterComponent } from './footer/todolist-footer.component';
import { TodoListHeaderComponent } from './header/todolist-header.component';
import { TodoListComponent } from './todolist.component';

@NgModule({
  imports: [SharedModule, FormsModule, RouterModule],
  exports: [TodoListComponent],
  declarations: [TodoListComponent, TodoListFooterComponent, TodoListHeaderComponent]
})
export class TodoListModule {}
