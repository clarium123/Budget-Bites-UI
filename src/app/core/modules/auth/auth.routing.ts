import { Routes, RouterModule } from '@angular/router';
//Components
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration-form',
    pathMatch: 'full'
  },
  {
    path: 'registration-form',
    component: RegistrationFormComponent
  },
  {
    path: 'login-form',
    component: LoginFormComponent
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
