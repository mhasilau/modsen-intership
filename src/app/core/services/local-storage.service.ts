import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  generateToken(): void {
    const num = Math.random();
    localStorage.setItem('token', String(num * Math.pow(10, num.toString().length - 2)));
  }

  getToken(key: string): any {
    localStorage.getItem(key);
  }
}
