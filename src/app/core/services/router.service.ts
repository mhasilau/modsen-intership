import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const PATH = {
  'sign-in': 'sign-in',
  'user-page': 'user'
};

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  singInNavigate(): void {
    this.router.navigate([PATH['sign-in']]);
  }

  userPageNavigate(): void {
    this.router.navigate([PATH['user-page']]);
  }
}
