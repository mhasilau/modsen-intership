import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  Router
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private userApiService: UserApiService, private router: Router) {}
  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userApiService.user$.pipe(map(user => {
      if (!user) {
        void this.router.navigate(['/sign-in']);
      }

      return !!user;
    }));
  }
}
