import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of } from 'rxjs';
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

  breadCrumbs = [
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: ' تعديل الاذونات',
    },
  ];
  isUpdating: boolean;
  oldRoles: string[] = [];
  constructor(
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
   this.getRoles()
  }

  getRoles(){
    const roles$ = this.swagger.getAllRoles();
    const user$ = this.swagger.getOneUser(this.id);
    combineLatest([roles$, user$]).subscribe(([roles, user]) => {
      this.roles = roles;
      user.roles.forEach((role) => {
        let roleItem = this.roles.find((res) => res.id === role.id);
        if(roleItem){
          roleItem.checked = true;
          this.oldRoles.push(role.name);
        }
      });
    });
  }
  editRoles(){
    this.isUpdating = true;
    const checkRoles = this.roles.filter((role) => role.checked);
    const rolesToBeDeleted = this.oldRoles.filter((res) => !checkRoles.find((role) => role.name === res));

    const removeRequests$ = combineLatest([...rolesToBeDeleted.map((res) => this.swagger.removeRolesFromUser({user_id: this.id, role: res}))]);

    combineLatest([
      checkRoles.length > 0 ? this.swagger.assignRolesToUser({user_id: this.id, roles: checkRoles.map(res=> res.name)}) : removeRequests$
    ]).subscribe((res) => {
      this.isUpdating = false;
      this.snackbar.showSuccessSnackbar('تم تعديل الاذونات');
    },error=>{
      this.isUpdating = false;
      this.snackbar.showError(error.message);
    })
  }


}
