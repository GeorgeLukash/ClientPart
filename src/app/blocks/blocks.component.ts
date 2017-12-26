import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan.component.model';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  private exerciseName: string = 'My exercise';
  private exerciseName1: string = 'My exercise1';
  private exerciseName2: string = 'My exercise2';

  private id: number;
  private sub: any;

  private planName: string;
  private exerciseType: String;  

  constructor(private router: Router,
              private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
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
    this.exerciseType = sportName;
  }
}

