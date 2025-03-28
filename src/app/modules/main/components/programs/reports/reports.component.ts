import { Component } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit{
  reports$ = this.swagger.getAllReports();
  constructor(
    private swagger: SwaggerService
  ){}
  reports =[
    {
      name:'karim saber',
      date:'2021-01-19',
      reportCreator:'Admin',
      reportStatus:'مسودة',
      id:'111'
    }
  ]

  ngOnInit(): void {
    this.reports$.subscribe(res=>{
      debugger;
    })
  }
}
