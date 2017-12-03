import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { ForgotpassComponent } from '../forgotpass/forgotpass.component';
import { MainComponent } from '../main/main.component';
<<<<<<< HEAD
import { ProfileComponent } from '../profile/profile.component';

=======
import { PlanComponent } from '../plan/plan.component';
import { BlocksComponent } from '../blocks/blocks.component';
import { ExercisesComponent } from '../exercises/exercises.component';
import { UserComponent } from '../user/user.component';
>>>>>>> 3feff7f1dd6455484fc6bbbce7d5d4a63ca2e6f4

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
<<<<<<< HEAD
        component: MainComponent
    },
    {
        path:'profile',
        component:ProfileComponent
=======
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
            path: 'blocks',
            component: BlocksComponent
        },
        {
            path: 'exercises',
            component: ExercisesComponent
        }
        ]
>>>>>>> 3feff7f1dd6455484fc6bbbce7d5d4a63ca2e6f4
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
