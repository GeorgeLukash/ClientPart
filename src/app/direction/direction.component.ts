import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Directions } from '../model/directions.data.model';
import { Direction } from 'ngx-bootstrap/carousel/carousel.component';
import { AppConfig } from '../app.config';
import { PythonService } from '../services/api.python.service';
import { UpdateDirection } from '../model/update.direction.model';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  //Користувач веде розклад маршрутів. При виборі маршруту йому відкривається список користувачів, які мають такий самий маршрут.
  //web api var
  public directions: Directions[] = [];
  public allOtherDirections: Directions[] = [];
  public dir: Directions[] = [];
  public userDir: Directions[] = [];
  public updateDir: UpdateDirection = new UpdateDirection();
  /*Update data */
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
  public dirId: number;
  /*Update data */
  //Python var
  public user_Id: number;
  public token: string;
  public tmpDir: Directions[] = [];

  public class1: string = "hide";
  public class2: string = "hide";
  public flag: boolean = true;

  constructor(private apiService: ApiService, private pythonService: PythonService) { }

  ngOnInit() {
    if (AppConfig.url === 'localhost:5000') {
      this.flag = true;
      this.user_Id = (Number)(localStorage.getItem('user_id'));
      this.token = localStorage.getItem('token');
      this.pythonService.get('directions').subscribe((response) => {
        this.tmpDir = response.json();

        for (let i = 0; i < this.tmpDir.length; i++) {
          if (this.user_Id == this.tmpDir[i].userId) {
            this.directions.push(this.tmpDir[i]);
          } else {
            this.allOtherDirections.push(this.tmpDir[i]);
          }
        }

        console.log(this.directions);
        console.log("==================");
      });
    }
    else {
      this.flag = false;
      this.apiService.get('user/directions').subscribe((response) => {
        this.directions = response.json();
        console.log(this.directions);
        console.log("==================");

      });
      this.apiService.get('user/alldirections').subscribe((response) => {
        this.allOtherDirections = response.json();
      });
    }
  }

  getData(id: number) {
    if (this.dir.length != 0) {
      this.dir = [];
    }
    if (id != null) {
      for (let i = 0; i < this.allOtherDirections.length; i++) {
        if (id == this.allOtherDirections[i].streetId) {
          this.dir.push(this.allOtherDirections[i]);
        }
      }
      if (this.dir.length != 0) {
        this.class1 = "show"
      } else {
        alert('No other users with such direction!!!');
      }
    }
  }
  deleteDirection(id) {
    if (AppConfig.url === 'localhost:5000') {
      for (let i = 0; i < this.directions.length; i++) {
        if (id == this.directions[i].id) {
          this.directions.splice(i, 1);
          this.pythonService.delete('deletdirection', JSON.stringify({ "id": id, "token": this.token })).subscribe(() => { });
          console.log('deletdirection/' + id + '/' + this.token);
          break;
        }
      }
    } else {
      for (let i = 0; i < this.directions.length; i++) {
        if (id == this.directions[i].id) {
          this.directions.splice(i, 1);
          this.apiService.delete('user/deletdirection/' + id).subscribe(() => { });
          break;
        }
      }
    }
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
    this.updateDir.id = this.dirId;
    this.updateDir.directionName = this.directionName;
    this.updateDir.speed = this.speed;
    this.updateDir.distance = this.distance;
    this.updateDir.duration = this.duration * 60;
    this.updateDir.streetId = this.street;
    this.updateDir.street = this.wayName;
    //console.log(this.updateDir);
    this.apiService.post('user/updatedirection', this.updateDir).subscribe(() => { });
  }

  showModal(id) {
    this.class2 = "show";
    this.dirId = id;
  }
  compareDir(dirA, dirB) {
    return dirA.streetId - dirB.streetId;
  }

  hideModal() {
    this.class1 = "hide";
    this.class2 = "hide";
    //console.log(this.directions.sort(this.compareDir));
  }
}
