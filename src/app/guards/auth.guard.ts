import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canLoad(
    route: Route, segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.loginService.isAuthenticated) {
      this.router.navigate(['login']);
    }
    return this.loginService.isAuthenticated;
  }
}
