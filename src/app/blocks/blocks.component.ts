import { Component, OnInit } from '@angular/core';

import { BlockModel } from '../model/blocks.component.model';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  private plans: BlockModel[] = [];
  private 
  private planName: String;
  private exerciseType: String;

  public css_class1: String = '';
  public css_class2: String = '';
  constructor() { }

  ngOnInit() {
    this.css_class1 = 'other-show';
    this.css_class2 = 'content-hide';
  }
  addPlan() {
    this.css_class1 = 'other-hide';
    this.css_class2 = 'content-show';
    this.planName = prompt("Enter name for plan", "My plan");
    // this.newBlock = new BlockModel();
    //this.newBlock.planName = prompt("Enter name for plan", "My plan");
    //this.blocks.push(this.newBlock);
    //console.log(this.blocks);
  }

  clickedSport(sportName:string) {
    //event.target.classList.add('clicked-block'); // To ADD
    this.exerciseType = sportName;
    /*event.target.classList.remove('class1'); // To Remove
    event.target.classList.contains('class2'); // To check
    event.target.classList.toggle('class4'); // To toggle*/
  }
  addNewPlan() {
    const newBlock: BlockModel = new BlockModel();
    newBlock.planName = this.planName;
    newBlock.exerciseType = this.exerciseType;
    this.plans.push(newBlock);
    console.log(this.plans);
  }
}

