import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @Output() deleteTaskById = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit() { }

  deleteItem(id: string | number) {
    this.deleteTaskById.emit(id);
  }
}
