import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FeatureRoutes } from './feature.routing';
import { AppSharedModule } from '@budget-bites/shared/modules/app-shared/app-shared.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutes,
    AppSharedModule
  ],
})
export class FeatureModule {}
