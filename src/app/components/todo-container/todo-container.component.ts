import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef, AfterViewInit, OnChanges } from '@angular/core';

import { Todo } from './../../interfaces/todo';
import { MainService } from './../../services/main-service.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  @ViewChild('allTodos') allTodos: ElementRef;
  todoList: Todo[] = [];
  filterBy = 'All';
  tabs: string[] = ['All', 'Completed', 'Pending'];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoList = this.mainService.getTodos();
  }

  onDeleteTaskById(id: string | number) {
    this.todoList = this.mainService.deleteById(id);
  }

  onUpdateTodo(todoItem: Todo) {
    this.todoList = this.mainService.updateTodo(todoItem);
  }

  onChangeTab(currentTab) {
    this.filterBy = currentTab.title;
  }
}
