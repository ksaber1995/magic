import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface user {
  name: string;
  committees:string[];
  email: string;
  id: string;
  roleType:number; 
  imagePath:string,
  activated:boolean
}
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  users: user[] = [
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:0,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: false,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
    {
      name: 'admin',
      committees: ['اعطاء صلاحيات admin'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      roleType:1,
      activated: true,
      imagePath:'assets/images/user-image.jpg'
    },
  ];
  constructor(
    private router : Router
  ){

  }
  userDetails(id : string){
    this.router.navigate(['main/users/', id ])
  }
}
