import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isLoggedIn() {
        return localStorage.getItem('token') != null;
    }
    isCoach(){
        return localStorage.getItem('user_type') == '1';
    }
    isAdmin(){
        return localStorage.getItem('user_type') == '2';
    }
}