import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const declarationsImports = [
  CardComponent
]
const imports = [
  ReactiveFormsModule,
  FormsModule
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
