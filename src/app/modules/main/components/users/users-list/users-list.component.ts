import { Component } from '@angular/core';
interface user {
  name: string;
  committees:string[];
  email: string;
  id: string;
  imagePath:string
}
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  users: user[] = [
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
    {
      name: 'دخول البوابة',
      committees: ['اعطاء صلاحيات دخول البوابة'],
      email: 'ahmed@etree.com.sa',
      id: '02',
      imagePath:''
    },
  ];
}
