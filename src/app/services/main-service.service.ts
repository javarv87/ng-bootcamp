import { Injectable } from '@angular/core';
import { Todo } from './../interfaces/todo';

@Injectable()
export class MainService {
  private todoList: Todo[] = [
    {
      id: '1',
      task: 'Have a class',
      completed: true
    },
    {
      id: '2',
      task: 'Attend the meetings',
      completed: false
    }
  ];
  lastId: number;

  constructor() {}

  getTodos() {
    return this.todoList;
  }

  addNewTodo(newTodo: Todo) {
    this.lastId = (!!this.todoList.length) ? +this.todoList[this.todoList.length - 1].id : 0;
    if (!newTodo.id) {
      newTodo.id = ++this.lastId;
    }
    newTodo.task = newTodo.task.trim();
    this.todoList.push(newTodo);
  }

  deleteById(id: string | number) {
    this.todoList = this.todoList.filter((todo) =>  +todo.id !== +id);
    return this.todoList;
  }

  updateTodo(todo: Todo) {
    this.todoList = this.todoList.map((item) => {
      if (+todo.id === +item.id) {
        return {
          ...item,
          completed: todo.completed
        };
      } else {
        return item;
      }
    });

    return this.todoList;
  }
}
