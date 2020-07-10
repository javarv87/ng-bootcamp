import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { Todo } from './../../interfaces/todo';
import { MainService } from './../../services/main-service.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('allTodos') allTodos: ElementRef;
  todoList: Todo[] = [];
  filterBy = 'All';
  tabs: string[] = ['All', 'Completed', 'Pending'];

  constructor(
    private mainService: MainService,
    private cd: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    // Solo como referencia para ustedes TabComponent
    console.log(this.allTodos);
  }

  ngAfterContentInit() {
    this.cd.detectChanges();
  }

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
