import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan.component.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  private plans: Plan[];
  private plan: Plan = new Plan(0, "noname", 0);

  private show: Boolean = false;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('user/plans').subscribe((response) => {
      this.plans = response.json();
      console.log(this.plans);
    });
  }

  addPlan() {
    this.plan.name = prompt("Enter plan name", "MyPlan");
    this.plan.duration = 0;
    localStorage.setItem("user", JSON.stringify(this.plan));
    this.apiService.post('user/plan', this.plan).subscribe((respons) => { });
    location.reload();
  }
  redirect() {
    this.router.navigate(['./main/blocks']);
  }
}
