import { TabsComponent } from './../../components/tabs/tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoContainerComponent } from './../../components/todo-container/todo-container.component';
import { TodoFormComponent } from './../../components/todo-form/todo-form.component';
import { TodoItemComponent } from './../../components/todo-item/todo-item.component';
import { TabComponent } from '../../components/tab/tab.component';
import { EmptyHrefDirective } from '../../directives/empty-href.directive';

@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoFormComponent,
    TodoItemComponent,
    TabsComponent,
    TabComponent,
    EmptyHrefDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
