import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { LayoutComponent } from './core/components/layout/layout.component';
import { MealPlannerComponent } from './feature/meal-planner/container/meal-planner.component';
import { FoodCardComponent } from './shared/components/food-card/food-card.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'meal-planner',
        pathMatch: 'full'
      },
      {
        path: 'meal-planner',
        component: MealPlannerComponent
      },
      {
        path: 'budget-plan',
        loadChildren: () => import('./feature/feature.module').then((m) => m.FeatureModule)
      },
      {
        path: 'food-card',
        component: FoodCardComponent
      },
    ]
  },
  {
    path: 'user',
    loadChildren: () => import('./core/modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./core/modules/errors/errors.module').then((m) => m.ErrorsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
