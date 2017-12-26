import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http, Headers } from '@angular/http';
import { RegisterUser } from '../model/register-user.component.model';
import { DateOutput } from '../model/date.register.component.model';
import { ApiService } from '../services/api.service';
import { Image } from '../model/image.model';
import { Profile } from '../model/profile.component.model';


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

    constructor(private router: Router, private apiService: ApiService) { }

    ngOnInit() {

    }
    userMale(flag) {
        if (flag) {
            this.user.sex = 0;
            this.image.image = 'http://localhost:57848/Uploads/Images/user_profile_female.jpg';
            this.image.url = 'http://localhost:57848/Uploads/Images/user_profile_female.jpg';
        } else {
            this.user.sex = 1;
            this.image.image = 'http://localhost:57848/Uploads/Images/user_profile_male.jpg';
            this.image.url = 'http://localhost:57848/Uploads/Images/user_profile_male.jpg';
        }
    }
    change_image() {
        this.apiService.post('user/profile/image', JSON.stringify(this.user)).subscribe();
    }

    signUp() {
        if (this.user.email != null && this.user.firstname != null && this.user.password != null) {
            this.userMale(this.sex_flag);
            this.user.age = new Date().getFullYear() - this.year;
            this.user.role = 'User';
            this.user.birthday = this.year + ' / ' + this.month + ' / ' + this.day;
            console.log(this.user);
            this.apiService.post('auth/register', JSON.stringify(this.user))
                .subscribe(
                () => { },
                err => console.error(err)
                );
            //this.change_image();
            this.router.navigate(['./login']);
        } else {
            alert('Error: Your data is empty');
        }
    }

}

