import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  userAuth$ = new Subject<boolean>();

  generateToken(): void {
    const num = Math.random();
    localStorage.setItem('token', String(num * Math.pow(10, num.toString().length - 2)));
  }
}
