import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_NAME, authReducer } from './store/auth.reduser';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { UserFacade } from './store/auth.facade';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_NAME, authReducer),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [UserFacade]
})
export class AuthStoreModule { }
