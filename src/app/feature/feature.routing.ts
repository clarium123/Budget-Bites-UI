import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

export const FeatureRoutes = RouterModule.forChild(routes);
