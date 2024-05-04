//Modules
import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { AppSharedModule } from '@budget-bites/shared/modules/app-shared/app-shared.module';
//Routs
// import { MealPlannerRoutes } from './meal-planner.routing';
//Components
import { MealPlannerComponent } from './container/meal-planner.component';
import { FoodPreviewCardComponent } from './components/food-preview-card/food-preview-card.component';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MealPlannerComponent,
    FoodPreviewCardComponent
  ],
  imports: [
    CommonModule,
    // MealPlannerRoutes,
    AppSharedModule,
    // FormsModule
  ],
  providers: [
    {provide: DatePipe}
  ]
})
export class MealPlannerModule {}
