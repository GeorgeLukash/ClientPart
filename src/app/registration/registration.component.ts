import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http, Headers } from '@angular/http';
import { RegisterUser } from '../model/register-user.component.model';
import { DateOutput } from '../model/date.register.component.model';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    private user: RegisterUser = new RegisterUser();
    private date: DateOutput = new DateOutput();
    private sex_flag: Boolean = false;

    constructor(private router: Router, private apiService: ApiService) { }

    ngOnInit() {

    }
    userMale(flag) {
        if (flag) {
            this.user.sex = 0;
        } else {
            this.user.sex = 1;
        }
    }

    signUp() {
        if (this.user.email != null && this.user.firstname != null && this.user.password != null) {
            this.userMale(this.sex_flag);
            this.user.age = new Date().getFullYear() - this.date.year;
            this.apiService.post('auth/register', JSON.stringify(this.user))
                .subscribe(
                () => { },
                err => console.error(err)
                );

            this.router.navigate(['./login']);
        } else {
            alert('Error: Your data is empty');
        }
    }

}

