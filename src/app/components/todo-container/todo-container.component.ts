import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';

import { Todo } from './../../interfaces/todo';
import { MainService } from './../../services/main-service.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  @ViewChild('allTodos') allTodos: ElementRef;
  todoList: Todo[] = [];
  // Usando async pipe
  todoListAsync: Observable<Todo[]>;
  filterBy = 'All';
  tabs: string[] = ['All', 'Completed', 'Pending'];
  sub: Subscription[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoListAsync = this.mainService.getTodoList();
  }

  getTodoListFiltered(value) {
    const filter = (value === 'Completed') ? true : false;
    this.todoListAsync = this.mainService.getTodoListByFilter(`${filter}`);
  }

  onDeleteTaskById(id: string | number) {
    this.sub.push(this.mainService.deleteItem(id).subscribe());
  }

  onUpdateTodo(todoItem: Todo) {
    this.sub.push(this.mainService.updateItem(todoItem).subscribe());
  }

  onChangeTab(currentTab) {
    if (currentTab.title === 'Completed' || currentTab.title === 'Pending') {
      this.getTodoListFiltered(currentTab.title);
    } else {
      this.getTodoList();
    }
  }

  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe());
  }
}
