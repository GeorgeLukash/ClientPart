import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http, Headers } from '@angular/http';
import { RegisterUser } from '../model/register-user.component.model';
import { DateOutput } from '../model/date.register.component.model';
import { ApiService } from '../services/api.service';
import { Image } from '../model/image.model';
import { Profile } from '../model/profile.component.model';
import { AppConfig } from '../app.config'
import { PythonService } from '../services/api.python.service';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    private user: RegisterUser = new RegisterUser();
    private date: DateOutput = new DateOutput();
    private sex_flag: Boolean = false;

    private image: Image = new Image();
    private profile: Profile;

    private year: number;
    private day: number;
    private month: string;

    constructor(private router: Router, private apiService: ApiService, private pythonService: PythonService) { }

    ngOnInit() {

    }
    userMale(flag) {
        if (flag) {
            this.user.sex = 0;
        } else {
            this.user.sex = 1;
        }
    }

    userRole(role: string) {
        this.user.role = role;
    }
    signUp() {
        if (this.user.email != null && this.user.firstname != null && this.user.password != null) {
            this.userMale(this.sex_flag);
            this.user.age = new Date().getFullYear() - this.year;
            if (this.user.role === undefined) {
                this.user.role = 'User';
            }
            if (AppConfig.url === 'localhost:5000') {
                this.pythonService.post('registration', JSON.stringify(this.user)).subscribe(
                    (response) => {console.log(response.json()) },
                    err => console.error(err)
                );
            }
            else {
                this.apiService.post('auth/register', JSON.stringify(this.user))
                    .subscribe(
                    () => { },
                    err => console.error(err)
                    );
                this.router.navigate(['./login']);
            }
        } else {
            alert('Error: Your data is empty');
        }
    }

}

