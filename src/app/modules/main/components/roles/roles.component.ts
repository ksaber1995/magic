import { Component } from '@angular/core';

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
export class RolesComponent {
  roles: role[] = [
    {
      name: 'admin',
      roleId: 1,
      members: 4,
      roles: 5,
      id: '1222',
    },
    {
      name: 'admin',
      members: 4,
      roleId: 1,
      roles: 5,
      id: '1222',
    },
    {
      name: 'admin',
      members: 4,
      roleId: 2,
      roles: 5,
      id: '1222',
    },
    {
      name: 'admin',
      members: 4,
      roleId: 1,

      roles: 5,
      id: '1222',
    },
    {
      name: 'admin',
      members: 4,
      roleId: 1,
      roles: 5,
      id: '1222',
    },
    {
      roleId: 1,
      name: 'admin',
      members: 4,
      roles: 5,
      id: '1222',
    },
    {
      name: 'admin',
      members: 4,
      roles: 5,
      id: '1222',
      roleId: 1,
    },
    {
      name: '',
      roleId: 1,
      members: 4,
      roles: 5,
      id: '1222',
    },
  ];

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
