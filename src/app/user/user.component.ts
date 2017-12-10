import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile.component.model';
import { ApiService } from '../services/api.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private profile: Profile;
  private image: Image = new Image();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('user/profile').subscribe((response) => {
      this.profile = response.json();
    });
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
