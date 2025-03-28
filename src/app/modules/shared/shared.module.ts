import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CreateSuccssDialogComponent } from './components/create-succss-dialog/create-succss-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { DatePickerModule } from 'primeng/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgSelectModule } from '@ng-select/ng-select';
<<<<<<< HEAD
import { NgApexchartsModule } from "ng-apexcharts";
=======
import { MagicSelectComponent } from './components/magic-select/magic-select.component';
import { MatSliderModule } from '@angular/material/slider';

>>>>>>> 4ac1fc2a9c6c232e36f501674d1f4088eae63ab7
const declarationsImports = [
  CardComponent
]
const imports = [
  ReactiveFormsModule,
  FormsModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  DatePickerModule,
  MatSnackBarModule,
<<<<<<< HEAD
  NgSelectModule, 
  NgApexchartsModule
=======
  NgSelectModule,
  MatSliderModule
>>>>>>> 4ac1fc2a9c6c232e36f501674d1f4088eae63ab7
]

@NgModule({
  declarations: [
    BreadCrumbComponent,
    ...declarationsImports,
    CreateSuccssDialogComponent,
    MagicSelectComponent
  ],
  imports: [
    CommonModule,
    ...imports
  ],
  exports:[
    ...declarationsImports,
    ...imports
  ]
})
export class SharedModule { }
