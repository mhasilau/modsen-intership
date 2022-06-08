import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SignUpComponent } from './core/pages/sign-up/sign-up.component'; // TODO: Use alias. Use index files
import { SignInComponent } from './core/pages/sign-in/sign-in.component'; // TODO: Use alias. Use index files
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component'; // TODO: Use alias. Use index files
import { MainPageComponent } from './core/pages/main-page/main-page.component'; // TODO: Use alias. Use index files
import { UserSelfComponent } from './core/pages/main-page/user-self/user-self.component'; // TODO: Use alias. Use index files
import { UserNewsComponent } from './core/components/user-news/user-news.component'; // TODO: Use alias. Use index files
import { UserSettingsComponent } from './core/pages/main-page/user-settings/user-settings.component'; // TODO: Use alias. Use index files
import { AuthGuard } from './core/guards/auth.guard'; // TODO: Use alias. Use index files

const innerRoutes: Routes = [
  { path: 'settings', component: UserSettingsComponent },
  { path: 'self', component: UserSelfComponent },
  { path: 'news', component: UserNewsComponent },
];

const routes: Routes = [ // change to Lazy
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
