import { NgModule } from '@angular/core';

//Material Modules
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatBadgeModule } from "@angular/material/badge";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//Material CDK Module
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatBadgeModule,
    MatExpansionModule,
    MatChipsModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    DragDropModule,
    CdkStepperModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatBadgeModule,
    MatExpansionModule,
    MatChipsModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    DragDropModule,
    CdkStepperModule,
  ],
})
export class MaterialModule { }
