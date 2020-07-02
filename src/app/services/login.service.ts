import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _isAuthenticated: boolean;
  users: User[] = [
    {
      name: 'Javier Ruiz',
      email: 'java.rv87@gmail.com',
      password: '123'
    }
  ];

  constructor() { }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  set isAuthenticated(value) {
    this._isAuthenticated = value;
  }

  getUser(user: User) {
    return this.users.filter((data) => data.email === user.email);
  }

  createUser(user: User) {
    let result;
    const userExists = this.getUser(user).length;

    if (user.email !== 'alex@gmail.com' && !userExists) {
      this.users.push(user);
      result = {
        success: 'User created successfully!'
      };
    } else {
      const msg = (userExists) ? 'User already exists!' : 'User can not be created!';
      result = { error: msg };
    }

    return result;
  }
}
