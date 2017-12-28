import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan.component.model';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockModel } from '../model/blocks.component.model';
import { BlockParams } from '../model/bmodel.component.model';
import { BlockGet } from '../model/bbmodel.component';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  private blockplan: BlockModel = new BlockModel();
  private blockplan1: BlockModel = new BlockModel();
  private blockplan2: BlockModel = new BlockModel();
  private blockParams: BlockParams = new BlockParams();

  private blockData: BlockGet[] = [];


  private pls: Plan[] = [];

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

  private Time1: any;
  private Distance1: number;
  private Weight1: number;
  private Amount1: number;
  private Createdat1: any;
  private Block_id1: number;
  private Name1: string;

  private Time2: any;
  private Distance2: number;
  private Weight2: number;
  private Amount2: number;
  private Createdat2: any;
  private Block_id2: number;
  private Name2: string;

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
        if (this.pls[i].Id === this.id) {
          this.planName = this.pls[i].Name;
          break;
        }
      }
    });

  }
  changeName() {
    this.blockName = prompt("Enter block name", "New block");
    if (this.blockName === null) {
      this.blockName = 'My Block';
    }
  }
  changeExerciseName() {
    this.exerciseName = prompt("Enter exercise name", "Exercise name");
    if (this.exerciseName === null) {
      this.exerciseName = 'My exercise';
    }
  }

  changeExerciseName1() {
    this.exerciseName1 = prompt("Enter exercise name", "Exercise name");
    if (this.exerciseName === null) {
      this.exerciseName = 'My exercise1';
    }
  }

  changeExerciseName2() {
    this.exerciseName2 = prompt("Enter exercise name", "Exercise name");
    if (this.exerciseName === null) {
      this.exerciseName = 'My exercise2';
    }
  }
  addNewPlan() {
    if (this.blockName === undefined) {
      this.blockName = 'BlockName1';
    }
    this.blockParams.Name = this.blockName;
    //console.log(this.blockParams);    
    //this.apiService.get('user/plan/2').subscribe((response) => {});
    this.apiService.post('user/plan/block', this.blockParams).subscribe((respons) => {
      this.apiService.get('user/plan/' + this.blockParams.planId).subscribe((response) => {
        this.blockData = response.json();
        this.Block_id = this.blockData[0].id;

        this.blockplan.Distance = this.Distance;
        this.blockplan.Time = this.Time;
        this.blockplan.Amount = this.Amount;
        this.blockplan.Weight = this.Weight;
        this.blockplan.Name = this.exerciseName;
        this.blockplan.CreatedAt = '11/12/17';
        this.blockplan.BlockId = this.Block_id;

        this.blockplan1.Distance = this.Distance1;
        this.blockplan1.Time = this.Time1;
        this.blockplan1.Amount = this.Amount1;
        this.blockplan1.Weight = this.Weight1;
        this.blockplan1.Name = this.exerciseName1;
        this.blockplan1.CreatedAt = '11/12/17';
        this.blockplan1.BlockId = this.Block_id;

        this.blockplan2.Distance = this.Distance2;
        this.blockplan2.Time = this.Time2;
        this.blockplan2.Amount = this.Amount2;
        this.blockplan2.Weight = this.Weight2;
        this.blockplan2.Name = this.exerciseName2;
        this.blockplan2.CreatedAt = '11/12/17';
        this.blockplan2.BlockId = this.Block_id;

       
        console.log(this.blockplan);
        this.apiService.post('user/exercise', this.blockplan).subscribe((respons) => { });
        this.apiService.post('user/exercise', this.blockplan1).subscribe((respons) => { });
        this.apiService.post('user/exercise', this.blockplan2).subscribe((respons) => { });
        console.log(this.blockData);
      });
    });

    //this.blockplan.Distance = this.Distance;
    //this.blockplan.Time = this.Time;
    //this.blockplan.Amount = this.Amount;
    //this.blockplan.Weight = this.Weight;
    //this.blockplan.Name = this.exerciseName;

    //this.blockplan.CreatedAt = '11/12/17';
    //this.blockplan.BlockId = this.Block_id;
    //console.log(this.blockplan);
    //this.apiService.post('user/exercise', this.blockplan).subscribe((respons) => { });
    //this.router.navigate(['./main/user']);   
  }

  clickedSport(sportName: string) {
    this.exerciseType = sportName;
  }
}

