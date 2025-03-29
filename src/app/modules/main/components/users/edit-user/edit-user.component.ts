import { M } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  userId = this.route.snapshot.paramMap.get('id');
  
  constructor(
    private fb: FormBuilder , 
    private swagger : SwaggerService, 
    private route : ActivatedRoute
  ) {}
  breadcrumbs = [
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: 'تحرير العضو',
    },
  ];
  
  ngOnInit() {
    this.userForm = this.fb.group({
      name: [null],
      email: [null, [Validators.email]],
      password: [null],
      confirmPassword: [null],
      position: [null],
      phone: [null],
      mobile: [null],
      fax: [null],
      department:[null], 
      activate:[null], 
      block:[null]
    });
    this.getUserData()
  }
  getUserData(){
    this.swagger.getOneUser(this.userId).subscribe((res:any)=>{
      const userData = res.data
      console.log(userData)
      this.userForm.patchValue({
        name: userData.name,
        email: userData.email,
        fax: userData.fax,
        position: userData.position,
        mobile:userData.mobile,
        phone:userData.phone,

      })
    }) 
  }
  editUser(){
    
  }
}
