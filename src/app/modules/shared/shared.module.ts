import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CardComponent } from './components/card/card.component';

const declarationsImports = [
  CardComponent
]

@NgModule({
  declarations: [
    BreadCrumbComponent,
    ...declarationsImports
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
