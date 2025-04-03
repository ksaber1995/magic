import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateSuccssDialogComponent } from '../../../../shared/components/create-succss-dialog/create-succss-dialog.component';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { map } from 'rxjs';
import { SnackbarService } from '../../../../../services/snackbar.service';

@Component({
  selector: 'app-create-new-news',
  templateUrl: './create-new-news.component.html',
  styleUrl: './create-new-news.component.scss'
})
export class CreateNewNewsComponent implements OnInit {
  newsForm : FormGroup;
  dialog = inject(MatDialog)
  projects$ = this.swagger.getAllProjects().pipe(map(allProjects=> allProjects.map(res=> ({name: res.title, id: res.id}))));

  breadcrumbs = [
    {
      label:'البرامج',
      url:'/'
    },
    {
      label:' قائمة أخر مستجدات اللجنة ',
      url:'/main/committee-updates-list',
    },
    {
      label:'انشاء خبر'
    }
  ]
  isUpdating = false;
  constructor(
    private fb : FormBuilder,
    private swagger : SwaggerService,
    private snackbar: SnackbarService
  ){

  }
  get formValue(){
    return this.newsForm.value
  }
  ngOnInit(): void {
    this.newsForm = this.fb.group({
      title: [null],
      project_id: [null],
      image:[null],
      content:[null],
      uploadedFiles: [[]]
    })
  }
  createNews(){
    this.isUpdating = true;

    const news = {
      project_id : this.formValue.project_id,
      title: this.formValue.title,
      image:this.formValue.image,
      content: this.formValue.content,
      files: this.formValue.uploadedFiles,
      id:null
    }

    this.swagger.createPost(news).subscribe(res=>{
      this.dialog.open(CreateSuccssDialogComponent);
      this.isUpdating = false;
      this.newsForm.reset()
    }, error=>{
      this.isUpdating = false;
      this.snackbar.showError(error.message);
    })
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const filesArray = Array.from(input.files);


      this.newsForm.get('image').setValue(filesArray[0]);
    }
  }

  get filesControl(){
    return this.newsForm.get('uploadedFiles') as FormGroup
  }
}
