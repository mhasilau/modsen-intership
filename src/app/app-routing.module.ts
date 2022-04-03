import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./core/pages/sign-up/sign-up.component";
import { BrowserModule } from "@angular/platform-browser";
import {SignInComponent} from "./core/pages/sign-in/sign-in.component";

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    BrowserModule
  ]
})
export class AppRoutingModule { }
