import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap';

import { routes } from './app-routing/app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { MainComponent } from './main/main.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
import { PlanComponent } from './plan/plan.component';
import { BlocksComponent } from './blocks/blocks.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { UserComponent } from './user/user.component';
>>>>>>> 3feff7f1dd6455484fc6bbbce7d5d4a63ca2e6f4

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpassComponent,
    MainComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    PlanComponent,
    BlocksComponent,
    ExercisesComponent,
    UserComponent
>>>>>>> 3feff7f1dd6455484fc6bbbce7d5d4a63ca2e6f4
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routes
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
