import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private firstname:string = '';
  private lastname:string = '';
  private image:string = '';

  constructor(public router: Router, private apiService:ApiService) { }

  ngOnInit() {
      this.apiService.get('user/profile').subscribe((response)=>
      {
        this.firstname = response.json().firstname;
        this.lastname = response.json().lastname;
        this.image = response.json().image;
      })
  }
  goTo(path) {
    this.router.navigate(['./main', path]);
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
