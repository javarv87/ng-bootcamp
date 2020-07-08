import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome guys';
  name = '';
  idName = 'name';
  array = [
    {
      id: 1,
      name: 'Jav',
      isActive: true
    },
    {
      id: 2,
      name: 'Luis',
      isActive: false
    },
    {
      id: 3,
      name: 'Lalo',
      isActive: true
    },
  ];

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  setName(name: string) {
    this.name = name;
  }

  displayActiveOrNot(active) {
    // return this.array.filter((item) => item.isActive === active);

    return this.array.filter((item) => {
      return item.isActive === active;
    });
  }

  logout() {
    this.loginService.isAuthenticated = false;
    this.router.navigate(['login']);
  }
}
