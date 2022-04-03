import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    BrowserModule
  ]
})
export class AppRoutingModule { }
