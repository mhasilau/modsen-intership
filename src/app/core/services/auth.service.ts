import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { RouterService } from '@core/services/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService, private routerService: RouterService) { }
  userAuth$ = new Subject<boolean>();

  token$ = new Subject<string|null>();

  init(): void {
    this.token$.next(this.localStorageService.getToken());
  }

  logout(): void {
    this.localStorageService.removeToken();
    this.userAuth$.next(!!this.localStorageService.getToken());
    void this.routerService.singInNavigate();
  }
}
