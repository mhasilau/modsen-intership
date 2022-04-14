import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SignUpComponent } from './core/pages/sign-up/sign-up.component';
import { SignInComponent } from './core/pages/sign-in/sign-in.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { UserSelfComponent } from './core/pages/main-page/user-self/user-self.component';
import { UserNewsComponent } from './shared/user-news/user-news.component';
import { UserSettingsComponent } from './core/pages/main-page/user-settings/user-settings.component';
import { AuthGuard } from './core/guards/auth.guard';

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
