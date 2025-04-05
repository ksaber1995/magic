import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Role } from '../../../../../../model/role';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../swagger/swagger.service';

@Component({
  selector: 'app-edit-user-roles',
  templateUrl: './edit-user-roles.component.html',
  styleUrl: './edit-user-roles.component.scss',
})
export class EditUserRolesComponent {
  roles: (Role & { checked?: boolean })[] = [];
  id = this.route.snapshot.paramMap.get('id');

  breadcrumbs = [
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: ' تعديل الاذونات',
    },
  ];
  isUpdating: boolean;
  constructor(
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const roles$ = this.swagger.getAllRoles();
    const user$ = this.swagger.getOneUser(this.id);
    combineLatest([roles$, user$]).subscribe(([roles, user]) => {
      this.roles = roles;
      user.roles.forEach((role) => {
        let roleItem = this.roles.find((res) => res.id === role.id);
        if(roleItem){
          roleItem.checked = true;
        }
      });
    });
  }
  editRoles() {
    this.isUpdating = true;
    const body ={
      user_id: this.id,
      roles:  this.roles.map(res=> res.name)
    }

    this.swagger.assignRolesToUser(body).subscribe((res) => {
      this.isUpdating = false;
      this.snackbar.showSuccessSnackbar('تم تعديل الاذونات');
    },error=>{
      this.isUpdating = false;
      this.snackbar.showError(error.message);
    });
  }
}
