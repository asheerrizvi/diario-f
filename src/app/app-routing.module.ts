import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LedgerComponent } from './ledger/ledger.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'ledger', component: LedgerComponent },
    { path: 'signin', redirectTo:  '/login'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
