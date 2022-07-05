import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService, RouterService, UserService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private userService: UserService, private routerService: RouterService, private authService: AuthService) {}
  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.token$.pipe(map(token => {
      if (token) {
        this.routerService.userPageNavigate();
      }
      return !!token;
    }));
  }

}
