import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
      this.setLogin();
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.clearLogin();
     this.router.navigate(['/login']);
  }
  setLogin(){
    this.loggedIn.next(true);
  }
  clearLogin(){
    this.loggedIn.next(false);
  }
}
export interface User {
  userName: string;
  password: string;
}
