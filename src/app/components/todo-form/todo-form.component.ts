import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, AbstractControl } from '@angular/forms';

import { MainService } from 'src/app/services/main-service.service';
import { Todo } from './../../interfaces/todo';
import { emailValidator, passwordMatch } from './../../utils/util';
import { errors } from 'src/app/utils/errorsMsg';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private mainService: MainService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      title: '',
      task: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [emailValidator]],
      password: [''],
      confirmPassword: ['']
    }, {
      validators: [passwordMatch]
    });
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get task(): AbstractControl {
    return this.form.get('task');
  }

  addNewTask({ valid, value }: { valid: boolean, value: string }): void {
    if (valid) {
      const todo = new Todo(value);
      this.mainService.addNewTodo(todo);
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
}
