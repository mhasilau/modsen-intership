import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSON_API } from '@app/api';
import { HttpClient } from '@angular/common/http';
import { IUserSignIn } from '@app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient){ }

  getUserAvatar(): Observable<IUserSignIn[]>{
    return this.http.get<IUserSignIn[]>(JSON_API.users_pass);
  }
}
