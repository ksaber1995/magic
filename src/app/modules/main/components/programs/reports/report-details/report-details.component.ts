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
export class ReportDetailsComponent implements OnInit {
  adminCommentForm: FormGroup;
  isReportPosted: boolean;
  projectId = +this.route.snapshot.paramMap.get('projectId');
  reportId = +this.route.snapshot.paramMap.get('reportId');
  report: IReport;
  breadCrumbs = [
    {
      label: 'البرامج',
      url: '/',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.swagger.getOneReport(this.reportId).subscribe((res: any) => {
      this.report = res;
      this.isReportPosted = res.status_id == 1;
      this.breadCrumbs.push({
        label: res.project?.title,
        url: `/main/programs/${this.projectId}/procedures`,
      });
      this.breadCrumbs.push({
        label: 'التقارير',
        url: `/main/programs/${this.projectId}/reports`,
      });
      this.breadCrumbs.push({
        label: res.title,
        url: `/main/programs/${this.projectId}/procedures/${this.reportId}`,
      });
    });

    this.adminCommentForm = this.fb.group({
      description: [null],
      uploadedFiles: this.fb.array([]),
    });
  }

  updateReportStatus() {
    this.isReportPosted = !this.isReportPosted;
    this.swagger
      .updateReport({
        id: this.reportId,
        status_id: this.isReportPosted ? 1 : 2,
      })
      .subscribe(res=> {});
  }
}
