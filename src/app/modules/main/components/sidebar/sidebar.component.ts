import { Component } from '@angular/core';

const routes = [
  { name: 'الرسائل القصيرة', childrens: [
    {name: 'الرسائل القصيرة' , path: '/main/list-messages'},
    {name: 'ارسال رسالة جديدة' , path: '/main/send-messages'},
  ] }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  routes = routes;
}
