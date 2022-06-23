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
import { UserLazyModule } from '@core/modules/user-lazy.module';

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
    loadChildren: () => import('@core/modules/user-lazy.module').then(m => m.UserLazyModule),
    canActivate: [AuthGuard]
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [GuestGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserLazyModule],
  exports: [RouterModule, BrowserModule],
})
export class AppRoutingModule {}
