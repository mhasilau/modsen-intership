import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { RouterService, UserService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private routerService: RouterService) {}
  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.user$.pipe(map(user => {
      if (!user) {
        this.routerService.singInNavigate();
      }
      return !!user;
    }));
  }

  // TODO User guard - редирект на страницу юзера, если он есть (отдельный гард)

}
