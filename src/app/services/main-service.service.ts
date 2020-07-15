import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from './../interfaces/todo';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errors } from '../utils/errorsMsg';

@Injectable()
export class MainService {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      catchError(this.handleError<Todo[]>('MainService -> getTodoList', []))
    );
  }

  getTodoListByFilter(value: string): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params: {
        completed: value
      }
    });
  }

  createTodoItem(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  updateItem(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo).pipe(
      catchError(this.handleError<Todo>('MainService -> updateItem', todo))
    );
  }

  deleteItem(todoId: string | number): Observable<Todo> {
    return this.http.delete<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.warn(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

/*   addNewTodo(newTodo: Todo) {
    this.lastId = (!!this.todoList.length) ? +this.todoList[this.todoList.length - 1].id : 0;
    if (!newTodo.id) {
      newTodo.id = ++this.lastId;
    }
    newTodo.title = newTodo.title.trim();
    this.todoList.push(newTodo);
  }

  deleteById(id: string | number) {
    this.todoList = this.todoList.filter((todo) =>  +todo.id !== +id);
    return of(this.todoList);
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

    return of(this.todoList);
  } */
}
