import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './core/pages/sign-up/sign-up.module';
import { HeaderModule } from './core/components/header/header.module';
import { FooterModule } from './core/components/footer/footer.module';
import { SignInModule } from './core/pages/sign-in/sign-in.module';
import { PageNotFoundModule } from './core/pages/page-not-found/page-not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpModule,
    SignInModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
