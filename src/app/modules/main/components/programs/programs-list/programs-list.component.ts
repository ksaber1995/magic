import { Component } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';


@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.scss'
})

export class ProgramsListComponent {
  breadcrumbs = [
    {
      label:'بوابة البرامج', 
      url:'/'
    }, 
    {
      label:'البرامج'
    }
  ]
  projects$ = this.swagger.getAllProjects();
  constructor(private swagger: SwaggerService){}
}
