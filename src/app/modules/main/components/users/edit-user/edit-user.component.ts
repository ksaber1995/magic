import { M } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      name: [null],
      email: [null, [Validators.email]],
      password: [null],
      confirmPassword: [null],
      jobTitle: [null],
      phoneNumber: [null],
      mobileNumber: [null],
      fax: [null],
      department:[null], 
      activate:[null], 
      block:[null]
    });
  }
  editUser(){
    
  }
}
