import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';

import { routes } from './app-routing/app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpassComponent,
    MainComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
