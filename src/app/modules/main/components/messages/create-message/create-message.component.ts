import { SnackbarService } from './../../../../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.scss'
})

// TODO, validators
export class CreateMessageComponent implements OnInit{
  allMembers$ = this.swagger.getAllMembers();
  form = this.fb.group({
    members_ids :[[], [Validators.required]],
    message: [null, [Validators.required]]
  });
  breadcrumbs = [
    {
      label:'بوابة البرامج', 
      url:'/'
    }, 
    {
      label:'ارسال رسالة جديدة للاعضاء'
    }
  ]
  constructor(
    private swagger: SwaggerService,
    private fb: FormBuilder,
    private snackbarService: SnackbarService
  ){}

  ngOnInit(): void {
  }

  sendMessage(){
    const sms = {
      members_ids : this.formValue.members_ids,
      message: this.formValue.message,
      status_id: 0
    }

    this.swagger.createSms(sms)
      .subscribe(res=>{
        this.snackbarService.showSuccess('تم ار سال الرسالة بنجاح');
        this.form.reset();
      },error=>{
        this.snackbarService.showError(error.message)
      })
  }

  get formValue(){
    return this.form.value
  }
}
