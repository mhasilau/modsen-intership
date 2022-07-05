import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '@app/interfaces';
import { UserApiService } from '@core/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userApiService: UserApiService) { }

  readonly user$ = new BehaviorSubject<IUser | null | undefined >(undefined);

  getCurrentUser(): void {
    this.userApiService.getCurrentUser().subscribe(user => this.user$.next(user));
  }

}
