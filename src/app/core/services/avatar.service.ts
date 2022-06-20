import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakerService } from '@core/fakers/faker.service';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private faker: FakerService){ }

  getUserAvatar(token: string | null): Observable<any>{
    return this.faker.getUserAvatar(token); // TODO get user avatar in faker service to return avatar
  }
}
