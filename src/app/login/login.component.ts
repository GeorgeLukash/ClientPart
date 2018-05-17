import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { ApiService } from '../services/api.service';
import { AppConfig } from '../app.config';
import { PythonService } from '../services/api.python.service';
import { PythonAuth } from '../model/python.auth.model';

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
    images: any;
    auth: PythonAuth;

    constructor(private router: Router, private _httpService: Http, private apiService: ApiService, private pythonService: PythonService) { }

    ngOnInit() {
        this.showError = false;
    }

    login() {

        if (AppConfig.url === 'localhost:5000') {
            let body: PythonAuth = new PythonAuth();
            body.email = this.email;
            body.password = this.password;
            this.pythonService.post('login', JSON.stringify(body)).subscribe((response) => {
                localStorage.setItem('token', response.json().token);
                this.pythonService.get('get_me').subscribe((response) => {
                    localStorage.setItem('user_type', response.json().userType);
                    localStorage.setItem('user_id', response.json().user_id);
                    console.log(response);
                    this.router.navigate(['main/news']);
                })
            })
        }
        else {
            const arrKey: string[] = [];
            let logIn: Boolean;
            logIn = false;
            // tslint:disable-next-line:forin
            for (const key in localStorage) {
                arrKey.push(key);
            }
            const body = new URLSearchParams();
            body.set('grant_type', 'password');
            body.set('username', this.email);
            body.set('password', this.password);
            body.set('email', this.email);

            const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            const opts: RequestOptionsArgs = { headers: headers };

            this._httpService.post('http://localhost:57848/token', body.toString(), opts).subscribe(
                (response) => {
                    localStorage.setItem('token', response.json().access_token);
                    this.apiService.get('auth/get_me').subscribe((response) => {
                        //debugger;
                        localStorage.setItem('user_type', response.json().role);
                        localStorage.setItem('user_id', response.json().id);
                    })

                    this.router.navigate(['main/news']);
                });
        }
    }
}

