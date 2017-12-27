import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { ForgotpassComponent } from '../forgotpass/forgotpass.component';
import { MainComponent } from '../main/main.component';
import { PlanComponent } from '../plan/plan.component';
import { BlocksComponent } from '../blocks/blocks.component';
import { ExercisesComponent } from '../exercises/exercises.component';
import { UserComponent } from '../user/user.component';
import { ProfileComponent } from '../profile/profile.component';
import { NewsComponent } from '../news/news.component';

import { CoachComponent } from '../coach/coach.component';
import { CoachplansComponent } from '../coachplans/coachplans.component';
import { AdminComponent } from '../admin/admin.component';
import { PlansdetailsComponent } from '../plansdetails/plansdetails.component';
import { AccessGuard } from '../guards/access.guard';
import { CoachGuard } from '../guards/coach.guard';

export const router: Routes = [
    {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full'
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'forgot-password',
        component: ForgotpassComponent
    },
    {
        path: 'main',
        component: MainComponent,
        children: [{
            path: 'user',
            component: UserComponent            
        },
        {
            path: 'plans',
            component: PlanComponent
        },
        {
            path: 'blocks/:id',
            component: BlocksComponent
        },
        {
            path: 'exercises',
            component: ExercisesComponent
        },
        {
            path: 'profile',
            component: ProfileComponent
        },
        {
            path: 'news',
            component: NewsComponent
        },
        {
            path: 'admin',
            component: AdminComponent,
            canActivate: [AccessGuard]
        },
        {
            path: 'coach',
            component: CoachComponent,
            canActivate:[CoachGuard]
        },
        {
            path: 'coachplans',
            component: CoachplansComponent
        },
        {
            path: 'plansdetails',
            component: PlansdetailsComponent
        }
        ]
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
