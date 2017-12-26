import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { RegisterUser } from '../model/register-user.component.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private firstname: string = '';
  private lastname: string = '';
  private image: string = '';
  private sex: number;
  private img_df: string;

  private css_class1: string;
  private css_class2: string;

  private user: RegisterUser = new RegisterUser();

  constructor(public router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('user/profile').subscribe((response) => {
      this.user = response.json();
      console.log(this.user);
      this.firstname = response.json().firstname;
      this.lastname = response.json().lastname;
      this.image = response.json().image;
      this.sex = response.json().sex;     
      if (this.image === null) {
        console.log('sex:', this.sex);
        this.css_class2 = 'cust-hide';
        if (this.sex === 0) {
          this.img_df = 'assets/img/users/user_profile_female.jpg';
          this.css_class1 = 'cust-show';          
        } else if (this.sex === 1) {
          this.img_df = 'assets/img/users/user_profile_male.jpg';
          this.css_class1 = 'cust-show';         
        }
      } else {
        this.css_class1 = 'cust-hide';
        this.css_class2 = 'cust-show';
      }

    });
  }
  goTo(path) {
    this.router.navigate(['./main', path]);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
