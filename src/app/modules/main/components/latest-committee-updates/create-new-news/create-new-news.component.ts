import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateSuccssDialogComponent } from '../../../../shared/components/create-succss-dialog/create-succss-dialog.component';
import { SwaggerService } from '../../../../../swagger/swagger.service';

@Component({
  selector: 'app-create-new-news',
  templateUrl: './create-new-news.component.html',
  styleUrl: './create-new-news.component.scss'
})
export class CreateNewNewsComponent implements OnInit {
  newsForm : FormGroup;
  dialog = inject(MatDialog)
  programs$ = this.swagger.getAllProjects()
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
  constructor(
    private fb : FormBuilder, 
    private swagger : SwaggerService
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
      uploadedFiles: this.fb.array([])
    })
  }
  createNews(){
    const news = {
      project_id : this.formValue.project_id,
      title: this.formValue.title, 
      image:this.formValue.image,
      content: this.formValue.content, 
      id:null
    }
    console.log(news)
    this.swagger.createPost(news).subscribe(res=>{
      console.log(res)
      this.dialog.open(CreateSuccssDialogComponent)
    })
  }
}
