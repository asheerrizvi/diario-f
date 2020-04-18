import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './landing/signin/signin.component';
import { SignupComponent } from './landing/signup/signup.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            { path: '', component: SigninComponent },
            { path: 'signup', component: SignupComponent }
        ]
    },
    {
        path: 'user',
        component: UserComponent,
        children: [
            { path: '', component: DashboardComponent },
            // { path: 'notes', component: NotesComponent }
        ],
        canActivate: [AuthGuard]
    },
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
