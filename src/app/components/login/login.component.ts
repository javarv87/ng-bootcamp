import { LoginService } from './../../services/login.service';
import { User } from './../../interfaces/user';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { emailValidator } from 'src/app/utils/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  success: string;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.error = this.route.snapshot.queryParamMap.get('error');
    this.success = this.route.snapshot.queryParamMap.get('success');
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [emailValidator, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    if (valid) {
      const user = this.loginService.getUser(value);
      this.loginService.isAuthenticated = !!user.length;

      if (user.length) {
        this.router.navigate(['todolist']);
      }
    }
  }
}
