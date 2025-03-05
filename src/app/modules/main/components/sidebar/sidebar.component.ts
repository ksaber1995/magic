import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';


interface SidebarChild {
  name: string;
  path: string;
  icon: string;
}
export interface SideBarItem {
  name: string;
  icon: string;
  showChildren: boolean;
  childrens?: SidebarChild[]
}

interface ProgramsItem {
  name: string;
  icon: string;
  showChildren: boolean;

  programs: SideBarItem[];
}

const programRouts: SidebarChild[] = [ // id will be dynamic
  { name: ' الاجراءات', path: '/main/programs/id/procedures', icon: 'assets/images/list-mt.png' }, //TODO, add icon here
  { name: 'الملفات', path: '/main/programs/id/files', icon: 'assets/images/new-meet.png' }, //TODO, add icon here
  { name: 'أعضاء', path: '/main/programs/id/members', icon: 'assets/images/new-meet.png' }, //TODO, add icon here
  { name: 'التقارير', path: '/main/programs/id/reports', icon: 'assets/images/new-meet.png' }, //TODO, add icon here
  { name: 'قرارات اللجنة العليا', path: '/main/programs/id/supreme-committee-decisions', icon: 'assets/images/new-meet.png' }, //TODO, add icon here
]

const programs: SideBarItem[] = [ // From endpoint
  {
    name: 'برنامج 1',
    icon: 'assets/images/meeting.svg',
    showChildren: false,
    childrens: programRouts,
  },
  {
    name: 'برنامج 2',
    icon: 'assets/images/meeting.svg',
    showChildren: false,
    childrens: programRouts,
  },

]

const programsParent: ProgramsItem = {
  name: 'البرامج',
  icon: 'assets/images/meeting.svg', //TODO, add icon here
  showChildren: false,
  programs: programs,
}

const routes: SideBarItem[] = [
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
    image: "assets/images/user-image.jpg",
    name: "Admin",
    role: "اللجنة العليا"
  }
  showChildren = false;
  notificationsCount = 2;
  programsParent = programsParent;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }


  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }
  showChildrenItemsToggle(item: SideBarItem) {
    item.showChildren = !item.showChildren;
  }
}
