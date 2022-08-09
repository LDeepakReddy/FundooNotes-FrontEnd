import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './Services/AuthService/authentication.service'

@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  constructor(public AuthenticationService: AuthenticationService, public router: Router) { }

  canActivate():boolean {
   if(!this.AuthenticationService.gettoken()){
    this.router.navigateByUrl("/login");
   }
   return this.AuthenticationService.gettoken();
  }
  
}
