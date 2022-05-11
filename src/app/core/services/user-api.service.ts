import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { JSON_API } from '../../api/api-placeholder.constans';
import { IUser, IUserSignIn } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {
  constructor(private http: HttpClient){ }

  readonly user$ = new BehaviorSubject<IUser | null>(null);

  getUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>(JSON_API.users);
  }

  getUserCreeds(): Observable<IUserSignIn[]>{
    return this.http.get<IUserSignIn[]>(JSON_API.users_pass);
  }

  generateToken(): string {
    const num = Math.random();
    return String(num * Math.pow(10, num.toString().length - 2));
  }

  login(email: string, password: string): Observable<{user?: IUserSignIn, token: string}> {
    return this.getUserCreeds().pipe(
      map(users => {
        const user = users.find(user => user.password === password && user.email === email);
        if (user) {
          return {
            user,
            token: this.generateToken()
          };
        } else return {
          user,
          token: ''
        };
      })
    );
  }
}
