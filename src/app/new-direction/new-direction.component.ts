import { Component, OnInit } from '@angular/core';
import { Direction } from '../model/data.direction';
import { ApiService } from '../services/api.service';
import { PythonService } from '../services/api.python.service';
import { AppConfig } from '../app.config'

@Component({
  selector: 'app-new-direction',
  templateUrl: './new-direction.component.html',
  styleUrls: ['./new-direction.component.css']
})
export class NewDirectionComponent implements OnInit {

  public streets = [
    {
      "id": 0,
      "name": "Street1-Street2",
      "distance": 16
    },
    {
      "id": 1,
      "name": "Street1 - Street4",
      "distance": 15
    }, {
      "id": 2,
      "name": "Street1 - Street6",
      "distance": 7
    }, {
      "id": 3,
      "name": "Street2 - Street8",
      "distance": 18
    }, {
      "id": 4,
      "name": "Street2 - Street9",
      "distance": 36
    }, {
      "id": 5,
      "name": "Street3 - Street7",
      "distance": 23
    }, {
      "id": 6,
      "name": "Street3 - Street5",
      "distance": 21
    }, {
      "id": 7,
      "name": "Street3 - Street4",
      "distance": 5
    }, {
      "id": 8,
      "name": "Street3 - Street11",
      "distance": 30
    }, {
      "id": 9,
      "name": "Street4 - Street10",
      "distance": 41
    }, {
      "id": 10,
      "name": "Street6 - Street1",
      "distance": 37
    }, {
      "id": 11,
      "name": "Street6 - Street2",
      "distance": 10
    }, {
      "id": 12,
      "name": "Street6 - Street10",
      "distance": 15
    }, {
      "id": 13,
      "name": "Street7 - Street2",
      "distance": 23
    }, {
      "id": 14,
      "name": "Street9 - Street2",
      "distance": 10
    }, {
      "id": 15,
      "name": "Street9 - Street8",
      "distance": 50
    },
  ];
  public street: any = -1;
  public directionName: string;
  public speed: number;
  public distance: number = 0;
  public duration: number = 0;
  public wayName: string;
  public date: Date;
  public myDir = new Direction();
  public class1: string = 'hide';

  constructor(private apiService: ApiService, private pythonService: PythonService) { }

  ngOnInit() {
    this.date = new Date(Date.now());
  }
  findWay(id) {
    for (let i = 0; i < this.streets.length; i++) {
      if (this.streets[i].id == id) {
        this.distance = this.streets[i].distance;
        this.wayName = this.streets[i].name;
        break;
      }
    }
    this.getDuration();
  }

  getDuration() {
    if (this.speed != null) {
      this.duration = Math.round(this.calculateDuration(this.distance, +this.speed) / 60);
    } else {
      this.duration = 0;
    }
  }

  calculateDuration(d, s): number {
    return (d * 1000) / s;
  }
  updateDirection() {
    this.myDir.directionName = this.directionName;
    this.myDir.streetId = this.street;
    this.myDir.street = this.wayName;
    this.myDir.speed = +this.speed;
    this.myDir.distance = this.distance;
    this.myDir.duration = this.duration * 60;
    this.myDir.date = this.date.toString();

    if (AppConfig.url === 'localhost:5000') {
      this.myDir.token = localStorage.getItem('token');
      this.pythonService.post('direction', JSON.stringify(this.myDir)).subscribe(
        (response) => { console.log(response.json()) },
        err => console.error(err)
      );
    }
    else {
      this.apiService.post('user/direction', this.myDir).subscribe((respons) => { });
    }
    this.class1 = 'show';
    this.directionName = "";
    this.street = -1;
    this.speed = null;
    this.distance = 0;
    this.duration = 0;

    setTimeout(() => { this.class1 = 'hide' }, 2000);
  }
}
