import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { RouterService, UserApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private userApiService: UserApiService, private router: RouterService) {}
  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userApiService.user$.pipe(map(user => {
      if (!user) {
        void this.router.navigate('/sign-in');
      }
      return !!user;
    }));
  }
}
