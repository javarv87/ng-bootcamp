import { User } from './../../interfaces/user';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';

import { emailValidator, passwordMatch } from 'src/app/utils/util';
import { errors } from 'src/app/utils/errorsMsg';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  showPass = false;
  showConfirmPass = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  canDeactivate() {
    if (this.form.dirty || this.form.touched) {
      return window.confirm('Are you already want to leave this page?');
    }

    return true;
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [emailValidator, Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: [passwordMatch]
    });
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  getErrorMessage(control: AbstractControl): string | null {
    for (const propertyErrorName in control.errors) {
      if (control.errors.hasOwnProperty(propertyErrorName)) {
        return errors[propertyErrorName];
      }
    }
    return null;
  }

  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    if (valid) {
      const data = this.loginService.createUser(value);
      this.router.navigate(['login'], {
        queryParams: data
      });
    }
  }
}

