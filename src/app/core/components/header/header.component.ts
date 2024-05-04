import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'budget-bites-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateToCart(){
    this.router.navigate(['/budget-plan/cart']);
  }
  navigateHome(){
    this.router.navigate(['/']);
  }
  logout(){
    this.router.navigate(['/user/login-form']);
  }
}
