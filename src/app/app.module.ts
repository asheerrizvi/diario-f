import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './landing/signin/signin.component';
import { SignupComponent } from './landing/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { NotesComponent } from './user/notes/notes.component';
import { EventsComponent } from './user/events/events.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MenuComponent } from './user/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    UserComponent,
    LoadingSpinnerComponent,
    DashboardComponent,
    NotesComponent,
    EventsComponent,
    ProfileComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
