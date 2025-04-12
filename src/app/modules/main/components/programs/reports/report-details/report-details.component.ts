import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';
import { IReport } from '../../../../../../../model/report';
import { SnackbarService } from '../../../../../../services/snackbar.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrl: './report-details.component.scss',
})
export class ReportDetailsComponent implements OnInit {
  commentForm = this.fb.group({
    comment: [null],
    files: [[]],
  });;

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
    private route: ActivatedRoute,
    private snackbar: SnackbarService
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


  addComment(){
    console.log(this.commentForm)
    const body = {
      id: this.reportId,
      comment: this.commentForm.value.comment,
      comment_files: this.commentForm.value.files,
      project_id : this.projectId
    }
    this.swagger
    .updateReport(body)
    .subscribe(res=> {
      this.snackbar.showSuccessSnackbar('تم اضافة التعليق بنجاح')
    },error=>{
      this.snackbar.showError(error.message);
    });
  }
}
