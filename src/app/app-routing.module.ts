import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard, GuestGuard } from '@core/guards';
import {
  MainPageComponent,
  PageNotFoundComponent,
  SignInComponent,
  SignUpComponent
} from '@core/pages';
import { UserModule } from '@core/modules/user.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/self',
    pathMatch: 'full'
  },
  {
    path: 'user',
    redirectTo: '/user/self',
    pathMatch: 'full',
  },
  { path: 'user',
    component: MainPageComponent,
    loadChildren: () => import('@core/modules/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [GuestGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule],
  exports: [RouterModule, BrowserModule],
})
export class AppRoutingModule {}
