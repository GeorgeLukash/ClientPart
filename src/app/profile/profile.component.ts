import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http'
import {Profile} from '../model/profile.component.model'
import { ApiService } from '../services/api.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public profile:Profile;
    public image:Image = new Image();

  constructor(private apiService:ApiService) { }

  ngOnInit() {

     this.apiService.get('user/profile').subscribe( (response) => 
     {
        this.profile = response.json();
     },
     (error) => 
     {
         console.log(error.json());
    });
  }
  
  change_profile()
  { 
      this.apiService.put('user/profile',JSON.stringify(this.profile)).subscribe((response)=>console.log(response));
  }

  change_image()
  {
    this.apiService.post('user/profile/image',JSON.stringify(this.image)).subscribe();
  }
  changeListener($event) : void {
    var files = $event.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt) {
           var binaryString = readerEvt.target.result;
           this.image.image= btoa(binaryString);
           
   }
}