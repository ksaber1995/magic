import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';



@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.scss',
})
export class ListMessagesComponent  implements OnInit{
  messages;
  breadcrumbs = [
    {
      label:' الرسائل القصيرة', 
    }, 
  ]
  constructor(private swagger: SwaggerService){}

  ngOnInit(): void {
    this.swagger.getAllSms().subscribe(res=>{
      console.log(res)
      this.messages = res;

    })
  }

}
