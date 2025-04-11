import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Permission } from '../../../../../model/permission';
import { SnackbarService } from '../../../../services/snackbar.service';
import { SwaggerService } from '../../../../swagger/swagger.service';
import { DeleteDialogComponent } from '../supreme-committee/delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrl: './permissions-list.component.scss'
})
export class PermissionsListComponent implements OnInit {
  constructor(
    private swagger: SwaggerService,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) {

  }
  permissions: Permission[];
  breadCrumbButton = {label:'اضافة اذن' , url:'/main/permissions/create'}
  breadCrumbs = [
    {
      label:'بوابة البرامج',
      url:'/'
    },
    {
      label:'قائمة الأذونات'
    }
  ]
  ngOnInit(): void {
    this.swagger.getAllPermissions().subscribe(res => {
      this.permissions = res;

    })
  }



  delete(id: number) {
    const ref = this.dialog.open(DeleteDialogComponent)
    ref.afterClosed().subscribe(res => {
      if (res) {
        this.swagger.deletePermission(id)
          .subscribe(() => {
            const index = this.permissions.findIndex(res => res.id === id)
            this.permissions.splice(index, 1);
            this.snackbar.showSuccessSnackbar('تم حذف الاذن')
          }, error => {
            this.snackbar.showError(error.message)

          })
      }
    })
  }

}
