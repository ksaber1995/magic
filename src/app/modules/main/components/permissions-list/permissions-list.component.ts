import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';
import { Permission } from '../../../../../model/permission';


@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrl: './permissions-list.component.scss'
})
export class PermissionsListComponent implements OnInit{
  constructor (private swagger: SwaggerService){

  }
  permissions: Permission[];

  ngOnInit(): void {
    this.swagger.getAllPermissions().subscribe(res=>{
      this.permissions = res;

    })
  }

}
