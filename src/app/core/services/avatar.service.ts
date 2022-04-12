import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUserSignIn} from "../../interfaces/user.interface";
import {JSON_API} from "../../api/api-placeholder.constans";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient){ }

  getUserAvatar(): Observable<IUserSignIn[]>{
    return this.http.get<IUserSignIn[]>(JSON_API.users_pass);
  }
}
