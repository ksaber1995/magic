import { Component } from '@angular/core';

const messages = [
  {
    date: '2021-01-31 Sunday',
    hour: '11:36 AM',
    message: {
      content:
        'الأخوة أعضاء اللجنة الفنية لحماية البيئة بمدينة الرياضالسلام عليكم ورحمة الله وبركاته دعوتكم لحضور: sadasdasadsadsads',
      date: '2021-01-31', 
      hour: '03:00AM', 
      location: 'حي السفارات - قصر الثقافة'
    },
    receiversList:[
      {
        photoPath : 'assests/images', 
        name:'admin'
      }
    ],
    messageStatus: 'لم يتم الاتصال بالخادم'
  },
];

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.scss',
})
export class ListMessagesComponent {
  messagesList = messages
}
