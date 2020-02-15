import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './landing/signin/signin.component';
import { SignupComponent } from './landing/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { LedgerComponent } from './ledger/ledger.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    LedgerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
