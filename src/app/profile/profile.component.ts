import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http'
import {Profile} from '../model/profile.component.model'
import { ApiService } from '../services/api.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public profile:Profile;

  constructor(private apiService:ApiService) { }

  ngOnInit() {

     this.apiService.get('user/profile').subscribe( (response) => 
     {
        this.profile = response.json();
     },
     (error) => 
     {
         console.log(error.json());
    });
  }
  
  change_profile()
  { 
      this.apiService.put('user/profile').subscribe((response)=>console.log(response));
  }
}