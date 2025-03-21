import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{
  settingForm : FormGroup
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService
  ){

  }
  ngOnInit() {
    this.swagger.getAllSettings()
    .subscribe(res=>{
      console.log(res)
    })
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
