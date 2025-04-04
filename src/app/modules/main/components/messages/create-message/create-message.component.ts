import { SnackbarService } from './../../../../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.scss'
})


export class CreateMessageComponent implements OnInit{
  allMembers$ = this.swagger.getAllMembers().pipe(map(members=> members.map(member => ({name: member.user?.name, id: member.id}))));
  isUpdating: boolean;
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
    this.isUpdating = true;

    const members: any[] = this.formValue.members_ids;

    const sms = {
      members_ids : members.includes('all_members') ? 'all_members' : members,
      message: this.formValue.message,
      status_id: 0
    }

    this.swagger.createSms(sms)
      .subscribe(res=>{
        this.snackbarService.showSuccess('تم ار سال الرسالة بنجاح', '/main/messages');
        this.form.reset();
        this.isUpdating = false;
      },error=>{
        this.snackbarService.showError(error.message);
        this.isUpdating = false;

      })
  }

  get formValue(){
    return this.form.value
  }

  get members_ids(): string []{
    return this.form.get('members_ids').value as string [];
  }
}
