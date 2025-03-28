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
import { NgApexchartsModule } from "ng-apexcharts";
import { MagicSelectComponent } from './components/magic-select/magic-select.component';
import { MatSliderModule } from '@angular/material/slider';
import { FilesUploadComponent } from './components/files-upload/files-upload.component';

const declarationsImports = [
  CardComponent,
  MagicSelectComponent,
  FilesUploadComponent
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
  NgSelectModule,
  NgApexchartsModule,
  MatSliderModule
]

@NgModule({
  declarations: [
    BreadCrumbComponent,
    ...declarationsImports,
    CreateSuccssDialogComponent,

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
