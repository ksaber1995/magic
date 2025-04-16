import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileItem } from '../../../../../../../model/filte';
import { Procedure } from '../../../../../../../model/procedure';
import { SnackbarService } from '../../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../../swagger/swagger.service';

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based, so add 1
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}
@Component({
  selector: 'app-create-procedures',
  templateUrl: './create-procedures.component.html',
  styleUrl: './create-procedures.component.scss'
})
export class CreateProceduresComponent implements OnInit {
  @ViewChild('dateInput') dateInput!: ElementRef;
    oldFiles: FileItem[];
    formatLabel(value: number): string {
      return `${value} %`;
    }
    isUpdating: boolean;
    users$ = this.swagger.getAllUsers()

    form: FormGroup

    id = +this.route.snapshot.paramMap.get('id');
    projectId = +this.route.snapshot.paramMap.get('projectId');
    groups$;

    breadCrumbs = [
      {
        label:'بوابة البرامج',
        url:'/'
      },

      {
        label: 'انشاء اجراء',
      }

    ]
    constructor(
      private fb: FormBuilder,
      private swagger: SwaggerService,
      private snackbar: SnackbarService,
      private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.groups$  =
        this.swagger.getAllProcedureGroupsByProjectId(this.projectId)


        if(this.id) {
        this.swagger.getOneProcedure(this.id)
        .subscribe(res => {
          this.form = this.fb.group({
            members_ids: [res.members.map(res=> res.id)],
            procedure_group_id: [res.procedure_group_id],
            title: [res.title],
            content: [res.content],
            files: [[]],
            progress_percentage: [res.progress_percentage],
            status_id: [res.status_id],
            procedure_date: [ new Date(res.procedure_date) ]
          });
          this.oldFiles = (res.files as FileItem[])
        })
      }else{
        this.form = this.fb.group({
          members_ids: [['all']],
          procedure_group_id: [],
          title: [null],
          content: [null],
          files: [[]],
          progress_percentage: [null],
          status_id: [1],
          procedure_date: [null]
        })
      }

    }


    setTodayDate() {
      this.form.get('procedure_date').setValue(new Date().toISOString().split('T')[0])
    }

    takeAction() {

      const procedure: Partial<Procedure> = {
        project_id: this.projectId,
        title: this.formValue.title,
        content: this.formValue.content,
        progress_percentage: this.formValue.progress_percentage,
        status_id: this.formValue.status_id,
        procedure_date: formatDate(this.formValue.procedure_date),
        procedure_group_id: this.formValue.procedure_group_id,
        files: this.formValue.files,
        members_ids: this.formValue.members_ids,
      }
      this.isUpdating = true;

      if (this.id) {
        this.updateProcedure(procedure);
      } else {
        this.createProcedure(procedure);
      }

    }

    createProcedure(procedure: Partial<Procedure>){
      this.swagger.createProcedure(procedure)
      .subscribe(res => {
        this.snackbar.showSuccess('تم اضافة الاجراء', `/main/programs/${this.projectId}/procedures`);
        this.form.reset();
        this.filesControl.reset();
        this.isUpdating = false;

      }, error => {
        this.snackbar.showError(error.message);
        this.isUpdating = false;
      })
    }

    updateProcedure(procedure: Partial<Procedure>){
      procedure.id = this.id;

      this.swagger.updateProcedure(procedure)
      .subscribe(res => {
        this.form.reset();
        this.filesControl.reset();
        this.isUpdating = false;
        this.snackbar.showSuccess('تم تعديل الإجراء', `/main/programs/${this.projectId}/procedures`);

      }, error => {
        this.snackbar.showError(error.message);
        this.isUpdating = false;
      })
    }

    get formValue() {
      return this.form.value
    }

    get filesControl() {
      return this.form.get('files') as FormControl;
    }
}
