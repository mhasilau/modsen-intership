import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { JSON_API } from '../../api/api-placeholder.constans'; // TODO: Use alias
import { IUser, IUserSignIn } from '../../interfaces/user.interface'; // TODO: Use alias

@Injectable({
  providedIn: 'root'
})

export class UserApiService {
  constructor(private http: HttpClient){ }

  readonly user$ = new BehaviorSubject<IUser | null>(null);

  getUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>(JSON_API.users); // TODO: Api service
  }

  getUserCreeds(): Observable<IUserSignIn[]>{
    return this.http.get<IUserSignIn[]>(JSON_API.users_pass); // TODO: Api service
  }

}
