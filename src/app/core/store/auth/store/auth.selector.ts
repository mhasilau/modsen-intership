import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_NAME, IAuthState } from './auth.reduser';

export const selectUserSingInState = createFeatureSelector<IAuthState>(AUTH_FEATURE_NAME);

export const selectUser = createSelector(
  [selectUserSingInState],
  state => state.user
);

export const selectToken = createSelector(
  [selectUserSingInState],
  state => state.token
);
