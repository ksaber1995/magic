import { Component } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IReport } from '../../../../../../model/report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit{
  reports: IReport[] = [];

  projectId = +this.route.snapshot.paramMap.get('projectId');
  constructor(
    private swagger: SwaggerService,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.swagger.getAllReports().pipe(map(res=> res.filter(res=> res.project_id == this.projectId)))
    .subscribe(res=>{
      this.reports = res;

    });

  }
}
