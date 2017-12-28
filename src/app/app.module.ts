import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap';
import { Plan } from './model/plan.component.model';

import { routes } from './app-routing/app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { MainComponent } from './main/main.component';
import { PlanComponent } from './plan/plan.component';
import { BlocksComponent } from './blocks/blocks.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { UserComponent } from './user/user.component';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';

import { CoachComponent } from './coach/coach.component';
import { CoachplansComponent } from './coachplans/coachplans.component';
import { AdminComponent } from './admin/admin.component';
import { PlansdetailsComponent } from './plansdetails/plansdetails.component';

import { AccessGuard } from './guards/access.guard';
import { CoachGuard } from './guards/coach.guard';
import { PythonService } from './services/api.python.service';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    RegistrationComponent,
    CoachComponent,
    CoachplansComponent,
    ForgotpassComponent,
    MainComponent,
    PlanComponent,
    BlocksComponent,
    ExercisesComponent,
    UserComponent,
    ProfileComponent,
    NewsComponent,
    PlansdetailsComponent,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ApiService, AccessGuard, CoachGuard, AuthService, PythonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
