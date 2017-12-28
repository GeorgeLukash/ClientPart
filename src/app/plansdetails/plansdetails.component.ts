import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile.component.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Image } from '../model/image.model';
import { BlockParams } from '../model/bmodel.component.model';
import { BlockGet } from '../model/bbmodel.component';

@Component({
  selector: 'app-plansdetails',
  templateUrl: './plansdetails.component.html',
  styleUrls: ['./plansdetails.component.css']
})

export class PlansdetailsComponent implements OnInit {

  private id: number;
  private sub: any;

  private blockParams: BlockParams = new BlockParams();
  private blockData: BlockGet[] = [];


  constructor(private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.blockParams.planId = this.id;
    });

    this.apiService.get('user/plan/' + this.blockParams.planId).subscribe((response) => {
      this.blockData = response.json();
      console.log(this.blockData);
    });
  }
}
