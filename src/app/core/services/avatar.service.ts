import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserSignIn } from '../../interfaces/user.interface'; // TODO: Use alias
import { JSON_API } from '../../api/api-placeholder.constans'; // TODO: Use alias
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient){ }

  getUserAvatar(): Observable<IUserSignIn[]>{
    return this.http.get<IUserSignIn[]>(JSON_API.users_pass); // TODO: Api service
  }
}
