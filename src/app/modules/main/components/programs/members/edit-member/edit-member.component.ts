import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.scss'
})
export class EditMemberComponent {
memberFrom: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.memberFrom = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      jobTitle: [null],
      phoneNumber: [null],
      mobileNumber: [null],
      fax: [null],
      active: [null],
      block:[null], 
      department:[null]
    });
  }
  getMemberById(){
    // we will patch value here and call the method in the onint
  }
  editMember() {
    console.log(this.memberFrom.value);
  }
}
