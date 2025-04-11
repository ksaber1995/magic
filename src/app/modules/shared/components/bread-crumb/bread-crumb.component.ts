import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent {
  constructor(
    private swagger : SwaggerService
  ){

  }
  @Input() breadCrumbs: { label: string; url?: string }[] = [];
  @Input() breadCrumbButton:{label: string , url:string}
  @Input() showViewIcons: boolean;
  @Output() setView = new EventEmitter<number>()
  switchView(viewType){
    this.setView.emit(viewType)
  }
}
