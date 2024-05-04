import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//Modules
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './shared/modules/app-shared/app-shared.module';
import { MealPlannerModule } from './feature/meal-planner/meal-planner.module';
//Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
//Service
import { HttpInterceptorService } from './shared/services/http-interceptor/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
    MealPlannerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
