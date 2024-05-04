import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDetail } from '@budget-bites/shared/models/user-details';
import { HttpService } from '@budget-bites/shared/services/http-service/http.service';
import { ApiConstant } from '@budget-bites/shared/utilites/app_constant/apiConstant';


@Component({
  selector: 'budget-bites-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  constructor(private router: Router,private fb: FormBuilder,private httpService: HttpService,private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.initializeLoginForm();
  }
  onLoginSubmit() {
    // this.httpService.post(ApiConstant.loginAuth, this.loginForm.value).subscribe({
    //   next: (response: UserDetail) => {
        
    //     if(!response.isError){

    //       this.router.navigate(['']);
    //     }
    //     else{
    //       this.snackBar.open(response.errorMessage);
    //     }
    //   }
    // });
    this.router.navigate(['']);
  }

  initializeLoginForm(){
    this.loginForm = this.fb.group({
      userName: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      password: this.fb.control('', [Validators.required])
    })
  }
}
