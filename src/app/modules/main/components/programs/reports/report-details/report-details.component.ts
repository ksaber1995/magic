import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrl: './report-details.component.scss',
})
export class ReportDetailsComponent implements OnInit{
  isReportPosted: boolean;
  isUserHasAdminRole:boolean = true
  adminCommentForm: FormGroup
  constructor(
    private fb:FormBuilder
  ){
    
  }
  ngOnInit() {
    this.adminCommentForm = this.fb.group({
      description:[null], 
      uploadedFiles: this.fb.array([])
    })
  }
  report = {
    imagePath: 'assets/images/report-image.jpg',
    name: 'karim saber',
    date: '09/11/2021',
    reportStatus: 'مسودة',
    lastUpdate: ' 3 ساعات',
    description: 'ccccc',
    uploadedFiles: [
      {
        name: 'karim saber phf',
        path: 'assets/images/pdf.svg',
      },
      {
        name: 'karim saber phf',
        path: 'assets/images/pdf.svg',
      },
      {
        name: 'karim saber phf',
        path: 'assets/images/pdf.svg',
      },
    ],
  };
}
