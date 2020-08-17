import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/services/authService';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogeadoGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('canActive',isLoggedIn);
    return isLoggedIn;
  }
  
}
