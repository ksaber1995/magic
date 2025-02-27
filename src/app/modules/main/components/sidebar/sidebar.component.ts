import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';


interface Item {
  name: string;
  icon: string;
  showChildren:boolean;
  childrens: {
    name: string;
    path: string;
    icon: string;
  }[]
}

// const programs = [ // from api
//   { name: 'البرنامج الأول' },
//   { name: 'البرنامج الثاني' },
//   { name: 'البرنامج الثالث' },
// ]

// const programsWithRoutes: item[] = programs.map((program => {
//   const id = '10';// from api
//   const item: item = {
//     name: program.name,
//     childrens: [
//       { name: 'الاجراءات', path: `/main/programs/${id}/procedures`, icon: '' },
//       { name: 'الملفات', path: `/main/programs/${id}/files`, icon: '' },
//       { name: 'أعضاء', path: `/main/programs/${id}/members`, icon: '' },
//       { name: 'التقارير', path: `/main/programs/${id}/reports`, icon: '' },
//       { name: 'قرارات اللجنة العليا', path: `/main/programs/${id}/supreme-committee-decisions`, icon: '' },

//     ]
//   }

//   return item
// }))


const routes: Item [] = [
  {
    name: 'الاجتماعات',
    icon: 'assets/images/meeting.svg',
    showChildren: false,
    childrens: [
      { name: 'قائمة الاجتماعات', path: '/main/list-messages', icon: 'assets/images/list-mt.png' },
      { name: 'انشاء اجتماع جديد', path: '/main/send-messages', icon: 'assets/images/new-meet.png' },
    ],
  },
  {
    name: 'ادارة المستخدمين',
    icon: 'assets/images/users-p.svg',
    showChildren: false,
    childrens: [
      { name: 'الرسائل القصيرة', path: '/main/list-messages', icon: '' },
      { name: 'ارسال رسالة جديدة', path: '/main/send-messages', icon: '' },
    ],
  },
  {
    name: 'ادارة الصلاحيات',
    icon: 'assets/images/reference-u.svg',
    showChildren: false,
    childrens: [
      { name: 'الرسائل القصيرة', path: '/main/list-messages', icon: '' },
      { name: 'ارسال رسالة جديدة', path: '/main/send-messages', icon: '' },
    ],
  },
  {
    name: 'ادارة الإذونات',
    icon: 'assets/images/permissions.svg',
    showChildren: false,
    childrens: [
      { name: 'الرسائل القصيرة', path: '/main/list-messages', icon: '' },
      { name: 'ارسال رسالة جديدة', path: '/main/send-messages', icon: '' },
    ],
  },
  {
    name: 'ادارة أخر مستجدات اللجنة',
    icon: 'assets/images/news-s.svg',
    showChildren: false,
    childrens: [
      { name: 'الرسائل القصيرة', path: '/main/list-messages', icon: '' },
      { name: 'ارسال رسالة جديدة', path: '/main/send-messages', icon: '' },
    ],
  },
  {
    name: 'قرارات اللجنة العليا',
    icon: 'assets/images/news-s.svg',
    showChildren: false,
    childrens: [
      { name: 'الرسائل القصيرة', path: '/main/list-messages', icon: '' },
      { name: 'ارسال رسالة جديدة', path: '/main/send-messages', icon: '' },
    ],
  },
  {
    name: 'الرسائل القصيرة',
    icon: 'assets/images/news-s.svg',
    showChildren: false,
    childrens: [
      { name: 'الرسائل القصيرة', path: '/main/list-messages', icon: '' },
      { name: 'ارسال رسالة جديدة', path: '/main/send-messages', icon: '' },
    ],
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  routes = routes;
  userInfo = {
    image : "assets/images/user-image.jpg", 
    name : "Admin",
    role : "اللجنة العليا"
  }
  showChildren : boolean = false;
  notificationsCount : number = 2;

  constructor(
    private auth : AuthService, 
    private router: Router
  ) {
    
  }
  

  logout(){
    this.auth.logout()
    this.router.navigate(['/login'])
  }
  showChildrenItemsToggle(item:Item ){
    item.showChildren = !item.showChildren;
  }
}
