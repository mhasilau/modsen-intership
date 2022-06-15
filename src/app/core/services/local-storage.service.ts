import { Injectable } from '@angular/core';


const TOKEN = 'token';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  generateToken(): void {
    const num = Math.random();
    localStorage.setItem(TOKEN, String(num * Math.pow(10, num.toString().length - 2)));
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN);
  }
}
