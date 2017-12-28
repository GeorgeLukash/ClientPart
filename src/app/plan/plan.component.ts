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
  private recommends:Plan[];
  private plan: Plan = new Plan();

  private show: Boolean = false;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('user/plans').subscribe((response) => {
      this.plans = response.json();
      console.log(this.plans);

      this.apiService.get('user/my_recommended').subscribe((response)=>{this.recommends = response.json()})
    });
  }

  clickedSport(exerciseType) {
    this.plan.Type = exerciseType;
  }
  addPlan() {
    this.plan.Name = prompt("Enter plan name", "MyPlan");
    this.plan.Description = prompt('Enter description', 'Description');
    if (this.plan.Type === undefined) {
      alert('Choose your type of sport');
    } else {
      this.apiService.post('user/plan', this.plan).subscribe((respons) => { });
      location.reload();
    }
    // localStorage.setItem("user", JSON.stringify(this.plan));
    //this.apiService.post('user/plan', this.plan).subscribe((respons) => { });    
  }
  redirect() {
    this.router.navigate(['./main/blocks']);
  }

  unfollow(id:number)
  {
    this.apiService.get('user/unfollow/'+id).subscribe((response)=>{location.reload()})
  }
}
