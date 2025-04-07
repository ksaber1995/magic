import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';
import { IReport } from '../../../../../../../model/report';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrl: './report-details.component.scss',
})

//TODO: add breadCrumb
export class ReportDetailsComponent implements OnInit{
  isReportPosted: boolean;
  adminCommentForm: FormGroup

  projectId = +this.route.snapshot.paramMap.get('projectId');
  reportId = +this.route.snapshot.paramMap.get('reportId');
  report : IReport;

  constructor(
    private fb:FormBuilder,
        private swagger: SwaggerService,
        private route: ActivatedRoute
  ){

  }
  ngOnInit() {

    this.swagger.getOneReport(this.reportId).subscribe((res: any) => {
      this.report = res;

    });

    this.adminCommentForm = this.fb.group({
      description:[null],
      uploadedFiles: this.fb.array([])
    })
  }
}
