import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile.component.model';
import { ApiService } from '../services/api.service';
import { Image } from '../model/image.model';
import { AppConfig } from '../app.config';
import { PythonService } from '../services/api.python.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private profile: Profile = new Profile();
  private image: Image = new Image();
  private img_df: string;

  private css_class1: string;
  private css_class2: string;

  constructor(private apiService: ApiService, private pythonService: PythonService) { }

  ngOnInit() {
    if (AppConfig.url === 'localhost:5000') {
      this.pythonService.get('user/profile').subscribe((response) => {
        this.profile = response.json();
      });
    }
    else {
      this.apiService.get('user/profile').subscribe((response) => {
        this.profile = response.json();
      });

      if (this.profile.image === null) {
        this.css_class2 = 'cust-hide';
        if (this.profile.sex === 0) {
          this.img_df = 'assets/img/users/user_profile_female.jpg';
          this.css_class1 = 'cust-show';
        } else if (this.profile.sex === 1) {
          this.img_df = 'assets/img/users/user_profile_male.jpg';
          this.css_class1 = 'cust-show';
        }
      } else {
        this.css_class1 = 'cust-hide';
        this.css_class2 = 'cust-show';
      }
    }

  }

  change_image() {
    this.apiService.post('user/profile/image', JSON.stringify(this.image)).subscribe();
    location.reload();
  }

  changeListener($event): void {
    const files = $event.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.image.image = btoa(binaryString);
    this.apiService.post('user/profile/image', JSON.stringify(this.image)).subscribe((response) => {
      this.apiService.get('user/profile').subscribe((response) => {
        this.profile = response.json();
      });
    });
  }
}
