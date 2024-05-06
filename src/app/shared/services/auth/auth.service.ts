import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetail } from '@budget-bites/shared/models/user-details';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router){}

  getJwtToken(): string{
    return localStorage.getItem("access_token")?.toString() || "";
  }

  setJwtToken(token: string): void{
    localStorage.setItem("access_token",token);
  }

  logIn(userDetail: UserDetail, token?: string): void{
    localStorage.setItem('userDetail', JSON.stringify(userDetail));
    if(token){
      this.setJwtToken(token);
    }
   
  }

  logOut(): void{
    localStorage.clear();
    this.router.navigate(['/user/login-form']);  
  }
}
