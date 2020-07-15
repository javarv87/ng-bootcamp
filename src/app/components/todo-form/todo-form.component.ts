import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

import { MainService } from 'src/app/services/main-service.service';
import { Todo } from './../../interfaces/todo';
import { errors } from 'src/app/utils/errorsMsg';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub: Subscription;

  constructor(
    private mainService: MainService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      userId: 11,
      title: ['', [Validators.required]],
      completed: [false]
    });
  }

  get title(): AbstractControl {
    return this.form.get('title');
  }

  addNewTask({ valid, value }: { valid: boolean, value: string }): void {
    if (valid) {
      const todo = new Todo(value);
      this.sub = this.mainService.createTodoItem(todo).subscribe(data => console.log(data));
      this.form.reset();
    }
  }

  getErrorMessage(control: AbstractControl): string | null {
    for (const propertyErrorName in control.errors) {
      if (control.errors.hasOwnProperty(propertyErrorName)) {
        return errors[propertyErrorName];
      }
    }
    return null;
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
