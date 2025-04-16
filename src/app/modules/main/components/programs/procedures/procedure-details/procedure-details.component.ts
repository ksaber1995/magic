import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { Procedure } from '../../../../../../../model/procedure';
import { SnackbarService } from '../../../../../../services/snackbar.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrl: './procedure-details.component.scss'
})
export class ProcedureDetailsComponent implements OnInit {
  commentForm = this.fb.group({
    comment: [null],
    files: [[]],
  });;

  procedureId = +this.route.snapshot.paramMap.get('id');
  projectId = +this.route.snapshot.paramMap.get('projectId');
  procedure : Procedure
  isLoaded: boolean;
  breadCrumbs = [
    {
      label:'البرامج',
      url:'/'
    },

  ]
  constructor(
    private route: ActivatedRoute,
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.swagger.getOneProcedure(this.procedureId).subscribe(res=>{
      this.procedure ={...res, files: res.files.map(res=> ({...res, size: res.size / 1024, fileType: res.name.split('.').pop()}))};

      this.breadCrumbs[1] ={
        label: this.procedure.project?.title,
        url: `/programs/${this.projectId}/procedures`
      }

      this.breadCrumbs[2] = {
        label: this.procedure.title,
        url: ``
      }

      this.isLoaded = true;
    })
  }


  addComment(){
    console.log(this.commentForm)
    const body = {
      id: this.procedureId,
      comment: this.commentForm.value.comment,
      comment_files: this.commentForm.value.files,
      project_id : this.projectId
    }
    this.swagger
    .updateProcedure(body)
    .subscribe(res=> {
      this.snackbar.showSuccessSnackbar('تم اضافة التعليق بنجاح')
    },error=>{
      this.snackbar.showError(error.message);
    });
  }
}
