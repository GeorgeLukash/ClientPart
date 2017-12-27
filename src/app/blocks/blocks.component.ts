import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan.component.model';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockModel } from '../model/blocks.component.model';
import { BlockParams } from '../model/bmodel.component.model';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  
  private blockplan: BlockModel = new BlockModel();
  private blockParams: BlockParams = new BlockParams();
  
  private pls: Plan[];

  private blockName: string = 'My BLock';

  private exerciseName: string = 'My exercise';
  private exerciseName1: string = 'My exercise1';
  private exerciseName2: string = 'My exercise2';

  private id: number;
  private sub: any;

  private planName: string;
  private exerciseType: String;  

  private Time: any;
  private Distance: number;
  private Weight: number;
  private Amount: number;
  private Createdat: any;
  private Block_id: number;
  private Name: string;

  constructor(private router: Router,
              private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.blockParams.planId = this.id;
    });

    this.apiService.get('user/plans').subscribe((response) => {
      this.pls = response.json();

      for (let i = 0; i < this.pls.length; i++) {
        if (this.pls[i].id === this.id) {
          this.planName = this.pls[i].name;
          break;
        }
      }      
    });        

  }
  changeName() {
    this.blockName = prompt("Enter block name", "New block");
    if(this.blockName === null){
      this.blockName = 'My Block';
    }
  }
  changeExerciseName() {
    this.exerciseName = prompt("Enter exercise name", "Exercise name");
    if(this.exerciseName === null){
      this.exerciseName = 'My exercise';
    }
  }

  changeExerciseName1() {
    this.exerciseName1 = prompt("Enter exercise name", "Exercise name");
    if(this.exerciseName === null){
      this.exerciseName = 'My exercise1';
    }
  }

  changeExerciseName2() {
    this.exerciseName2 = prompt("Enter exercise name", "Exercise name");
    if(this.exerciseName === null){
      this.exerciseName = 'My exercise2';
    }
  }
  addNewPlan() {
    if(this.blockName === undefined){
      this.blockName = 'BlockName1';
    }
    this.blockParams.Name = this.blockName;  
    //console.log(this.blockParams);
    //this.apiService.post('user/plan/block',this.blockParams).subscribe((respons) =>{});

    this.blockplan.Distance = this.Distance;
    this.blockplan.Time = this.Time;
    this.blockplan.Amount = this.Amount;
    this.blockplan.Weight = this.Weight;
    this.blockplan.Name = this.exerciseName;

    this.blockplan.CreatedAt = '11/12/17';
    this.blockplan.BlockId = 6;
    console.log(this.blockplan);    
    this.apiService.post('user/exercise',this.blockplan).subscribe((respons) =>{});
    //this.router.navigate(['./main/user']);   
  }

  clickedSport(sportName: string) {
    this.exerciseType = sportName;
  }
}

