import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';

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
  roles$ = this.swagger.getAllRoles();

  constructor(private swagger: SwaggerService){}

  ngOnInit(): void {
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
}
