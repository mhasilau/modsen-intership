import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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

}
