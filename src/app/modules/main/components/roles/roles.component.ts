import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../supreme-committee/delete-dialog/delete-dialog.component';
import { Role } from '../../../../../model/role';
import { SnackbarService } from '../../../../services/snackbar.service';

interface role {
  name: string;
  members: number;
  roles: number;
  id: string;
  roleId: number;
}
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];

  constructor(
    private swagger: SwaggerService,
    private dialog: MatDialog,
    private snackbar : SnackbarService

  ){}

  ngOnInit(): void {
    this.swagger.getAllRoles().subscribe(res=>{
      this.roles = res
    });

  }

  rolesClasses = {
    upperPermission: {
      name: 'أذن أعلي',
      className: 'red',
    },
    projects: {
      name: 'الوصول للمشاريع',
      className: 'blue',
    },
  };


    delete(id: number) {
      const ref = this.dialog.open(DeleteDialogComponent)
      ref.afterClosed().subscribe(res => {
        if (res) {
          this.swagger.deleteRole(id)
            .subscribe(() => {
              const index = this.roles.findIndex(res => res.id === id)
              this.roles.splice(index, 1);
              this.snackbar.showSuccess('تم حذف الاذن')
            }, error => {
              this.snackbar.showError(error.message)

            })
        }
      })
    }


}
