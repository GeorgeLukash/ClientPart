import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan.component.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

private plan:Plan[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.get('user/plans').subscribe((response)=>
    {
     this.plan = response.json();
    })
  }

}
