import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateSignupGuard } from './guards/can-deactivate-signup.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    canDeactivate: [CanDeactivateSignupGuard]
  },
  {
    path: 'todolist',
    component: TodoContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
