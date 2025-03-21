import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      jobTitle: [null],
      phoneNumber: [null],
      mobileNumber: [null],
      fax: [null],
      admin: [null],
      technicalCommittee: [null],
      supremeCommittee: [null],
      reportsFollowUpCommittee: [null],
      programSupervisors: [null],
      activateMembership: [null],
      sendActivationEmail: [null],
      sendWelcomeEmail: [null],
    });
  }
  createUser() {
    console.log(this.userForm.value);
  }
}
