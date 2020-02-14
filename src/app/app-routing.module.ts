import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './landing/signin/signin.component';
import { SignupComponent } from './landing/signup/signup.component';
import { LedgerComponent } from './ledger/ledger.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent, children: [
        { path: '', component: SigninComponent },
        { path: 'signup', component: SignupComponent }
    ] },
    { path: 'ledger', component: LedgerComponent },
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
