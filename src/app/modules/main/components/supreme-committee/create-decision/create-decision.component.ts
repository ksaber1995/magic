import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { Decision } from '../../../../../../model/decision';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { setFileBinaryFromURL, updateFilesFromUrls } from '../../../../../../utlities/file-helper';
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
  projects$ = this.swagger.getAllProjects().pipe(map(allProjects=> allProjects.map(res=> ({name: res.title, id: res.id}))));

  decisionForm: FormGroup

  id = +this.route.snapshot.paramMap.get('id');

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
    private snackbar: SnackbarService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.id) {
      this.swagger.getOneDecision(this.id)
      .subscribe(res => {
        this.decisionForm = this.fb.group({
          project_id: [[res.project.id]],
          title: [res.title],
          content: [res.content],
          files: [[]],
          progress_percentage: [res.progress_percentage],
          status_id: [res.status_id],
          decision_date: [ new Date(res.decision_date) ]
        });

        updateFilesFromUrls(res.files as string[], this.filesControl);
      })
    }else{
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

  }


  setTodayDate() {
    this.decisionForm.get('decision_date').setValue(new Date().toISOString().split('T')[0])
  }

  takeAction() {
    const project_idValue: any[] = this.formValue.project_id;
    const projects_ids = project_idValue.includes('all_projects') ? 'all_projects' : project_idValue;

    const decision: Partial<Decision> = {
      projects_ids,
      title: this.formValue.title,
      content: this.formValue.content,
      progress_percentage: this.formValue.progress_percentage,
      status_id: this.formValue.status_id,
      decision_date: formatDate(this.formValue.decision_date),
      files: this.formValue.files
    }
    this.isUpdating = true;

    if (this.id) {
      this.updateDecision(decision);
    } else {
      this.createDecision(decision);
    }

  }

  createDecision(decision: Partial<Decision>){
    this.swagger.createDecision(decision)
    .subscribe(res => {
      this.snackbar.showSuccess('تم اضافة القرار', '/main/decisions');
      this.decisionForm.reset();
      this.filesControl.reset();
      this.isUpdating = false;

    }, error => {
      this.snackbar.showError(error.message);
      this.isUpdating = false;
    })
  }

  updateDecision(decision: Partial<Decision>){
    decision.id = this.id;

    this.swagger.updateDecision(decision)
    .subscribe(res => {
      this.snackbar.showSuccess('تم تعديل القرار', '/main/decisions');
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
