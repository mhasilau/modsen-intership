import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { loginAction, loginFailedAction, loginSuccessAction } from './auth.action';
import { catchError, mergeMap, map, tap } from 'rxjs';
import { UserApiService } from '../../../services/user-api.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private userApiService: UserApiService
  ) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    mergeMap(({ login, password }) => this.userApiService.login(login, password).pipe(
      map(({ user, token }) => user ? loginSuccessAction({ user, token }) : loginFailedAction({ serverError: 'Error' })),
      catchError(error => [ loginFailedAction({ serverError: error })])
    ))
  ));

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(() => this.router.navigate(['/']))
  ), { dispatch: false });

}
