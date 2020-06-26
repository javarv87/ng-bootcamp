import { Component, OnInit } from '@angular/core';

import { Todo } from './../../interfaces/todo';
import { MainService } from './../../services/main-service.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoList = this.mainService.getTodos();
  }

  onDeleteTaskById(id: string | number) {
    this.todoList = this.mainService.deleteById(id);
  }
}
