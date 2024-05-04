//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '@budget-bites/shared/modules/app-shared/app-shared.module';
//Routes
import { ErrorsRoutes } from './errors.routing';
//Components
import { Error404Component } from './components/error-404/error-404.component';
import { Error500Component } from './components/error-500/error-500.component';

@NgModule({
  declarations: [
    Error404Component,
    Error500Component
  ],
  imports: [
    CommonModule,
    ErrorsRoutes,
    AppSharedModule
  ],
})
export class ErrorsModule {}
