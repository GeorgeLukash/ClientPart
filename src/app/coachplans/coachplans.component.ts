import { Component, OnInit, Input } from '@angular/core';
import { News } from '../model/news.component.model';
import { ApiService } from '../services/api.service';
import { CoachPlan } from '../model/coachplan.component.mode';

@Component({
  selector: 'app-coachplans',
  templateUrl: './coachplans.component.html',
  styleUrls: ['./coachplans.component.css']
})

export class CoachplansComponent implements OnInit {
  private plans: CoachPlan[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get('user/recommends?query=').subscribe((response) => {
      this.plans = response.json();
    });
  }

  follow(id:number):void {
    this.apiService.get('user/apply/'+id).subscribe((response)=>{})
  }
}