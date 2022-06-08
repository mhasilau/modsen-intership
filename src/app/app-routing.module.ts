import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from '@core/guards';
import {
  MainPageComponent,
  PageNotFoundComponent,
  SignInComponent,
  SignUpComponent,
  UserSelfComponent,
  UserSettingsComponent
} from '@core/pages';
import { UserNewsComponent } from '@core/components';

const innerRoutes: Routes = [
  { path: 'settings', component: UserSettingsComponent },
  { path: 'self', component: UserSelfComponent },
  { path: 'news', component: UserNewsComponent },
];

const routes: Routes = [
  {
    path: '',

    redirectTo: '/user/self',
    pathMatch: 'full',

  },
  {
    path: 'user',
    redirectTo: '/user/self',
    pathMatch: 'full',
  },
  { path: 'user', component: MainPageComponent, children: innerRoutes, canActivate: [AuthGuard] },

  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserModule],
})
export class AppRoutingModule {}
