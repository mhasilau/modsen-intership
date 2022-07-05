import { Injectable } from '@angular/core';


const TOKEN = 'token';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToken(token: string | null): void {
    if (typeof token === 'string') {
      localStorage.setItem(TOKEN, token);
    }
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN);
  }
}
