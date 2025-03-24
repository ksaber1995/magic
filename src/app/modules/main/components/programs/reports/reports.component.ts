import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  reports =[
    {
      name:'karim saber', 
      date:'2021-01-19', 
      reportCreator:'Admin', 
      reportStatus:'مسودة', 
      id:'111'
    }
  ]
}
