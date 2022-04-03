import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from "./core/pages/sign-up/sign-up.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from "./core/components/header/header.module";
import { FooterModule } from "./core/components/footer/footer.module";
import { SignInModule } from "./core/pages/sign-in/sign-in.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpModule,
    SignInModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
