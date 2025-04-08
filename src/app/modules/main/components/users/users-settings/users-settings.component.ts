import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-settings',
  templateUrl: './users-settings.component.html',
  styleUrl: './users-settings.component.scss'
})
export class UsersSettingsComponent implements OnInit {
  settingForm: FormGroup
  constructor(
    private fb : FormBuilder
  ){}
  breadCrumbs = [
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: ' إعدادات المستخدمين',
    },
  ];
  ngOnInit() {
    this.settingForm = this.fb.group({
      committeeType:[null],
      country:[null],
      register:[null],
      activate:[null],
      sendWelcomeEmail:[null]
    })
  }
  committees=[
    {
      name:'اللجنة الفنية',
      value:1
    },
    {
      name:'مشرفين اللجنة',
      value:2
    },
    {
      name:'لجنة متابعة التقارير',
      value:3
    },
    {
      name:'اللجنة العليا',
      value:4
    },
    {
      name:'admin',
      value:5
    }
  ]
  updateSetting(){
    console.log(this.settingForm.value)
  }
}
