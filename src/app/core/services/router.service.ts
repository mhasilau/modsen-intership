import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

enum PATH {
  SIGN_IN = 'sign-in',
  USER_PAGE = 'user'
}

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  singInNavigate(): void {
    this.router.navigate([PATH.SIGN_IN]);
  }

  userPageNavigate(): void {
    this.router.navigate([PATH.USER_PAGE]);
  }
}
