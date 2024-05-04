import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Other Modules
import { PipeDirectiveModule } from '../other_modules/pipes&directive.module';
import { MaterialModule } from '../other_modules/material.module';

//Utilities
import { InvalidErrorStateMatcher } from '../../utilites/custom_validations/invalid-error-state-matcher';

//Conponents
import { MealWeekCardComponent } from '@budget-bites/shared/components/meal-week-card/meal-week-card.component';
import { IngredientsPopUpComponent } from '@budget-bites/shared/components/ingredients-pop-up/ingredients-pop-up.component';
import { FoodCardComponent } from '@budget-bites/shared/components/food-card/food-card.component';
import { AddDishPopUpComponent } from '@budget-bites/shared/components/add-dish-pop-up/add-dish-pop-up.component';
import { AddDishCardComponent } from '@budget-bites/shared/components/add-dish-card/add-dish-card.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeDirectiveModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
    MealWeekCardComponent,
    IngredientsPopUpComponent,
    FoodCardComponent,
    AddDishPopUpComponent,
    AddDishCardComponent,
  ],
  providers: [InvalidErrorStateMatcher],
  exports: [
    PipeDirectiveModule,
    ReactiveFormsModule,
    MaterialModule,
    MealWeekCardComponent,
    IngredientsPopUpComponent,
    FoodCardComponent,
    FormsModule,
    AddDishPopUpComponent,
    AddDishCardComponent
  ],
})
export class AppSharedModule {}
