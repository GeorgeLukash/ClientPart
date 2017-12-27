import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class CoachGuard implements CanActivate {
  
  constructor(private authService: AuthService) { }

  canActivate(){    
    return this.authService.isCoach();    
  }
}