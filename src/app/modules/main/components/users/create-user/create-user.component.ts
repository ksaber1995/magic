import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../../../model/user';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Role } from './../../../../../../model/role';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  roles: Role[] ;
  isLoaded = false;
  breadCrumbs = [
    {
      label:'بوابة البرامج',
      url:'/'
    },
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: ' انشاء مستخدم',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      position: [null], // job title
      roles: this.fb.group({}),
      phone: [null],
      mobile: [null],
      fax: [null],
      activateMembership: [null],
      sendActivationEmail: [null],
      sendWelcomeEmail: [null],
    });

    this.swagger.getAllRoles().subscribe(res=> {
      this.roles = res.map(res=> ({...res, id: res.id.toString()}));
      const rolesFormGroup : FormGroup = this.userForm.get('roles') as FormGroup;
      this.roles.forEach(res=>{
        rolesFormGroup.addControl(res.id as string, this.fb.control(false))
      })
      this.isLoaded = true;
    });

    this.userForm.valueChanges.subscribe(res=>{
      console.log(this.rolesValue)
    })
  }

  createUser() {
    const user: Partial<User> = {
      name: this.formValue.name,
      email: this.formValue.email,
      password: this.formValue.password,
      position: this.formValue.position,
      phone: this.formValue.phone,
      mobile: this.formValue.mobile,
      fax: this.formValue.fax,
      // role: string,
      // status: string,
      // image: File | string,
    }

    this.swagger.register(user)
      .subscribe(user => {
        this.snackbarService.showSuccess('تم اضافة المستخدم بنجاح' , '/main/users');
      }, error => {
        this.snackbarService.showError(error.message)
      })
    console.log(this.userForm.value);
  }


  get formValue(){
    return this.userForm.value;
  }

  get rolesValue(){
    return this.userForm.get('roles').value as Array<any>;
  }
}
