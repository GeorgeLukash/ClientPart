import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http,RequestOptionsArgs, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    logName: string;
    showError: boolean;
    images:any;

    constructor(private router: Router, private _httpService: Http ) { }

    ngOnInit() {
        this.showError = false;
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
               this.images= btoa(binaryString);
       }
       
    login() {

        const arrKey: string[] = [];
        let logIn: Boolean;
        logIn = false;
        // tslint:disable-next-line:forin
        for (const key in localStorage) {
            arrKey.push(key);
        }
        let body = new URLSearchParams();
        body.set('grant_type', "password");
        body.set('username', this.email);
        body.set('password', this.password);
        body.set('email', this.email);
        
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let opts:RequestOptionsArgs = { headers: headers };

        this._httpService.post("http://localhost:57848/token", body.toString(),opts).subscribe(
                        (response) => {
                         localStorage.setItem('token', response.json().access_token);
                         localStorage.setItem('user_type', response.json().user_type);
                         this.router.navigate(['./profile']);
                         });
                        }
}

