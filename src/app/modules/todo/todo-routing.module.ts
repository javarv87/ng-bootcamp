import { TodoFormComponent } from './../../components/todo-form/todo-form.component';
import { TodoContainerComponent } from './../../components/todo-container/todo-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodoContainerComponent
  },
  {
    path: 'new-todo',
    component: TodoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
