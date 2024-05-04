import { Routes, RouterModule } from '@angular/router';
//Components
import { Error404Component } from './components/error-404/error-404.component';
import { Error500Component } from './components/error-500/error-500.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '500',
    component: Error500Component
  },
];

export const ErrorsRoutes = RouterModule.forChild(routes);
