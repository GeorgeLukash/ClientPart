import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile.component.model';
import { ApiService } from '../services/api.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-plansdetails',
  templateUrl: './plansdetails.component.html',
  styleUrls: ['./plansdetails.component.css']
})

export class PlansdetailsComponent implements OnInit {
  
  
    constructor(private apiService: ApiService) { }
  
    ngOnInit() {       
    }
  }
  