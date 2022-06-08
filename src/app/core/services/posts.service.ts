import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JSON_API } from '../../api/api-placeholder.constans'; // TODO: Use alias
import { IPost } from '../../interfaces/posts-interface'; // TODO: Use alias


@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor(private http: HttpClient){ }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(JSON_API.posts); // TODO: Api service
  }

}
