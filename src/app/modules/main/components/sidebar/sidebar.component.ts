import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { SwaggerService } from '../../../../swagger/swagger.service';


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


function getProgramRoutes(id):SidebarChild[] {
  return [ // id will be dynamic
    { name: ' الاجراءات', path: `/main/programs/${id}/procedures`, icon: 'assets/images/list-mt.png' }, //TODO, add icon here
    { name: 'الملفات', path: `/main/programs/${id}/files`, icon: 'assets/images/new-meet.png' }, //TODO, add icon here
    { name: 'أعضاء', path: `/main/programs/${id}/members`, icon: 'assets/images/new-meet.png' }, //TODO, add icon here
    { name: 'التقارير', path: `/main/programs/${id}/reports`, icon: 'assets/images/new-meet.png' }, //TODO, add icon here
    { name: 'قرارات اللجنة العليا', path: `/main/programs/${id}/supreme-committee-decisions`, icon: 'assets/images/new-meet.png' }, //TODO, add icon here
  ]
}


const programsParent: ProgramsItem = {
  name: 'البرامج',
  icon: 'assets/images/meeting.svg', //TODO, add icon here
  showChildren: false,
  programs: [],
}

const routes: SideBarItem[] = [
  {
    name: 'الاجتماعات',
    icon: 'assets/images/meeting.svg',
    showChildren: false,
    childrens: [
      { name: 'قائمة الاجتماعات', path: '/main/meetings', icon: 'assets/images/list-mt.png' },
      { name: 'انشاء اجتماع جديد', path: '/main/create-meeting', icon: 'assets/images/new-meet.png' },
    ],
  },
  {
    name: 'ادارة المستخدمين',
    icon: 'assets/images/users-p.svg',
    showChildren: false,
    childrens: [
      { name: 'قائمة المستخدمين', path: '/main/users', icon: '' },
      { name: 'انشاء مستخدم', path: '/main/create-user', icon: '' },
      { name: 'اعدادات المستخدمين', path: '/main/users-setting', icon: '' },
    ],
  },
  {
    name: 'ادارة الصلاحيات',
    icon: 'assets/images/reference-u.svg',
    showChildren: false,
    childrens: [
      { name: 'قائمة الصلاحيات', path: '/main/roles', icon: '' },
      { name: 'انشاء صلاحية', path: '/main/create-role', icon: '' },
    ],
  },
  {
    name: 'ادارة الإذونات',
    icon: 'assets/images/permissions.svg',
    showChildren: false,
    childrens: [
      { name: 'قائمة الأذونات', path: '/main/permissions-list', icon: '' },
      { name: 'إنشاء اذن', path: '/main/new-permission', icon: '' },
    ],
  },
  {
    name: 'ادارة أخر مستجدات اللجنة',
    icon: 'assets/images/news-s.svg',
    showChildren: false,
    childrens: [
      { name: 'ادارة اخر المستجدات', path: '/main/committee-updates-list', icon: '' },
      { name: 'انشاء خبر جديد', path: '/main/create-new-news', icon: '' },
    ],
  },
  {
    name: 'قرارات اللجنة العليا',
    icon: 'assets/images/news-s.svg',
    showChildren: false,
    childrens: [
      { name: 'قرارات اللجنة العليا', path: '/main/list-decisions', icon: '' },
      { name: 'انشاء قرار جديد', path: '/main/new-decision', icon: '' },
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
export class SidebarComponent implements OnInit{
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
    private router: Router,
    private swagger: SwaggerService,
  ) {
  }


  ngOnInit(): void {
     this.getPrograms();
  }

  getPrograms(){
    this.swagger.getAllProjects()
      .subscribe(res=>{
        const programs: SideBarItem[] = res.map(res=>{
            return{
              name: res.title,
              icon: res.image,
              showChildren: false,

              childrens: getProgramRoutes(res.id),
            }
        })

        programsParent.programs = programs;
      })
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }
  showChildrenItemsToggle(item: SideBarItem) {
    item.showChildren = !item.showChildren;
  }
}
