import { Component } from '@angular/core';


interface Item {
  name: string;
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
    name: 'الرسائل القصيرة',
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
}
