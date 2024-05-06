import { Component, OnInit } from '@angular/core';
import { UserDetail } from '@budget-bites/shared/models/user-details';
import { AuthService } from '@budget-bites/shared/services/auth/auth.service';

@Component({
  selector: 'budget-bites-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userDetail!: UserDetail;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const userDetail: UserDetail = JSON.parse(localStorage.getItem('userDetail') || "null");
    if(userDetail){
      this.userDetail = userDetail;
    }
    else{
      localStorage.removeItem('userDetail');
      this.authService.logOut();
    }
  }


}
