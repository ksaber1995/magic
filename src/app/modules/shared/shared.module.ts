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

const declarationsImports = [
  CardComponent
]
const imports = [
  ReactiveFormsModule,
  FormsModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule

]

@NgModule({
  declarations: [
    BreadCrumbComponent,
    ...declarationsImports
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
