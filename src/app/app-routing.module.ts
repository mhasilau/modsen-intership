import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SignUpComponent } from './core/pages/sign-up/sign-up.component';
import { SignInComponent } from './core/pages/sign-in/sign-in.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserModule],
})
export class AppRoutingModule {}
