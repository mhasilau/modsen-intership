import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserApiService } from '@core/api';
import { LocalStorageService } from '@core/services/local-storage.service';
import { RouterService } from '@core/services/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    private userApiService: UserApiService,
    private routerService: RouterService
  ) {}
  userAuth$ = new Subject<boolean>();

  token$ = new BehaviorSubject<string | null>(null);

  init(): void {
    this.token$.next(this.localStorageService.getToken());
  }

  signIn(email: string, password: string): void {
    this.userApiService.signIn(email, password).subscribe(token => {
      this.localStorageService.setToken(token);
      this.token$.next(token);
    });
  }

  logout(): void {
    this.localStorageService.removeToken();
    this.token$.next(null);
    void this.routerService.singInNavigate(); //make sure guards work
  }
}
