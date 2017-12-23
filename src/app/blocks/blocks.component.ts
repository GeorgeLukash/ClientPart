import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan.component.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { BlockModel } from '../model/blocks.component.model';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  private plans: BlockModel[] = [];
  private blockplan: BlockModel = new BlockModel();
  private pls: Plan[];
  private blockName: string = 'My BLock';
  private exerciseName:string = 'My exercise';
  private exerciseName1:string = 'My exercise1';
  private exerciseName2:string = 'My exercise2';

  private planName: any[] =[];
  private exerciseType: String;
  private user_plan: Object;

  public css_class1: String = '';
  public css_class2: String = '';
  constructor(private router: Router,private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('user/plans').subscribe((response) => {
      this.pls = response.json();
      this.planName = this.pls;
      console.log(this.planName);      
    });    
    this.css_class2 = 'content-hide';
    this.user_plan = localStorage.getItem("user");

  }
  changeName() {
    this.blockName = prompt("Enter block name", "New block");
  }
  changeExerciseName() {
    this.exerciseName = prompt("Enter exercise name", "Exercise name");
  }

  changeExerciseName1() {
    this.exerciseName1 = prompt("Enter exercise name", "Exercise name");
  }

  changeExerciseName2() {
    this.exerciseName2 = prompt("Enter exercise name", "Exercise name");
  }
  addNewPlan() {
    //this.blockplan.distance = 456;
    //this.blockplan.kindOfSport = 0;
    //this.blockplan.time = 123;
    //this.blockplan.type = 7852;
    //this.blockplan.weight = 156;
    //this.blockplan.blockId = 1;
     //this.apiService.post('user/exercise',this.blockplan).subscribe((respons) =>{});
     //this.router.navigate(['./main/user']);
    // this.newBlock = new BlockModel();
    //this.newBlock.planName = prompt("Enter name for plan", "My plan");
    //this.blocks.push(this.newBlock);
    //console.log(this.blocks);
  }

  clickedSport(sportName: string) {
    //event.target.classList.add('clicked-block'); // To ADD
    this.exerciseType = sportName;
    /*event.target.classList.remove('class1'); // To Remove
    event.target.classList.contains('class2'); // To check
    event.target.classList.toggle('class4'); // To toggle*/
  }
  /*addNewPlan() {
    const newBlock: BlockModel = new BlockModel();
    newBlock.planName = this.planName;
    // newBlock.exerciseType = this.exerciseType;
    this.plans.push(newBlock);
    console.log(this.plans);
  }*/
}

