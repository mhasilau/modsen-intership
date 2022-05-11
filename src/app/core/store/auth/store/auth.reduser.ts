import { createReducer, on } from '@ngrx/store';
import { loginFailedAction, loginSuccessAction } from './auth.action';
import { IUserSignIn } from '../../../../interfaces/user.interface';

export const AUTH_FEATURE_NAME = 'auth';

export interface IAuthState {
  authSuccess: boolean,
  authError: boolean,
  token: string,
  user: IUserSignIn | null
}

const initialState: IAuthState = {
  authSuccess: false,
  authError: false,
  token: '',
  user: null
};

export const authReducer = createReducer(initialState,
  on(loginSuccessAction, (state, { user, token }) => ({
    ...state,
    authSuccess: true,
    authError: false,
    user,
    token
  })),
  on(loginFailedAction, state => ({
    ...state,
    authSuccess: false,
    authError: true,
    token: '',
    user: null
  }))
);


