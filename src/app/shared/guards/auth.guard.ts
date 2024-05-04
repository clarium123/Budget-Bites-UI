import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class AuthanticationGuard implements CanLoad {
  userDetail: string = '';
  constructor(private router: Router){}

  canLoad(): boolean {
    this.userDetail = localStorage.getItem('userDetail')?.toString() || '';
    if(this.userDetail){
      this.router.navigate(['/access-denied']);
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }

  
}
