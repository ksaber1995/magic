import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';

@Component({
  selector: 'app-edit-user-roles',
  templateUrl: './edit-user-roles.component.html',
  styleUrl: './edit-user-roles.component.scss'
})
export class EditUserRolesComponent {
 rolesForm: FormGroup;
 roles$ = this.swagger.getAllRoles();

  breadcrumbs = [
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: ' تعديل الاذونات',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService
  ) {}
  ngOnInit() {
    this.rolesForm = this.fb.group({
      admin: [null],
      technicalCommittee: [null],
      supremeCommittee: [null],
      reportsFollowUpCommittee: [null],
      programSupervisors: [null],
    });
  }
  editRoles() {}
}
