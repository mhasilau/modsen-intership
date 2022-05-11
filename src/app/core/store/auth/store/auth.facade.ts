import { Observable } from 'rxjs';
import { IUserSignIn } from '../../../../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthState } from './auth.reduser';
import { loginAction } from './auth.action';
import { selectToken, selectUser } from './auth.selector';

export interface IUserSingInFacade {

  // inRequest$: Observable<boolean>
  // inError$: Observable<boolean>
  token$: Observable<string | undefined>
  user$: Observable<IUserSignIn | undefined>
  // error$: Observable<Error | undefined>

  // init(): void
  login(login: string, password: string): void
  // logout(): void
  // getUser(): void

}

@Injectable()
export class UserFacade implements IUserSingInFacade {

  // inRequest$ = this.store$.select(selectUserInRequest)
  // inError$ = this.store$.select(selectUserInError)
  // error$ = this.store$.select(selectUserError)
  token$ = this.store$.select(selectToken);
  // @ts-ignore
  user$ = this.store$.select(selectUser);

  constructor(private store$: Store<IAuthState>) {}


  login(login: string, password: string) :void {
    this.store$.dispatch(loginAction({ login, password }));
  }


}
