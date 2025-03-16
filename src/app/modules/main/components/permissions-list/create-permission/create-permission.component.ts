import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrl: './create-permission.component.scss'
})
export class CreatePermissionComponent {
permissionForm : FormGroup
  constructor(
    private fb: FormBuilder
  ){

  }
  ngOnInit() {
    this.permissionForm = this.fb.group({
      name: ['',[Validators.required]],
      smsMessgeStatus: [''],
    })
  }
  createPermission(){
    console.log(this.permissionForm.value , 'ahmed')
  }
}
