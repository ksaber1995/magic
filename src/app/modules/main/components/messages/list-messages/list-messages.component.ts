import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Sms as SMS } from '../../../../../../model/sms';

type GroupedSMS = {
  created_date: string,
  messages: SMS[],
}[];
@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.scss',
})
export class ListMessagesComponent  implements OnInit{
  messages : SMS[];
  breadCrumbs = [
    {
      label:'بوابة البرامج',
      url:'/'
    },
    {
      label:' الرسائل القصيرة',
    },
  ]
  constructor(private swagger: SwaggerService){}

  ngOnInit(): void {
    this.swagger.getAllSms().subscribe(res=>{
      this.messages = res;
    //  this.messages = this.groupAndSortSMS(res);
     console.log(this.messages)
    })
  }
  groupAndSortSMS(smsRecords: SMS[]): GroupedSMS {
    const grouped: Record<string, SMS[]> = {};

    // Group SMS by date
    smsRecords.forEach((sms) => {
      const date = sms.created_at.split(" ")[0]; // Extract date part only
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(sms);
    });

    // Convert object to sorted array with items sorted by time within the same date
    return Object.keys(grouped)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .map((date) => ({
        created_date: date,
        messages: grouped[date].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      }));
  }




}
