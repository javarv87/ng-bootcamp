import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoItem: Todo;
  @Output() deleteTaskById = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit() { }

  deleteItem(id: string | number) {
    this.deleteTaskById.emit(id);
  }
}
