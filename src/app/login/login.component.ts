import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) { }

    ngOnInit() {
        this.showError = false;
    }

    login() {

        const arrKey: string[] = [];
        let logIn: Boolean;
        logIn = false;
        // tslint:disable-next-line:forin
        for (const key in localStorage) {
            arrKey.push(key);
        }

        for (let i = 0; i < localStorage.length; i++) {

            if (localStorage.getItem(arrKey[i]) != null) {

                const data = JSON.parse(localStorage.getItem(arrKey[i]));

                if ((data.email === this.email) && (data.pass === this.password)) {
                    alert('Hello ' + data.fname + ' !!!!!!');
                    this.logName = data.fname;
                    logIn = true;
                    break;
                }
            }
        }
        if (logIn) {
            this.redirect();
        }

    }
    redirect() {
        this.router.navigate(['./registration']);
    }
}

