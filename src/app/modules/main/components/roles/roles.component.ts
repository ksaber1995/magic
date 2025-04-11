import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Role } from '../../../../../model/role';
import { SnackbarService } from '../../../../services/snackbar.service';
import { SwaggerService } from '../../../../swagger/swagger.service';
import { DeleteDialogComponent } from '../supreme-committee/delete-dialog/delete-dialog.component';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  roles: (Role & { members?: number })[] = [];

  breadCrumbButton = { label: 'اضافة صلاحية', url: '/main/roles/create' };

  breadCrumbs = [
    {
      label:'بوابة البرامج',
      url:'/'
    },
    {
      label: ' الصلاحيات',
    },
  ];
  constructor(
    private swagger: SwaggerService,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    const roles$ = this.swagger.getAllRoles();
    const users$ = this.swagger.getAllUsers();

    combineLatest([roles$, users$]).subscribe(([roles, users]) => {
      this.roles = roles;
      this.roles.forEach((item) => {
        const usersWithRole = users.filter((user) =>
          user.roles.find((role) => role.id === item.id)
        );
        item.members = usersWithRole.length || 0;
      });
    });
  }

  delete(id: number) {
    const ref = this.dialog.open(DeleteDialogComponent);
    ref.afterClosed().subscribe((res) => {
      if (res) {
        this.swagger.deleteRole(id).subscribe(
          () => {
            const index = this.roles.findIndex((res) => res.id === id);
            this.roles.splice(index, 1);
            this.snackbar.showSuccessSnackbar('تم حذف الاذن');
          },
          (error) => {
            this.snackbar.showError(error.message);
          }
        );
      }
    });
  }
}
