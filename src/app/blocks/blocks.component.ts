import { Component, OnInit } from '@angular/core';

import { BlockModel } from '../model/blocks.component.model';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  private blocks: BlockModel[] = [];

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
    let newBlock: BlockModel = new BlockModel();
    newBlock.planName = prompt("Enter name for plan", "My plan");
    this.blocks.push(newBlock);
    console.log(this.blocks);
  }

  clicked(event) {
    event.target.classList.add('clicked-block'); // To ADD
    /*event.target.classList.remove('class1'); // To Remove
    event.target.classList.contains('class2'); // To check
    event.target.classList.toggle('class4'); // To toggle*/
  }
}

