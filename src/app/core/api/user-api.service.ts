import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '@app/interfaces';
import { FakerService } from '@core/fakers/faker.service';
import { LocalStorageService } from '@core/services';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {
  constructor(
    private http: HttpClient,
    private faker: FakerService,
    private localStorageService: LocalStorageService
  ) {}

  signIn(email: string, password: string): Observable<string | null> {
    return this.faker.signIn(email, password);
  }

  getCurrentUser(): Observable<IUser | null> {
    return this.faker.getCurrentUser(this.localStorageService.getToken());
  }
}
