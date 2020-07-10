import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @Output() deleteTaskById: EventEmitter<string | number> = new EventEmitter<string | number>();
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() { }

  deleteItem(id: string | number) {
    this.deleteTaskById.emit(id);
  }

  toggleTodo(todoItem: Todo) {
    this.todoItem.completed = !todoItem.completed;
    this.updateTodo.emit(todoItem);
  }
}
