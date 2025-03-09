import { Component } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent {

  newsDetials = {
    date: 'January 18, 2018, 5:15 AM', 
    name:'استراتيجية إعادة الغطاء النباتي', 
    imagePath:'assets/images/news1.jpg',
    uploadedFiles:[
      {
        name:'Design V05.pdf', 
        path:'assets/images/pdf.svg'
      }
    ]
  }

}
