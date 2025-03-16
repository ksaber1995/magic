import { Component } from '@angular/core';
interface permission {
  name:string,
  discripition:string,
  endPoint:string,
  role:string,
  id:string
}

@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrl: './permissions-list.component.scss'
})
export class PermissionsListComponent {
  permissions: permission[] = [
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },
    {
      name:'دخول البوابة',
      discripition:'اعطاء صلاحيات دخول البوابة',
      endPoint:'portal.access',
      role:'5 Roles',
      id:'02'
    },


  ]
}
