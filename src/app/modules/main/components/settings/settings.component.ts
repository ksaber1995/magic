import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{
  settingForm : FormGroup
  constructor(
    private fb: FormBuilder
  ){

  }
  ngOnInit() {
    this.settingForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['' , [Validators.email]], 
      emailMessgeStatus: [''],
      smsMessgeStatus: [''],
    })
  }
  updataSite(){
    console.log(this.settingForm.value , 'ahmed')
  }
}
