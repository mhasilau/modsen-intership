import { createAction, props } from '@ngrx/store';
import { IUserSignIn } from '../../../../interfaces/user.interface';

export const loginAction = createAction('[Auth] login', props<{login: string, password: string}>());

export const loginSuccessAction = createAction('[Auth] success', props<{user: IUserSignIn, token: string}>());

export const loginFailedAction = createAction('[Auth] failed', props<{serverError: string}>());
