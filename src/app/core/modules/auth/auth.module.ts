//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '@budget-bites/shared/modules/app-shared/app-shared.module';
//Routes
import { AuthRoutes } from './auth.routing';
//Components
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    VerifyOtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutes,
    AppSharedModule
  ],
})
export class AuthModule {}
