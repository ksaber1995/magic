import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { Decision } from '../../../../../../model/decision';
import { FormControl } from '@angular/forms';
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based, so add 1
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}
@Component({
  selector: 'app-create-decision',
  templateUrl: './create-decision.component.html',
  styleUrl: './create-decision.component.scss',
})
export class CreateDecisionComponent implements OnInit {
  @ViewChild('dateInput') dateInput!: ElementRef;
  formatLabel(value: number): string {
    return `${value} %`;
  }
  isUpdating: boolean;
  projects$ = this.swagger.getAllProjects();

  decisionForm: FormGroup

  breadcrumbs = [
    {
      label:'بوابة البرامج', 
      url:'/'
    }, 
    {
      label:'قرارات اللجنة العليا', 
      url:'/main/decisions'
    }, 
    {
      label:'انشاء قرار'
    }

  ]
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.decisionForm = this.fb.group({
      project_id: ['all'],
      title: [null],
      content: [null],
      files: [[]],
      progress_percentage: [null],
      status_id: [null],
      decision_date: [null]
    })
  }


  setTodayDate() {
    this.decisionForm.get('decision_date').setValue(new Date().toISOString().split('T')[0])
  }

  createDecision() {
    const decision: Partial<Decision> = {
      project_id: this.formValue.project_id,
      title: this.formValue.title,
      content: this.formValue.content,
      progress_percentage: this.formValue.progress_percentage,
      status_id: this.formValue.status_id,
      decision_date: formatDate(this.formValue.decision_date),
      files: this.formValue.files
    }
    this.isUpdating = true;
    this.swagger.createDecision(decision)
      .subscribe(res => {
        this.snackbar.showSuccess('تم اضافة القرار');
        this.decisionForm.reset();
        this.filesControl.reset();
        this.isUpdating = false;

      }, error => {
        this.snackbar.showError(error.message);
        this.isUpdating = false;
      })
  }

  get formValue() {
    return this.decisionForm.value
  }

  get filesControl() {
    return this.decisionForm.get('files') as FormControl;
  }
}
